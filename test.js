const calc = function (expr) {
  let terms = expr.match(/\d+\.\d+|\d+|[-+*\/(/)]/g).map(t => isNaN(t) ? t : Number(t))
  
  let peek = () => terms[0] || ''
  let get = () => terms.shift();  
  let accept = (...tokens) => tokens.includes(peek());
  let calc = (tokens,f) => accept(tokens) && get() && f();   
  
  let isInt = (n) => Number(n) === n && n % 1 === 0
  let isFloat = (n) => Number(n) === n && n % 1 !== 0
  let number = () => parseFloat(get());
  
  
  let factor = () => {
    if (isInt(peek()) || isFloat(peek())) {
      return number();
    }
    
    if (accept('(')) {
      get(); // (
      const result = expression();
      get() // )
      return result;
    }
    
    if (accept('-')) {
      get(); // -
      return -factor();
    }
    
    return 0; // Error
  }
  
  let term = () => {
    let result = factor();
    while(accept('*','/',)) {
      calc('*', () => result *= factor());
      calc('/', () => result /= factor());
    }
    return result;
  }
  let expression = () => {
    let result = term();
    while(accept('+', '-')) {
          calc('+', () => result += term());
          calc('-', () => result -= term());
    }
    return result;
  }  
  return expression();
  };