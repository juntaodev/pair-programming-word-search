const transpose = function(matrix) {
  
  let array = [];
  for (let i =  0; i < matrix[0].length; i++) {
    array.push([]);
  }

     
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      array[col][row]  = matrix[row][col];
    }
  }
  // console.log(array);
  return array;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
    
  let output = false;
  let array = [];

  for (let h of horizontalJoin) {
    array.push(h);
  }
    
  for (let v of verticalJoin) {
    array.push(v);
  }
    
  // console.log(array)

  for (let el of array) {
    if (el.includes(word)) {
      output = true;
    }
  }

  output ? true : false;

  return output;
};

module.exports = wordSearch;