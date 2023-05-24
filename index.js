// Change document background color to silver
document.body.style.backgroundColor = "silver";


// Change the font color for h1 title tag to green
document.getElementById("title").style.color="green"


// Change the font case for h3 title tags to uppercase

let h3Fruits = document.querySelectorAll("h3");
h3Fruits.forEach(h3Fruit => h3Fruit.style.textTransform = "Uppercase")


// Add one more fruit to the fruits list:

let newFruit = document.createElement("li");
newFruit.textContent = "Pears";
document.getElementById("fruList").appendChild(newFruit)

// Add one more vegetable to the vegetables list:

let newVeges = document.createElement("li");
newVeges.textContent = "patatoes";
document.getElementById("vegList").appendChild(newVeges);
