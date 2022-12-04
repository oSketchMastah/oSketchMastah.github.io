window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  let s = document.createElement('script');
  s.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
  document.head.appendChild(s);
  
  let s2 = document.createElement('script');
  s2.type = 'text/javascript';
  s2.id = 'MathJax-script';
  s2.async = true;
  s2.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  document.head.appendChild(s2);
})();

