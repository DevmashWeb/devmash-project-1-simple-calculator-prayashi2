function c(val)
{
  document.getElementById("dis").value=val;
}

function v(val)
{
  document.getElementById("dis").value+=val;
}

function back() 
{
   //delete last letter function.
   var value = document.getElementById("dis").value;
   document.getElementById("dis").value = value.substr(0, value.length - 1);

}

function e() 
{ 
try 
{ 
  c(eval(document.getElementById("dis").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  