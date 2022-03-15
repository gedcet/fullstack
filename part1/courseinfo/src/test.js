// cia naudojama reduce komandos pvz
const arr = [2, 5, 3, 7, 10];

console.log("reduce:");

console.log("arr:", arr);

const arr10 = arr.reduce(function (pre, cur, i)
{
    console.log("prev_ele_value:",pre," current_ele_value:", cur," index", i);
    return pre + cur;
});

console.log(arr10);
///
const result11 = arr.reduce((pre, cur, i) => pre + cur);
console.log('result11 '+ result11);