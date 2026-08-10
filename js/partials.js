// Injeta o header/menu de navegação (compartilhado pelas 4 páginas) no lugar
// da <div id="site-header-placeholder">, marcando o link da página atual como ativo.
// Evita duplicar o mesmo HTML de header em cada arquivo .html.
(function () {
  var placeholder = document.getElementById('site-header-placeholder');
  if (!placeholder) return;

  // data-page é definido em cada <body> (ex: data-page="formacao")
  var currentPage = document.body.getAttribute('data-page');

  var navItems = [
    { key: 'sobre', label: 'Sobre mim', href: 'index.html' },
    { key: 'formacao', label: 'Formação', href: 'formacao.html' },
    { key: 'portfolio', label: 'Portfólio', href: 'portfolio.html' },
    { key: 'contato', label: 'Contato', href: 'contato.html' }
  ];

  var navHTML = navItems.map(function (item) {
    var activeClass = item.key === currentPage ? ' active' : '';
    return '<li class="nav-item' + activeClass + '">' +
      '<span class="nav-dot"></span>' +
      '<a href="' + item.href + '" class="nav-link">' + item.label + '</a>' +
      '</li>';
  }).join('');

  placeholder.outerHTML =
    '<header class="site-header">' +
      '<div class="header-top">' +
        '<h1 class="site-title">Victor Hugo</h1>' +
        '<p class="site-subtitle">Assessor de TIC &amp; Estudante de ADS</p>' +
        '<nav class="nav-menu" aria-label="Navegação principal"><ul class="nav-list">' + navHTML + '</ul></nav>' +
      '</div>' +
      '<div class="style-controls">' +
        '<div class="control-group">' +
          '<span class="control-label">Tema</span>' +
          '<div class="control-buttons">' +
            '<button id="theme-light" type="button" class="btn-toggle active" aria-pressed="true">Claro</button>' +
            '<button id="theme-dark" type="button" class="btn-toggle" aria-pressed="false">Escuro</button>' +
          '</div>' +
        '</div>' +
        '<div class="control-group">' +
          '<span class="control-label">Tipografia</span>' +
          '<div class="control-buttons">' +
            '<button id="font-sans-btn" type="button" class="btn-toggle active" aria-pressed="true">Sans</button>' +
            '<button id="font-mono-btn" type="button" class="btn-toggle" aria-pressed="false">Mono</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</header>';
})();
