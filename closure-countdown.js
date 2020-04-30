const countdownGenerator = function(x) {
  let count = 4;
  let output = "";
  console.log(output);

  return function() {
    count --;
    if (count < 1) {
      count === 0 ?
        output = "Blast Off!" :
        output = "Rockets already gone, bub!";
    } else {
      output = `T-minus ${count}...`;
    }
    console.log(output);
  };

};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!