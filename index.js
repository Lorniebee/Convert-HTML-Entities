function convertHTML(str) {
    // &colon;&rpar;
    var convert = /\W/g;
    var result = str.match(convert);
    return result;
  }
  
  convertHTML("Dolce & Gabbana");
  