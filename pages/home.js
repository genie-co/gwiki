const ACCESS_CODES = [
  [1,5,937],[1,12,187],[1,19,296],[1,26,312],
  [2,2,488],[2,9,559],[2,16,612],[2,23,790],
  [3,2,844],[3,9,966],[3,16,171],[3,23,280],[3,30,321],
  [4,6,407],[4,13,556],[4,20,613],[4,27,762],
  [5,4,848],[5,11,954],[5,18,133],[5,25,267],
  [6,1,302],[6,8,480],[6,15,509],[6,22,635],[6,29,717],
  [7,6,847],[7,13,988],[7,20,196],[7,27,211],
  [8,3,328],[8,10,400],[8,17,562],[8,24,622],[8,31,793],
  [9,7,822],[9,14,971],[9,21,177],[9,28,266],
  [10,5,301],[10,12,412],[10,19,527],[10,26,634],
  [11,2,703],[11,9,856],[11,16,969],[11,23,186],[11,30,282],
  [12,7,399],[12,14,442],[12,21,550],[12,28,636],
];

function initHome() {
  const today = new Date();
  const year = today.getFullYear();
  let current = null;
  for (const [month, day, code] of ACCESS_CODES) {
    if (new Date(year, month - 1, day) <= today) {
      current = { month, day, code };
    }
  }
  const el = document.getElementById('current-week-code');
  if (el && current) {
    el.innerHTML = `<span class="code-label">Access Code</span><span class="code-value">${current.code}</span>`;
  }
}

PAGES.home = {
  title: "Home",
  type: 'hub',
  description: "Quick access to frequently used resources",
  ids: ['contacts', 'dealers', 'parts', 'catalog', 'specs', 'compatibility'],
};
