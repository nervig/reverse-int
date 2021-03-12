module.exports = function reverse (n) {
    if (n < 0){
        n = n / -1;
    }
    let str_num = String(n);
    str_num = str_num.split('').reverse().join('');
    str_num = Number(str_num);

    return str_num;
}
