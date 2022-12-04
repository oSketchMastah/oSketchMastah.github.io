
function makejs(src) {
  let s = document.createElement('script');
  s.src = src;
  s.type = "text/javascript";
  return s;
}

function makelink(rel, href) {
  let s = document.createElement('link');
  s.rel = rel;
  s.href = href;
  return s;
}

function makelinktyped(rel, href, type) {
  let l = makelink(rel, href);
  l.type = type;
  return l;
}

function makestyle(href) {
  return makelink('stylesheet', href);
}
function add(n) {
  document.head.appendChild(n);
}

//to avoid including all of these everytime
add(makestyle('/Common/nav.css'));
add(makestyle('/Common/main.css'));
add(makelinktyped('shortcut icon', '/Common/favicon.ico', 'image/x-icon'));
add(makejs("/Color/colorcli.js"));
