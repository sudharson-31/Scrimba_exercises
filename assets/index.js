let itemsListDOM = document.getElementById("items-list")
const items = [
    {
        serviceName: "Wash Car",
        price: 10 
    },
    {
        serviceName: "Mow Lawn",
        price: 20 
    },
    {
        serviceName: "Pull Weeds",
        price: 30 
    }
]
let totalPrice=0;
let billList = new Set()
let listItem =0;

function handleClick(id){
    let itemService = items[id].serviceName
    
    billList.has(itemService)? console.log("already billed"):billList.add(itemService) && createElement(itemService, id);
    
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


