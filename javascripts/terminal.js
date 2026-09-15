(function () {
  var L = [
    { t: 'cmd', s: '$ run design-audit --target ./product', d: 0 },
    { t: 'dim', s: '  3 screens found. starting audit.', d: 500 },
    { t: 'gap', d: 900 },
    { t: 'err', lbl: 'brand.identity', val: 'undefined', d: 1100 },
    { t: 'err', lbl: 'brand.colors', val: '[#000, #fff, #0000ff, ???]', d: 1450 },
    { t: 'err', lbl: 'layout.spacing', val: 'chaotic (eyeballed)', d: 1800 },
    { t: 'err', lbl: 'ux.cta', val: '7 primary buttons on 1 screen', d: 2150 },
    { t: 'err', lbl: 'ux.copy', val: '"click here" used 12 times', d: 2500 },
    { t: 'gap', d: 2850 },
    { t: 'dim', s: '  9 issues. Calling designer...', d: 3050 },
    { t: 'gap', d: 3600 },
    { t: 'cmd', s: '$ anelia --fix-all', d: 3900 },
    { t: 'gap', d: 4500 },
    { t: 'ok', lbl: 'brand.identity', val: '✓ defined', d: 4800 },
    { t: 'ok', lbl: 'layout.spacing', val: '✓ intentional', d: 5150 },
    { t: 'ok', lbl: 'ux.cta', val: '✓ one job, one button', d: 5500 },
    { t: 'ok', lbl: 'ux.copy', val: '✓ says what it means', d: 5850 },
    { t: 'gap', d: 6200 },
    { t: 'done', s: '  product looks like it shipped on purpose.', d: 6600 },
  ];

  window.txRunAudit = function () {
    var el = document.getElementById('tx-terminal');
    if (!el) return;
    el.innerHTML = '';
    L.forEach(function (l, i) {
      setTimeout(function () {
        var cur = el.querySelector('.tx-cursor');
        if (cur) cur.remove();
        if (l.t === 'gap') { el.appendChild(document.createElement('br')); return; }
        var div = document.createElement('div');
        div.className = 'tx-tline';
        if (l.t === 'cmd')  div.innerHTML = '<span class="tx-tcmd">' + l.s + '</span>';
        if (l.t === 'dim')  div.innerHTML = '<span class="tx-tdim">' + l.s + '</span>';
        if (l.t === 'done') div.innerHTML = '<span class="tx-tok tx-tdone">' + l.s + '</span>';
        if (l.t === 'err')  div.innerHTML = '<span class="tx-tdim">  </span><span class="tx-tlbl">' + l.lbl + '</span><span class="tx-tarr">→ </span><span class="tx-terr">' + l.val + '</span>';
        if (l.t === 'ok')   div.innerHTML = '<span class="tx-tdim">  </span><span class="tx-tlbl">' + l.lbl + '</span><span class="tx-tarr">→ </span><span class="tx-tok">' + l.val + '</span>';
        if (i === L.length - 1) div.innerHTML += '<span class="tx-cursor"></span>';
        el.appendChild(div);
      }, l.d);
    });
  };

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      if (document.getElementById('tx-terminal')) {
        window.txRunAudit();
      }
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('tx-terminal')) {
        window.txRunAudit();
      }
    });
  }
})();
