function numtobinary(num) {
  if (num < 2) return num
  else return String(numtobinary(Math.floor(num/2))) + String(num % 2)
}

function binaryToDecimal(numstr) {
  let result = 0;
  for (let i = 0; i < numstr.length; i++) {
    result += Number(numstr[i])*2 ** i
  }
  return result
}

function ipToInt32(ip){
  let ip_arr = ip.split('.');
  ip_arr.map(value => numtobinary(Number(value)))
  return binaryToDecimal(ip_arr.join(''))
}

console.log(ipToInt32("128.32.10.1"))