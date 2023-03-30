

function functionRolls() {
    let rollFlavor = document.getElementById("rollsflavors").value;
    document.getElementById("overzicht").innerHTML += rollFlavor + " Rolls <br>";
  }

  function functionMonster() {
    let monsterFlavor = document.getElementById("monsterrollsflavors").value;
    document.getElementById("overzicht").innerHTML += monsterFlavor + " Monster rolls <br>";
  }

  function functionVeggie() {
    let veggieFlavor = document.getElementById("veggierollsflavors").value;
    document.getElementById("overzicht").innerHTML += veggieFlavor + " Veggie rolls <br>";
  }

  function functionEbi() {
    let ebiFlavor = document.getElementById("ebiflavors").value;
    document.getElementById("overzicht").innerHTML += ebiFlavor + " Ebi <br>";
  }

  function functionMaki() {
    let makiFlavor = document.getElementById("makiflavors").value;
    document.getElementById("overzicht").innerHTML += makiFlavor + " Maki <br>";
  }

  function functionNigiri() {
    let nigiriFlavor = document.getElementById("nigiriflavors").value;
    document.getElementById("overzicht").innerHTML += nigiriFlavor + " Nigiri <br>";
  }

  function functionSashimi() {
    let sashimiFlavor = document.getElementById("sashimiflavors").value;
    document.getElementById("overzicht").innerHTML += sashimiFlavor + " Sashimi <br>";
  }

  function afrekenen() {
    document.getElementById("overzicht").innerHTML = " ";
  }