//26. A 27. C 28. A 29. C 30. A 31. C 32. B 33. A 34.B
//35.C 36. B 37. B 38. C 39. A 40. D 41. A 42. B 43. C 44. A
//45. D 46. A 47. C 48. D 49. C 50. C
bn = {};

function isCloseEnough(input, correct, tolerance = 0.01) {
    if (isNaN(input)) return false;
    return Math.abs(input - correct) <= tolerance;
}

bn.check26 = function() {

    let answer = document.querySelector("#ans26").value.trim();
    let result = document.querySelector("#ans26Result");


      if (answer === "5") {
        result.textContent = "Excellent! 5 is correct.";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Nope! Please try again.";
        result.style.color = "red";
        return false;
    }
}

bn.check27 = function() {
    let answer = document.querySelector("#ans27").value.toLowerCase();
    let result = document.querySelector("#ans27Result");

    let validAnswers = ["calciumtrioxonitrate (V)", "calciumtrioxonitrate"];

    if (validAnswers.includes(answer)) {
        result.textContent = "You are so good at this👊🏾";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "You can do this🤓";
        result.style.color = "red";
        return false;
    }
}

bn.check28 = function() {
    let answer = document.querySelector("#ans28").value.toLowerCase();
    let result = document.querySelector("#ans28Result");

    let validAnswers = ["a"];

    if (validAnswers.includes(answer)) {
        result.textContent = "Nice! A is correct";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Are you sure you were in my class? Why can't you remember this????";
        result.style.color = "red";
        return false;
    }
}

bn.check29 = function() {
    let answer = document.querySelector("#ans29").value.toLowerCase();
    let result = document.querySelector("#ans29Result");

    let validAnswers = ["trioxonitrate (v) acid"];

    if (validAnswers.includes(answer)) {
        result.textContent = "Perfect! Trioxonitrate (V) acid is correct";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Hmm, I'm sorry think again🤔";
        result.style.color = "red";
        return false;
    }
}

bn.check30 = function() {
    let answer = document.querySelector("#ans30").value.toLowerCase();
    let result = document.querySelector("#ans30Result");

    let validAnswers = ["trioxosulphate (iv) acid"];

    if (validAnswers.includes(answer)) {
        result.textContent = "Nice! That was a great!!!!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Nope, try again, remember to put (IV) before the acid";
        result.style.color = "red";
        return false;
    }
}

bn.check31 = function() {
    let year = parseInt(document.querySelector("#ans31").value);
    let result = document.querySelector("#ans31Result");

    let goodYears = [50];
    if (goodYears.includes(year)) {
        result.textContent = "Nice!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Poor! Try again";
        result.style.color = "red";
        return false;
    }
}

bn.check32 = function() {
    let year = parseInt(document.querySelector("#ans32").value);
    let result = document.querySelector("#ans32Result");

    let goodYears = [0];
    if (goodYears.includes(year)) {
        result.textContent = "Good!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Try the number that does not include or subtract from any";
        result.style.color = "red";
        return false;
    }
}


bn.check33 = function () {
    let answer = parseFloat(document.querySelector("#ans33").value);
    let result = document.querySelector("#ans33Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 842.5)) {
        result.textContent = "Nice! That was the best 😉";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "No! Hint: The answer is an eight digits number plus decimal number(s) and it start with 8";
        result.style.color = "red";
        return false;
    }
};

bn.check34 = function () {
    let answer = parseFloat(document.querySelector("#ans34").value);
    let result = document.querySelector("#ans34Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 1743.5)) {
        result.textContent = "CORRECT! You are so smart 🫴🏾!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Wrong, try again";
        result.style.color = "red";
        return false;
    }
};

bn.check35 = function () {
    let answer = parseFloat(document.querySelector("#ans35").value);
    let result = document.querySelector("#ans35Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 299.7)) {
        result.textContent = "BRAVO 👊🏾!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Wrong, try again";
        result.style.color = "red";
        return false;
    }
};

bn.check36 = function () {
    let answer = parseFloat(document.querySelector("#ans36").value);
    let result = document.querySelector("#ans36Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 18.9)) {
        result.textContent = "Awesome!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Try again.";
        result.style.color = "red";
        return false;
    }
};



