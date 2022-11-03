const sortArray = (arr) => {
  let characters = [];
  let integers = [];

  arr.map((value) => {
    if (typeof value === "string") {
      characters.push(value);
    }

    if (typeof value === "number") {
      integers.push(value);
    }
  });

  characters.sort();
  integers.sort(function (a, b) {
    return a - b;
  });

  return [...characters, ...integers];
};

console.log(sortArray([12, 9, 30, "A", "M", 99, 82, "J", "N", "B"]));

const pattern_count = (string, subString) => {
  string += "";
  subString += "";
  if (subString.length <= 0) return 0;

  let n = 0,
    pos = 0,
    step = 1;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
};

console.log(pattern_count("halo", ""));

const count_huruf = (kalimat) => {
  kalimat += "";

  let obj = {};

  kalimat.split("").map((val) => {
    if (!obj.hasOwnProperty(val) && val !== " ") {
      let i = 0;
      kalimat.split("").map((data) => {
        if (val === data) i++;
      });
      obj[val] = i;
    }
  });
  return obj;
};

console.log(count_huruf("MasyaAllah"));
