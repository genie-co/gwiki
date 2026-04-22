PAGES.dealers = {
  title: "Dealer Locator",
  desc: "Filter and sort through authorized Genie dealers",
  section: "Reference",
  tags: ["dealer", "referrals"],
  body: /*html*/ `
<div class="page-layout">
  <div class="contents dealer-sidebar" id="dealer-filters">
    <h1>Filters</h1>
  </div>
  <div class="body" style="padding-right:10px">
    <table class="dealer-table" id="dealer-table">
      <thead>
        <tr>
          <th>Dealer</th>
          <th>State</th>
          <th>Account #</th>
          <th>ZIP</th>
          <th>Phone</th>
          <th>Fax</th>
          <th>Email</th>
          <th>Service Cost</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody id="dealer-tbody"></tbody>
    </table>
  </div>
</div>
  `,
};

// DEALER_DATA row layout: [name, state, acct, zip, phone, fax, email, cost, notes]
// Filters: only State (idx 1) and ZIP (idx 3)
const DEALER_FILTER_COLS = [
  { label: "State", idx: 1 },
  { label: "ZIP",   idx: 3 },
];

function initDealers() {
  const tbody = document.getElementById("dealer-tbody");
  const sidebar = document.getElementById("dealer-filters");
  if (!tbody || !sidebar) return;

  // Clear any previous render (re-navigation)
  tbody.innerHTML = "";
  sidebar.querySelectorAll(".dealer-filter").forEach(el => el.remove());

  // --- Render rows ---
  const rowEls = DEALER_DATA.map(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = row.map(cell => `<td>${escDlr(cell)}</td>`).join("");
    tbody.appendChild(tr);
    return tr;
  });

  // --- Filter state: one Set per filter column, empty = no filter ---
  const filters = DEALER_FILTER_COLS.map(() => new Set());

  // --- Unique values per filter column (sorted, non-empty) ---
  const uniqueVals = DEALER_FILTER_COLS.map(col =>
    [...new Set(DEALER_DATA.map(r => r[col.idx]).filter(v => v && v.trim()))].sort()
  );

  // --- Build filter UI ---
  DEALER_FILTER_COLS.forEach((col, fi) => {
    const wrap = document.createElement("div");
    wrap.className = "dealer-filter";

    const labelRow = document.createElement("div");
    labelRow.className = "df-label-row";

    const lbl = document.createElement("span");
    lbl.className = "df-label";
    lbl.textContent = col.label;

    const rightSide = document.createElement("div");
    rightSide.className = "df-label-right";

    const countBadge = document.createElement("span");
    countBadge.className = "df-count";
    countBadge.id = `df-count-${fi}`;

    const clearBtn = document.createElement("button");
    clearBtn.className = "df-clear";
    clearBtn.textContent = "Clear";
    clearBtn.addEventListener("click", e => {
      e.stopPropagation();
      filters[fi].clear();
      input.value = "";
      updateBadge(fi);
      applyFilters();
      populateDropdown(fi, "");
    });

    rightSide.appendChild(countBadge);
    rightSide.appendChild(clearBtn);
    labelRow.appendChild(lbl);
    labelRow.appendChild(rightSide);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search\u2026";

    const dropdown = document.createElement("div");
    dropdown.className = "df-dropdown";
    dropdown.id = `df-drop-${fi}`;

    input.addEventListener("focus", () => {
      closeAllDropdowns(fi);
      populateDropdown(fi, input.value);
      dropdown.classList.add("open");
    });

    input.addEventListener("input", () => {
      populateDropdown(fi, input.value);
      dropdown.classList.add("open");
    });

    wrap.appendChild(labelRow);
    wrap.appendChild(input);
    wrap.appendChild(dropdown);
    sidebar.appendChild(wrap);

    // Element is in DOM — safe to populate now
    populateDropdown(fi, "");
  });

  // --- Dropdown population ---
  function populateDropdown(colIdx, search) {
    const drop = document.getElementById(`df-drop-${colIdx}`);
    if (!drop) return;
    const q = search.toLowerCase().trim();
    const vals = q
      ? uniqueVals[colIdx].filter(v => v.toLowerCase().includes(q))
      : uniqueVals[colIdx];
    drop.innerHTML = vals.map(v => {
      const checked = filters[colIdx].has(v) ? "checked" : "";
      const esc = escDlr(v);
      return `<label><input type="checkbox" value="${esc}" data-fi="${colIdx}" ${checked}>${esc}</label>`;
    }).join("");
    drop.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", () => {
        const fi2 = parseInt(cb.getAttribute("data-fi"));
        if (cb.checked) filters[fi2].add(cb.value);
        else filters[fi2].delete(cb.value);
        updateBadge(fi2);
        applyFilters();
      });
    });
  }

  // --- Close dropdowns when clicking outside ---
  document.addEventListener("click", e => {
    if (!e.target.closest(".dealer-filter")) closeAllDropdowns(-1);
  });

  function closeAllDropdowns(exceptFi) {
    document.querySelectorAll(".df-dropdown").forEach((d, i) => {
      if (i !== exceptFi) d.classList.remove("open");
    });
  }

  function updateBadge(fi) {
    const badge = document.getElementById(`df-count-${fi}`);
    if (!badge) return;
    badge.textContent = filters[fi].size > 0 ? `(${filters[fi].size})` : "";
  }

  function applyFilters() {
    const active = filters
      .map((s, fi) => ({ set: s, idx: DEALER_FILTER_COLS[fi].idx }))
      .filter(f => f.set.size > 0);
    rowEls.forEach((tr, i) => {
      const row = DEALER_DATA[i];
      tr.style.display = active.every(f => f.set.has(row[f.idx])) ? "" : "none";
    });
  }
}

function escDlr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