bn.check37 = function() {
    let answer = document.querySelector("#ans37").value.toLowerCase();
    let result = document.querySelector("#ans37Result");

    let validAnswers = ["b"];

    if (validAnswers.includes(answer)) {
        result.textContent = "Good Job!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Wrong, all the way I put the answer there, you are still missing it 😢. Just kidding😅 you can do this!";
        result.style.color = "red";
        return false;
    }
}

bn.check38 = function () {
    let answer = parseFloat(document.querySelector("#ans38").value);
    let result = document.querySelector("#ans38Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 54.1)) {
        result.textContent = "Fantastic 😄!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "😭😭😭😭";
        result.style.color = "red";
        return false;
    }
};


bn.check39 = function () {
    let answer = parseFloat(document.querySelector("#ans39").value);
    let result = document.querySelector("#ans39Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 43.2)) {
        result.textContent = "Fantastic 😄!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "😭😭😭😭";
        result.style.color = "red";
        return false;
    }
};

bn.check40 = function () {
    let answer = parseFloat(document.querySelector("#ans40").value);
    let result = document.querySelector("#ans40Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 2.7)) {
        result.textContent = "Fantastic 😄!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "😭😭😭😭";
        result.style.color = "red";
        return false;
    }
};

bn.check41 = function() {
    let answer = document.querySelector("#ans41").value.toLowerCase();
    let result = document.querySelector("#ans41Result");

    if (answer === "a") {
        result.textContent = "Nice!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Not quit, try again.";
        result.style.color = "red";
        return false;
    }
}

bn.check42 = function() {
    let answer = document.querySelector("#ans42").value.toLowerCase();
    let result = document.querySelector("#ans42Result");

    if (answer === "b") {
        result.textContent = "That was a great.";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Hmm, You can make it, keep trying.";
        result.style.color = "red";
        return false;
    }
}

bn.check43 = function () {
    let answer = parseFloat(document.querySelector("#ans43").value);
    let result = document.querySelector("#ans43Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 127.7)) {
        result.textContent = "You Did It 🤩!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Keep trying, you can do it";
        result.style.color = "red";
        return false;
    }
};

bn.check44 = function () {
    let answer = parseFloat(document.querySelector("#ans44").value);
    let result = document.querySelector("#ans44Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 6.3)) {
        result.textContent = "Good Job 🤩!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Hmmm, you can make it";
        result.style.color = "red";
        return false;
    }
};

bn.check45 = function () {
    let answer = parseFloat(document.querySelector("#ans45").value);
    let result = document.querySelector("#ans45Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 0.36)) {
        result.textContent = "Wow! You Are So Smart 😍";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Not Quite, So Sorry 🥺";
        result.style.color = "red";
        return false;
    }
};

