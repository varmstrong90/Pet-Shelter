var pets = [3, 5, 8];
var spans = [
    document.querySelector("#pet-profile-1"),
    document.querySelector("#pet-profile-2"),
    document.querySelector("#pet-profile-3")
];

function pet(id) {
    pets[id]++;
    spans[id].innerHTML = pets[id] + " petting(s)";
}

function donate(el) {
    el.remove();
}


var choice = ["Any Pet", "Dog", "Cat"];

function petChoice() {
    var x = document.getElementById("pet-search-bar")
    alert("You are searching for a " + x.options[x.selectedIndex].text)
}
