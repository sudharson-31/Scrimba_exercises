let itemsListDOM = document.getElementById("items-list")
let optionsListDOM = document.getElementById("price-list")
let notifyElementDOM = document.getElementById("notification")
const items = [
    {
        id: 0,
        serviceName: "Wash Car",
        price: 10
    },
    {
        id: 1,
        serviceName: "Mow Lawn",
        price: 20 
    },
    {
        id: 2,
        serviceName: "Pull Weeds",
        price: 30 
    }
]
let totalPrice=0;
let billList = new Set()
let listItem =0;
function optionSetter(){
    let optionString = ""
    for(i=0;i<items.length;i++){
        optionString += `
        <li class="option" 
        onclick="handleClick(${(items[i].id)})">
        ${items[i].serviceName}: $${items[i].price}
        </li>`
    }
    optionsListDOM.innerHTML += optionString;
}

function onJSLoad(){
    displayTotal(totalPrice,1)
}

function handleClick(id){
    //let itemService = items[id].serviceName
    billList.has(id)? notification():billList.add(id) && createElement(id);
    
}
function notification(){
    notifyElementDOM.innerHTML = `
    <span id="snackbar-content">Item already added!<span>
    `
    notifyElementDOM.style.display = "flex"
    setTimeout(()=>{
        notifyElementDOM.style.display = "none"
    }
        , 1000)
}
function createElement(id){
    
    let item = `<li class="item"> 
    <span class="item-name">${items[id].serviceName}</span> 
    <span class="item-remove" onclick="removeItem(${id})">remove</span>
    <span class="item-price">
    <span class="dollar">$</span><span class="price">${items[id].price}</span>
    </span> 
    </li> `
    itemsListDOM.innerHTML += item;
    displayTotal(items[id].price,1);
}
//console.log(billList[{serviceName:"Mow Lawn"}])
function removeItem(id){
    let item = ""
    itemsListDOM.innerHTML = ""
    billList.forEach(item1 => {
        if(item1===items[id].id){
        billList.delete(item1)
        return;
        
    }
    });
    let list = Array.from(billList)
    for(let i=0;i<list.length;i++){ 
        //console.log(list[i])
        item += `<li class="item"> 
        <span class="item-name">${items[list[i]].serviceName}</span> 
        <span class="item-remove" onclick="removeItem(${items[list[i]].id})">remove</span>
        <span class="item-price">
        <span class="dollar">$</span><span class="price">${items[list[i]].price}</span>
        </span> 
        </li> `
    }
    itemsListDOM.innerHTML += item;
    //console.log(billList)
    //console.log("line 88")
    displayTotal(items[id].price,0);

    

}

function displayTotal(price,flag){
    flag?totalPrice += price:totalPrice -= price
    //console.log(id)
    let item = `
    <span class="total-title">TOTAL AMOUNT</span>
    <span class="total-price">$${totalPrice}</span> 
    `
    document.getElementById("total").innerHTML = item
}




optionSetter()
onJSLoad()