bn.check46 = function () {
    let answer = parseFloat(document.querySelector("#ans46").value);
    let result = document.querySelector("#ans46Result");

    if (isNaN(answer)) {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
        return false;
    }

    if (isCloseEnough(answer, 48.3)) {
        result.textContent = "You Did It 🤩!";
        result.style.color = "green";
        return true;
    } else {
        result.textContent = "Keep trying, you can do it";
        result.style.color = "red";
        return false;
    }
};

    bn.check47 = function() {
        let answer = document.querySelector("#ans47").value.toLowerCase();
        let result = document.querySelector("#ans47Result");

        let validAnswers = ["trioxochlorate (v) acid"];

        if (validAnswers.includes(answer)) {
            result.textContent = "Great! You got it!!!";
            result.style.color = "green";
            return true;
        } else {
            result.textContent = "Wrong 🥺.";
            result.style.color = "red";
            return false;
        }
    }

    bn.check48 = function() {
        let answer = document.querySelector("#ans48").value.toLowerCase();
        let result = document.querySelector("#ans48Result");

        let validAnswers = ["d"];

        if (validAnswers.includes(answer)) {
            result.textContent = "Nice one!";
            result.style.color = "green";
            return true;
        } else {
            result.textContent = "I'm sorry, try again.";
            result.style.color = "red";
            return false;
        }
    }

    bn.check49 = function() {
        let answer = document.querySelector("#ans49").value.toLowerCase();
        let result = document.querySelector("#ans49Result");

        if (answer === "c") {
            result.textContent = "Nice! That was a good one.";
            result.style.color = "green";
            return true;
        } else {
            result.textContent = "NO, try again.";
            result.style.color = "red";
            return false;
        }
    }
    bn.check50 = function() {
        let answer = document.querySelector("#ans50").value.toLowerCase();
        let result = document.querySelector("#ans50Result");

        if (answer === "solubility") {
            result.textContent = "Correct! Awesome.";
            result.style.color = "green";
            return true;
        } else {
            result.textContent = "Hmm, You can make it. <br></br>Try another word that starts with S and ends with y.";
            result.style.color = "red";
            return false;
        }
    };
    document.querySelector("#checkAns26").addEventListener("click", bn.check26);
    document.querySelector("#checkAns27").addEventListener("click", bn.check27);
    document.querySelector("#checkAns28").addEventListener("click", bn.check28);
    document.querySelector("#checkAns29").addEventListener("click", bn.check29);
    document.querySelector("#checkAns30").addEventListener("click", bn.check30);
    document.querySelector("#checkAns31").addEventListener("click", bn.check31);
    document.querySelector("#checkAns32").addEventListener("click", bn.check32);
    document.querySelector("#checkAns33").addEventListener("click", bn.check33);
    document.querySelector("#checkAns34").addEventListener("click", bn.check34);
    document.querySelector("#checkAns35").addEventListener("click", bn.check35);
    document.querySelector("#checkAns36").addEventListener("click", bn.check36);
    document.querySelector("#checkAns37").addEventListener("click", bn.check37);
    document.querySelector("#checkAns38").addEventListener("click", bn.check38);
    document.querySelector("#checkAns39").addEventListener("click", bn.check39);
    document.querySelector("#checkAns40").addEventListener("click", bn.check40);
    document.querySelector("#checkAns41").addEventListener("click", bn.check41);
    document.querySelector("#checkAns42").addEventListener("click", bn.check42);
    document.querySelector("#checkAns43").addEventListener("click", bn.check43);
    document.querySelector("#checkAns44").addEventListener("click", bn.check44);
    document.querySelector("#checkAns45").addEventListener("click", bn.check45);
    document.querySelector("#checkAns46").addEventListener("click", bn.check46);
    document.querySelector("#checkAns47").addEventListener("click", bn.check47);
    document.querySelector("#checkAns48").addEventListener("click", bn.check48);
    document.querySelector("#checkAns49").addEventListener("click", bn.check49);
    document.querySelector("#checkAns50").addEventListener("click", bn.check50);

    bn.quiz = function () {
      let total = 0;
      let correctList = [];
      //document.querySelector("#correct").textContent = "";

      if (bn.check26()) total++;
      if (bn.check27()) total++;
      if (bn.check28()) total++;
      if (bn.check29()) total++;
      if (bn.check30()) total++;
      if (bn.check31()) total++;
      if (bn.check32()) total++;
      if (bn.check33()) total++;
      if (bn.check34()) total++;
      if (bn.check35()) total++;
      if (bn.check36()) total++;
      if (bn.check37()) total++;
      if (bn.check38()) total++;
      if (bn.check39()) total++;
      if (bn.check40()) total++;
      if (bn.check41()) total++;
      if (bn.check42()) total++;
      if (bn.check43()) total++;
      if (bn.check44()) total++;
      if (bn.check45()) total++;
      if (bn.check46()) total++;
      if (bn.check47()) total++;
      if (bn.check48()) total++;
      if (bn.check49()) total++;
      if (bn.check50()) total++;
      document.querySelector("#tot").textContent = total;
    };

    // Clear selections

    bn.clearIt = function () {
    document.querySelector("#tot").textContent = 0;

      for (let i = 1; i <= 25; i++) {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) selected.checked = false;
      }
    };

    document.querySelector("#checkButton").addEventListener("click", bn.quiz);
    document.querySelector("#clearAll").addEventListener("click", bn.clearIt);
