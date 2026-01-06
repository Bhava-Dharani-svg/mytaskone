function loginPage()
{
   let username=document.getElementById("user").value;
   let password=document.getElementById("pwd").value;

   if(username==="Bhavadharani" && password==="dharani222")
   {
      window.location.replace("click.html");
   }
   else{
      alert("Please enter valid Username or Password")
   }
}
