function getMiddle(huruf) {
    let output = [];
    if(huruf.length % 2 == 0) {
        //Jumlah huruf genap
        let huruf1 = huruf[(huruf.length / 2) - 1];
        let huruf2 = huruf[(huruf.length / 2)]
        output.push(huruf1, huruf2);
    } else if(huruf.length % 2 != 0){
        //Jumlah huruf ganjil
        let huruf3 = huruf[Math.ceil(huruf.length / 2) - 1];
        output.push(huruf3)
    } else {
        //Jumlah huruf 1
        output.push(huruf[huruf.length])
    }

    return output.join('');
}

console.log(getMiddle('test'))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle('A'))