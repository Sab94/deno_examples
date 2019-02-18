import { dedupe } from 'https://raw.githubusercontent.com/Sab94/dedupe/0.0.1/mod.ts';

async function main() {
    var a = [1, 2, 2, 3];
    var b = dedupe(a);
    console.log(b);

    var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}];
    var bb = dedupe(aa);
    console.log(bb);

    var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
    var bbb = dedupe(aaa, value => value.a);
    console.log(bbb);
}

main();