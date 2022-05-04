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
optionSetter()


function handleClick(id){
    let itemService = items[id].serviceName
    
    billList.has(itemService)? notification():billList.add(itemService) && createElement(itemService, id);
    
}
function notification(){
    let snackbar = setTimeout(()=>{notifyElementDOM.style.display="none"},2000);
    notifyElementDOM.textContent = "Item already added!"
    notifyElementDOM.style.display="block"
}
function createElement(itemService, id){
    
    let item = `<li class="item"> 
    <span class="item-name">${itemService}</span> 
    <span class="item-price">
    <span class="dollar">$</span><span class="price">${items[id].price}</span>
    </span> 
    </li> `
    itemsListDOM.innerHTML += item;
    displayTotal(items[id].price);
}
function displayTotal(price){
    totalPrice += price
    let item = `<span class="total-price">${totalPrice}</span> `
    document.getElementById("total").innerHTML = item
}


