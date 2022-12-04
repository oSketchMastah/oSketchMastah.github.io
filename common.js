
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

function makemeta() {
  let s = document.createElement('meta');
  return s;
}
function makecharset(id) {
  let t = makemeta();
  t.charset = id;
  return t;
}
function makemetanamed(name, cont) {
  let t = makemeta();
  t.name = name;
  t.content = cont;
  return t;
}
function makemetaprop(prop, cont) {
  let t = makemeta();
  t.setAttribute('property', prop);
  t.content = cont;
  return t;
}


/*
<title>DIBKOFSEMA</title>
<meta property="og:title" content="DIBKOFSEMA">
<meta name="description" content="DIBKOFSEMA/SEMAK system documentation and theory portal">
<meta name="keywords" content="DIBKOFSEMA, SEMAK, execution, dynamic, system, basis, intelligent">
*/

function add(n) {
  document.head.appendChild(n);
}
add(makecharset("utf-8"));
add(makemetanamed("viewport", "width=device-width, initial-scale=1.0"));
add(makemetaprop('og:type', "website"));
add(makemetaprop('og:image', "/Common/favicon.ico"));
add(makemetaprop('og:url', document.location));
//to avoid including all of these everytime
add(makestyle('/Common/nav.css'));
add(makestyle('/Common/main.css'));
add(makelinktyped('shortcut icon', '/Common/favicon.ico', 'image/x-icon'));
add(makejs("/Color/colorcli.js"));


