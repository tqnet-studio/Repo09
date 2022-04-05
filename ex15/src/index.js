//only change code below this line
function switchCase(letter) {
    var animal = "";
    switch (letter) {
        case "a":
          animal = "antelope";
          break;
        case "b":
          animal = "bird";
          break;
        case "c":
          animal = "cat";
          break;
        default:
          animal = "stuff";
          break;
      }
return animal;
        }
        console.log(switchCase("a"));
        console.log(switchCase("b"));
        console.log(switchCase("c"));
        console.log(switchCase("d"));
        console.log(switchCase(4));
      
    //only change code above this line
    module.exports = switchCase;