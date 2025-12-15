function add()
{
    let a=document.getElementById("input1").ariaValueMax;
    localStorage.setItem("items",a);
    const b=localStorage.getItem("items");
    document.getElementById("list")=b;

}