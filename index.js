var data_dict = [
    {"item":"Potato Chips","brand":"Lays","sub_type": "Classic", "quantity": "2","weight": "1.5oz"},
    {"item":"Mountain Dew","brand":"Pepsi","sub_type": "Classic","quantity": "1","weight": "2L"},
    {"item":"Rockstar","brand":"Pepsi","sub_type": "Classic","quantity": "2","weight": "16oz"},
    {"item":"Aquafina","brand":"Pepsi","sub_type": "Classic","quantity": "1","weight": "1L"},
    {"item":"Diet Pepsi","brand":"Pepsi","sub_type": "Classic","quantity": "1","weight": "1L"},
    {"item":"Orange Crush","brand":"Pepsi","sub_type": "Classic","quantity": "1","weight": "12oz"},
    {"item":"Dr Pepper","brand":"Pepsi","sub_type": "Classic","quantity": "1","weight": "12oz"}
];
var arr=[];
var  value;
var random;
var quantity;
var addbtn=document.getElementById("add-btn")
var table=document.getElementById("t01");
var inputsec=document.getElementById("input-sec");
var containers=document.getElementById("containers")
var numbers=document.getElementById("numbers");
var replace=document.getElementById("replace");
replace.addEventListener("click",replaceQuantity);
var index;
var i=0;

function addItemstable(){
   
    if(addbtn.value == "submit"){
        index=arr.indexOf(data_dict[random].item);
        var add1=parseInt(document.getElementById("quantity").innerHTML);
        var add2=parseInt(document.getElementById(index).childNodes[4].textContent);
        var add=add1+add2;
        addbtn.value="addnew";
        document.getElementById(index).childNodes[4].textContent=add;
        document.getElementById(index).childNodes[4].style.backgroundColor="orange";
        setTimeout(()=>{
            document.getElementById(index).childNodes[4].style.backgroundColor="unset";
        },200)
        document.getElementById("replace").style.display="none";
        innerVal()
    }

    else{
        document.getElementById('nodata').innerHTML="";
    if(document.getElementById("item").innerHTML != "Product Name"){
    value=document.getElementById("item").innerHTML;
    var brand=document.getElementById("brand").innerHTML;
    var subtype=document.getElementById("sub_type").innerHTML;
    var weight=document.getElementById("weight").innerHTML;
    quantity=document.getElementById("quantity").innerHTML;
    
    
    if(!arr.includes(value)){
        arr.push(value);
    }
    var text=document.createTextNode(value);
    var text1=document.createTextNode(brand);
    var text2=document.createTextNode(subtype); 
    var text3=document.createTextNode(weight); 
    var text4=document.createTextNode(quantity); 
    
    var tr=document.createElement("tr");

    var td=document.createElement("td");
    tr.id=i;
    var td1=document.createElement("td");
    td1.className="textcolor1";
    var td2=document.createElement("td")
    td2.className="textcolor1";
    var td3=document.createElement("td");
    td3.className="textcolor1";
    var td4=document.createElement("td")

    td.appendChild(text);
    td1.appendChild(text1)
    td2.appendChild(text2)
    td3.appendChild(text3);
    td4.appendChild(text4)

    tr.appendChild(td);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)


    table.appendChild(tr);
    tr.style.backgroundColor="orange";
    
    setTimeout(() => {
        if(tr.id % 2 == 0){
            tr.style.backgroundColor="unset";
        }else{
            tr.style.backgroundColor="#eee";
        }
        
    }, 200);
   i++;
   innerVal()
}
} 
}
function addItems(){
    random=Math.floor(Math.random()*7)
    var i=0;
    for(let x in data_dict[random]){ 
    setTimeout(()=>{
        document.getElementById(x).innerHTML=data_dict[random][x];
        document.getElementById(x).style.color="white";
        document.getElementById(x).parentNode.style.backgroundColor="orange";
        setTimeout(()=>{
            document.getElementById(x).parentNode.style.backgroundColor="unset";
            if(x == "item"){
                document.getElementById(x).style.color="black";
            }else{
                document.getElementById(x).style.color="gray";
            }
            
        },300) 
    },400*i);
    i++;    
    }
    inputsec.addEventListener("click",changeQuantity)
    function changeQuantity(e){
        if(e.target.innerHTML != "Quantity"){
            if(e.target.id == "quantity"){
                document.querySelector(".big-container").style.display="flex";
            }
        containers.addEventListener("click",getVal);
        document.getElementById("number").value="";     
        function getVal(e){
            if(e.target.parentNode.id=="numbers"){
                document.getElementById("number").value=e.target.id;
            }else if(e.target.value=='reset'){
                document.getElementById("number").value="";
            }else if(e.target.id == "icon3"){
                document.querySelector(".big-container").style.display="none"; 
            } 
            else{
                if(e.target.value=="submit"){
                    if(document.getElementById("number").value!=""){
                    document.getElementById("quantity").innerHTML =document.getElementById("number").value;
                    document.querySelector(".big-container").style.display="none";    
                    }
                }
            }
            }
        }
    }
    if(arr != null){
        if(arr.includes(data_dict[random].item)){
            addbtn.value="submit";
            document.getElementById("replace").style.display="inline-block";
        }
    }  
}
function replaceQuantity(e){
    index=arr.indexOf(data_dict[random].item);
    document.getElementById(index).childNodes[4].textContent=document.getElementById("quantity").innerHTML;
    document.getElementById("replace").style.display="none";
    document.getElementById(index).childNodes[4].style.backgroundColor="orange";
    setTimeout(()=>{
        document.getElementById(index).childNodes[4].style.backgroundColor="unset";
    },200)   
    innerVal() 
}

function innerVal(){
    document.getElementById("item").innerHTML="Product Name";
    document.getElementById("brand").innerHTML="Brand";
    document.getElementById("sub_type").innerHTML="Type";
    document.getElementById("weight").innerHTML="Weight";
    document.getElementById("quantity").innerHTML="Quantity";
}
