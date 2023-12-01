var img1 = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var len = img1.length;
var n = Math.floor(Math.random() * len);
var v = Math.floor(Math.random() * len);
//alert(n) for debugging
//alert(v) for debugging

// if-else for image1

if(n === 0)
{
    document.querySelector(".img1").setAttribute("src","dice1.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
}
else if(n === 1)
{
    document.querySelector(".img1").setAttribute("src","dice2.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
}
else if(n === 2)
{
    document.querySelector(".img1").setAttribute("src","dice3.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
    
}
if(n === 3)
{
    document.querySelector(".img1").setAttribute("src","dice4.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
}
else if(n === 4)
{
    document.querySelector(".img1").setAttribute("src","dice5.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
}
else if(n === 5)
{
    document.querySelector(".img1").setAttribute("src","dice6.png")

    //if-else for game winner

    if(n > v){
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
    else if(n < v){
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").textContent = "Tie"
    }
}

// if-else for image 2

if(v === 0)
{
    document.querySelector(".img2").setAttribute("src","dice1.png")
}
else if(v === 1)
{
    document.querySelector(".img2").setAttribute("src","dice2.png")
}
else if(v === 2)
{
    document.querySelector(".img2").setAttribute("src","dice3.png")
}
if(v === 3)
{
    document.querySelector(".img2").setAttribute("src","dice4.png")
}
else if(v === 4)
{
    document.querySelector(".img2").setAttribute("src","dice5.png")
}
else if(v === 5)
{
    document.querySelector(".img2").setAttribute("src","dice6.png")
}
