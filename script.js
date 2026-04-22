        function renderCategory(cat) {
            const tocItems = cat.topics.map(t => `<li><a href="#${t.id}">${t.title}</a></li>`).join('');
            const subtitle = cat.subtitle ? `<p class="guide-cat-subtitle">${cat.subtitle}</p>` : '';
            const intro = cat.intro ? `<div class="guide-intro">${cat.intro}</div>` : '';
            const topics = cat.topics.map(t => t.type === 'steps' ? renderStepsTopic(t) : renderReferenceTopic(t)).join('');
            return `
                <div class="page-layout">
                    <div class="contents">
                        <h1>Contents</h1>
                        <ul>${tocItems}</ul>
                    </div>
                    <div class="body">${subtitle}${intro}${topics}</div>
                </div>
            `;
        }

        function renderStepsTopic(topic) {
            const intro = topic.intro ? `<div class="guide-intro">${topic.intro}</div>` : '';
            const steps = topic.steps.map(step => {
                const substeps = step.substeps?.length
                    ? `<ol class="guide-substeps" type="a">${step.substeps.map(s => `<li>${s}</li>`).join('')}</ol>`
                    : '';
                return `<li class="guide-step">
                    <label class="guide-step-label">
                        <input type="checkbox" class="guide-step-check">
                        <span class="guide-step-text">${step.text}</span>
                    </label>
                    ${substeps}
                </li>`;
            }).join('');
            const note = topic.note ? `<div class="guide-note">${topic.note}</div>` : '';
            return `
                <h3 id="${topic.id}">${topic.title}</h3>
                ${intro}
                <ol class="guide-steps">${steps}</ol>
                <button class="guide-reset-btn" onclick="resetGuideSteps(this)">&#x21BA; Reset steps</button>
                ${note}
            `;
        }

        function renderReferenceTopic(topic) {
            const body = topic.body ? `<div class="guide-ref-body">${topic.body}</div>` : '';
            const bullets = topic.bullets?.length
                ? `<ul class="guide-ref-bullets">${topic.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
                : '';
            return `
                <h3 id="${topic.id}">${topic.title}</h3>
                ${body}${bullets}
            `;
        }

        function resetGuideSteps(btn) {
            const ol = btn.previousElementSibling.tagName === 'OL'
                ? btn.previousElementSibling
                : btn.parentElement.querySelector('.guide-steps');
            if (!ol) return;
            ol.querySelectorAll('.guide-step-check').forEach(cb => {
                cb.checked = false;
                cb.closest('.guide-step').classList.remove('done');
            });
            btn.classList.remove('visible');
        }

        function renderHub(id, page) {
            const main = document.getElementById('main-content');
            const cards = page.ids.map(cid => {
                const cp = PAGES[cid];
                if (!cp) return '';
                const descHtml = cp.desc ? `<div class="hub-card-desc">${cp.desc}</div>` : '';
                return `<div class="hub-card" onclick="navigate('${cid}')">
                    <div class="hub-card-title">${cp.title}</div>
                    <div class="hub-card-bottom">${descHtml}</div>
                </div>`;
            }).join('');

            main.innerHTML = `
                <article>
                    <div class="article-header">
                        <div class="breadcrumb">
                            <a onclick="navigate('home')" style="color:var(--text);cursor:pointer">Home</a>
                            <span>›</span>
                            <span>${page.title}</span>
                        </div>
                    </div>
                    <div class="article-body">
                        <div class="hub-header">
                            <h1>${page.title}</h1>
                            ${page.description ? `<div class="hub-header-desc">${page.description}</div>` : ''}
                            <hr>
                        </div>
                        <div class="hub-grid">${cards}</div>
                    </div>
                </article>
            `;
            history.replaceState(null, '', `#${id}`);
            const hubScroller = main.querySelector('.article-body');
            if (hubScroller) hubScroller.scrollTop = 0;

            requestAnimationFrame(() => {
                const grid = main.querySelector('.hub-grid');
                if (!grid) return;
                const cards = [...grid.querySelectorAll('.hub-card')];
                const cols = 3;
                for (let i = 0; i < cards.length; i += cols) {
                    const row = cards.slice(i, i + cols);
                    const maxTitleH = Math.max(...row.map(c => c.querySelector('.hub-card-title')?.offsetHeight ?? 0));
                    row.forEach(c => {
                        const t = c.querySelector('.hub-card-title');
                        if (t) t.style.minHeight = maxTitleH + 'px';
                    });
                }
            });
        }

        function navigate(id) {
            const page = PAGES[id];
            const main = document.getElementById('main-content');

            if (!page) {
                main.innerHTML = `<div id="no-result" style="display:block">
      <p style="font-size:1.5rem;font-weight:700;">Page not found</p>
      <p style="margin-top:.5rem">No page with id "<code>${id}</code>" exists.</p>
    </div>`;
                return;
            }

            if (page.type === 'hub') {
                renderHub(id, page);
                return;
            }

            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.toggle('active', el.getAttribute('onclick') === `navigate('${id}')`);
            });

            const tagsHtml = (page.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

            const hubPage = page.section && Object.entries(PAGES).find(([, p]) => p.type === 'hub' && p.title === page.section);
            const sectionCrumb = hubPage
                ? `<a onclick="navigate('${hubPage[0]}')" style="color:var(--text);cursor:pointer">${page.section}</a>`
                : `<span>${page.section || ''}</span>`;

            main.innerHTML = `
    <article>
      <div class="article-header">
        ${id !== 'home' ? `<div class="breadcrumb">
          <a onclick="navigate('home')" style="color:var(--text);cursor:pointer">Home</a>
          <span>›</span>
          ${sectionCrumb}
          <span>›</span>
          <span>${page.title}</span>
        </div>` : ''}
        <h1>${page.title}</h1>
        <div class="meta">${tagsHtml}</div>
      </div>
      <div class="article-body">
        ${page.body}
      </div>
    </article>
  `;

            history.replaceState(null, '', `#${id}`);
            const scroller = main.querySelector('.page-layout > *:not(.contents)') || main.querySelector('.article-body');
            if (scroller) scroller.scrollTop = 0;

            if (id === 'catalog') initCatalog();
            if (id === 'dealers') initDealers();
            if (id === 'parts') initParts();

            const noPageSearch = ['parts', 'dealers', 'catalog'];
            if (!noPageSearch.includes(id)) initPageSearch();
        }

        

        function highlightPageText(root, query) {
            const ql = query.toLowerCase();
            const re = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            let count = 0;
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
                acceptNode(node) {
                    const tag = node.parentNode?.tagName?.toLowerCase();
                    if (['script', 'style', 'mark', 'input', 'textarea'].includes(tag)) return NodeFilter.FILTER_REJECT;
                    return node.textContent.toLowerCase().includes(ql) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            });
            const nodes = [];
            let n;
            while ((n = walker.nextNode())) nodes.push(n);
            nodes.forEach(textNode => {
                const matches = [...textNode.textContent.matchAll(re)];
                if (!matches.length) return;
                count += matches.length;
                const frag = document.createDocumentFragment();
                let last = 0;
                const txt = textNode.textContent;
                matches.forEach(m => {
                    if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
                    const mark = document.createElement('mark');
                    mark.className = 'page-mark';
                    mark.textContent = m[0];
                    frag.appendChild(mark);
                    last = m.index + m[0].length;
                });
                if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
                textNode.parentNode.replaceChild(frag, textNode);
            });
            return count;
        }

        document.getElementById('main-content').addEventListener('change', function (e) {
            if (!e.target.matches('.guide-step-check')) return;
            e.target.closest('.guide-step').classList.toggle('done', e.target.checked);
            const ol = e.target.closest('.guide-steps');
            const btn = ol?.nextElementSibling;
            if (btn?.classList.contains('guide-reset-btn')) {
                btn.classList.toggle('visible', ol.querySelectorAll(':checked').length > 0);
            }
        });

        document.getElementById('main-content').addEventListener('click', function (e) {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const targetId = anchor.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target && !PAGES[targetId]) {
                    e.preventDefault();
                    const scroller = target.closest('.page-layout > *:not(.contents)') ||
                                     target.closest('.article-body');
                    if (scroller) {
                        const top = target.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 8;
                        scroller.scrollTo({ top, behavior: 'smooth' });
                    }
                    return;
                }
            }
        });

        document.getElementById('main-content').addEventListener('click', function (e) {
            const sectionRow = e.target.closest('tr.section-row');
            if (!sectionRow) return;

            const isOpen = sectionRow.classList.contains('open');
            sectionRow.classList.toggle('open');

            let next = sectionRow.nextElementSibling;
            while (next && !next.classList.contains('section-row')) {
                next.style.display = isOpen ? 'none' : '';
                next = next.nextElementSibling;
            }
        });

        document.getElementById('main-content').addEventListener('mouseover', function (e) {
            const row = e.target.closest('tr.fi-group');
            if (!row) return;
            const label = row.closest('table').querySelector('td.fi-label');
            if (label) label.classList.add('fi-hover');
        });
        document.getElementById('main-content').addEventListener('mouseout', function (e) {
            const row = e.target.closest('tr.fi-group');
            if (!row) return;
            if (row.contains(e.relatedTarget)) return;
            const label = row.closest('table').querySelector('td.fi-label');
            if (label) label.classList.remove('fi-hover');
        });

        const searchInput = document.getElementById('search');
        const resultsBox = document.getElementById('search-results');

        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            if (!q) { resultsBox.style.display = 'none'; return; }

            const hits = Object.entries(PAGES).filter(([id, p]) =>
                p.title.toLowerCase().includes(q) ||
                (p.tags || []).some(t => t.includes(q)) ||
                (p.body && p.body.toLowerCase().includes(q))
            );

            if (!hits.length) {
                resultsBox.innerHTML = `<div class="search-result-item" style="color:var(--muted)">No results for "${q}"</div>`;
            } else {
                resultsBox.innerHTML = hits.map(([id, p]) => `
      <div class="search-result-item" onclick="navigate('${id}'); searchInput.value=''; resultsBox.style.display='none'">
        <strong>${p.title}</strong>
        <div class="sr-section">${p.section || (p.type === 'hub' ? 'Hub' : '')}</div>
      </div>
    `).join('');
            }

            resultsBox.style.display = 'block';
        });

        document.addEventListener('click', e => {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });

        navigate(location.hash.slice(1) || 'home');
        initHome();
