function convertHTML(str) {
    // :)
    var convert = /\W/g;
    var result = str.match(convert);
    return result;
  }
  
  convertHTML("Dolce & Gabbana");
  