const Immutable = require('immutable');

let map1 = Immutable.Map({a:1, b:2, c:3});
let map2 = map1.set('b', 50);

let b = map1.get('b'); // 2
let c = map2.get('b'); // 50