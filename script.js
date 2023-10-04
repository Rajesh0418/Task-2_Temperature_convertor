let x,y,out;
let text = document.getElementById("displayTxt");
let input = document.getElementById("numbinput");
function GetTheValue()
{
    x = document.getElementById("from").value;
    y = document.getElementById("to").value;
    out = Number.parseFloat(input.value);
    if(isNaN(out))
    {
        alert("Re-enter the value");
    }
    else{

        if(x == "Celsius" && y == "Fahrenheit") 
            celToFah();
        else if(x == "Fahrenheit" && y == "Celsius") 
            fahToCel();
        else if(
            (a == "Celsius" && b == "Celsius") ||
            (a == "Fahrenheit" && b == "Fahrenheit")
            )Equal();
    }
}
function Equal()
{
    text.innerHTML = "It is in the same type";
}
function celToFah()
{
    let res = (out * (9 / 5) + 32);
    text.innerHTML = "Temperature converted is : "+res+"°F";
}
function fahToCel()
{
    let res = ((out - 32) * (5 / 9));
    text.innerHTML = "Temperature converted is : "+res+"°C";
}