const Names=["Amirho3ein","Baran","Mohadese","Zahra","Mohammad"];
function CreatLiElement(){
    for(let i=0;i<Names.length;i++)
    {
        var node=document.createElement("li");
        var textnode=document.createTextNode(Names[i]);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        console.log(node);
    }
    
    //با این خط کد یک المنت با تگ ال ای میسازیم
    // var node=document.createElement("li");
    
    //با این خط کد یک تکست پیش فرض امیر میسازیم و ازش استفاده میکنیم
    // var textnode=document.createTextNode("Amirho3ein");
    
    //با این خط کد میگیم که المان پدر یا ال ای مون رو داخلش فرزندی به نام تکست نود که داخلش یک نوشته است رو قرار بده
    // node.appendChild(textnode);

    // document.getElementById("myList").appendChild(node);
}
CreatLiElement();