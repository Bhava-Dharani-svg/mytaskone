
stk={
    watch:10,
    teddy:10,
    airpods:10,
    bangles:10,
    chocolate:10,
    scooty:10,
    dress:10,
    headphone:10,
    backcover:10,
    lipstick:10,
    fridge:10,
    shoe:10,
    sofa:10
}
function add(image)
{
    // additem=0;
    if(stk[image]>0)
    {
        stk[image]--;
        // additem++;
        document.getElementById(image).innerText=`Total stock=${stk[image]}`
        document.querySelector("textarea").innerHTML+=`${image} added\n`;
        total();
    }
    else{
        alert("Out of stock!");
    }

}
let count=0;
function total()
{
    count++;
    document.getElementById("tot").textContent=`Total items=${count}`

}
