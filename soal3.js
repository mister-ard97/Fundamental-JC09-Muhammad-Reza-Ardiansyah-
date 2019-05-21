function accum(huruf) {
    huruf = huruf.toUpperCase();
    let hurufArray = huruf.split('');
    let output = [];
    for(let x = 0; x < hurufArray.length; x++) {
        //Apabila index 0, maka hanya push satu huruf
        output.push(hurufArray[x]);
        if (x >= 0) {
            //Apabila index bukan 0
            for (let y = 0; y < x; y++) {
                output.push(hurufArray[x].toLowerCase())
            }
            //Apabila x tidak sama dengan hurufArray.length - 1
            //Maka tidak mengepush -
            if(x != hurufArray.length - 1) {
                output.push('-');
            }
        }
    }
    return output.join('');
}

console.log(accum('abcd'));
console.log(accum("cwAt"));
console.log(accum("RqaEzty"));