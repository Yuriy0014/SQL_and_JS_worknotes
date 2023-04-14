function numtobinary(num) {
  if (num < 2) return String(num)
  else return String(numtobinary(Math.floor(num/2))) + String(num % 2)
}

function binaryToDecimal(numstr) {
  numstr = numstr.split('').reverse().join("");
  let result = 0;
  for (let i = 0; i < numstr.length; i++) {
    result += Number(numstr[i]) * 2 ** i
  }
  return result
}


function ipToInt32(ip){
  let ip_arr = ip.split('.');
  let bin_array = ip_arr.map(function(value){
    let num_item = numtobinary(Number(value))
    while( num_item.length < 8) {num_item = "0" + num_item}
    return num_item
    })
  return binaryToDecimal(bin_array.join(''))
}

console.log(ipToInt32("128.32.10.1"))