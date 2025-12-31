const $ = (selector) => document.querySelector(selector);
const rc = {};

rc.checkIt = function (key, selected) {
  return selected && selected.value === key;
};

// Question Checkers

rc.ques1 = function () {
  let selected = document.querySelector('input[name="j1"]:checked');
  let key = "19.3g/cm3";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 1,";
    return true;
  }
  return false;
};

rc.ques2 = function () {
  let selected = document.querySelector('input[name="j2"]:checked');
  let key = "5.68762x10<sup>2</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 2,";
    return true;
  }
  return false;
};
rc.ques3 = function () {
  let selected = document.querySelector('input[name="j3"]:checked');
  let key = "7.72x10<sup>6</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 3,";
    return true;
  }
  return false;
};

rc.ques4 = function () {
  let selected = document.querySelector('input[name="j4"]:checked');
  let key = "9.5x10<sup>3</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 4,";
    return true;
  }
  return false;
};

rc.ques5 = function () {
  let selected = document.querySelector('input[name="j5"]:checked');
  let key = "4.70x10<sup>4</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 5,";
    return true;
  }
  return false;
};

rc.ques6 = function () {
  let selected = document.querySelector('input[name="j6"]:checked');
  let key = "1.81x10<sup>-2</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 6,";
    return true;
  }
  return false;
};

rc.ques7 = function () {
  let selected = document.querySelector('input[name="j7"]:checked');
  let key = "2.3 X 10<sup>12</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 7,";
    return true;
  }
  return false;
};

rc.ques8 = function () {
  let selected = document.querySelector('input[name="j8"]:checked');
  let key = "1.7 X10<sup>-5</sup>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 8,";
    return true;
  }
  return false;
};
rc.ques9 = function () {
  let selected = document.querySelector('input[name="j9"]:checked');
  let key = "2";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 9,";
    return true;
  }
  return false;
};
rc.ques10 = function () {
  let selected = document.querySelector('input[name="j10"]:checked');
  let key = "2";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 10,";
    return true;
  }
  return false;
};
rc.ques11 = function () {
  let selected = document.querySelector('input[name="j11"]:checked');
  let key = "3";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 11,";
    return true;
  }
  return false;
};

rc.ques12 = function () {
  let selected = document.querySelector('input[name="j12"]:checked');
  let key = "90.4";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 12,";
    return true;
  }
  return false;
};
rc.ques13 = function () {
  let selected = document.querySelector('input[name="j13"]:checked');
  let key = "due to dissolve salts in the sea water";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 13,";
    return true;
  }
  return false;
};

rc.ques14 = function () {
  let selected = document.querySelector('input[name="j14"]:checked');
  let key = "Iron (II) chloride";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 14,";
    return true;
  }
  return false;
};

rc.ques15 = function () {
  let selected = document.querySelector('input[name="j15"]:checked');
  let key = "Copper (II) oxide";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 15,";
    return true;
  }
  return false;
};

rc.ques16 = function () {
  let selected = document.querySelector('input[name="j16"]:checked');
  let key = "Na<sub>2</sub>O";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 16,";
    return true;
  }
  return false;
};

rc.ques17 = function () {
  let selected = document.querySelector('input[name="j17"]:checked');
  let key = "Al2O<sub>3</sub>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 17,";
    return true;
  }
  return false;
};

rc.ques18 = function () {
  let selected = document.querySelector('input[name="j18"]:checked');
  let key = "Ba<sub>3</sub>N<sub>2</sub>";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 18,";
    return true;
  }
  return false;
};
rc.ques19 = function () {
  let selected = document.querySelector('input[name="j19"]:checked');
  let key = "Sulfur dioxide";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 19,";
    return true;
  }
  return false;
};
rc.ques20 = function () {
  let selected = document.querySelector('input[name="j20"]:checked');
  let key = "Diphosphorus pebtaoxide";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 20";
    return true;
  }
  return false;
};
rc.ques21 = function () {
  let selected = document.querySelector('input[name="j21"]:checked');
  let key = "Phosphine";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 21,";
    return true;
  }
  return false;
};

rc.ques22 = function () {
  let selected = document.querySelector('input[name="j22"]:checked');
  let key = "Hydrogen sulphide";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 22,";
    return true;
  }
  return false;
};
rc.ques23 = function () {
  let selected = document.querySelector('input[name="j23"]:checked');
  let key = "Water";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 23,";
    return true;
  }
  return false;
};
rc.ques24 = function () {
  let selected = document.querySelector('input[name="j24"]:checked');
  let key = "+3";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 24";
    return true;
  }
  return false;
};
rc.ques25 = function () {
  let selected = document.querySelector('input[name="j25"]:checked');
  let key = "+5";
  if (rc.checkIt(key, selected)) {
    $("#correct").textContent += " 25";
    return true;
  }
  return false;
};

// Quiz evaluator

rc.quiz = function () {
  let total = 0;
  $("#correct").textContent = "";

  if (rc.ques1()) total++;
  if (rc.ques2()) total++;
  if (rc.ques3()) total++;
  if (rc.ques4()) total++;
  if (rc.ques5()) total++;
  if (rc.ques6()) total++;
  if (rc.ques7()) total++;
  if (rc.ques8()) total++;
  if (rc.ques9()) total++;
  if (rc.ques10()) total++;
  if (rc.ques11()) total++;
  if (rc.ques12()) total++;
  if (rc.ques13()) total++;
  if (rc.ques14()) total++;
  if (rc.ques15()) total++;
  if (rc.ques16()) total++;
  if (rc.ques17()) total++;
  if (rc.ques18()) total++;
  if (rc.ques19()) total++;
  if (rc.ques20()) total++;
  if (rc.ques21()) total++;
  if (rc.ques22()) total++;
  if (rc.ques23()) total++;
  if (rc.ques24()) total++;
  if (rc.ques25()) total++;
  $("#tot").textContent = total;
};

// Clear selections

rc.clearIt = function () {
  $("#tot").textContent = 0;
  $("#correct").textContent = "";

  for (let i = 1; i <= 25; i++) {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) selected.checked = false;
  }
};

$("#checkButton").addEventListener("click", rc.quiz);
$("#clearAll").addEventListener("click", rc.clearIt);
