let counterElement=document.getElementById("counterValue");
function onD()
{
    let previousValue=counterElement.textContent;
    let updatedValue=parseInt(previousValue) - 1;
    counterElement.textContent=updatedValue;
    if(updatedValue==0)
    {
        counterElement.style.color="black";
    }
    else if(updatedValue<0)
    {
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="green";
    }
}
function onI()
{
    let previousValue=counterElement.textContent;
    let updatedValue=parseInt(previousValue)+1;
    counterElement.textContent=updatedValue;
    if(updatedValue==0)
    {
        counterElement.style.color="black";
    }
    else if(updatedValue<0)
    {
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="green";
    }
}
function onR()
{
    counterElement.textContent=0;
    counterElement.style.color="pink";
}