let big = document.querySelector('big');
let fancy = document.querySelector('fancy');
let boring = document.querySelector('boring');
let moo = document.querySelector('moo');

function biggerText() {
    alert("Hello World!");
    document.getElementById("text").style.fontSize = "24px";
}

function fancyText() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function normalText(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function mooText(){
    var text = document.getElementById("text").value;
    var uppercase_text = text.toUpperCase();
    var split_text = uppercase_text.split(".");
    suffixed_text = split_text.join("-Moo");
    document.getElementById("text").value=suffixed_text;
}

big.onclick = biggerText;
fancy.onclick = fancyText;
boring.onclick = normalText;
moo.onclick = mooText;