var json2html = require("node-json2html");

let data = {
    "name": "ZARKOTH, DESTROYER OF WORLDS",
    "age": -1,
};
let transform = {
    '<>' : 'p', html : 'name : $(name)', '<>' : 'h1', html : 'age : $(age)'
};

let trueTransform = {
    '<>' : 'div',
    html : [
        {'<>' : 'p', html : 'name : ${name}'},
        {'<>' : 'h1', html : 'age : ${age}'},
    ]
};
let html = json2html.transform(data, trueTransform);
console.log(html.split('><').join('>\n<'));
