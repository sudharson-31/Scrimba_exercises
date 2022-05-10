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
    //items array of objects
]
let totalPrice=0;
let billList = new Set()
let list = new Array() // Item array list
let listItem =0;
function optionSetter(){
    //Setting options using itemsList
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
    // on page load display 0 total, set options
    optionSetter()
    displayTotal(totalPrice)
}

function handleClick(id){
    //handle when options are clicked
    console.log(list)
    let itemService = items[id].serviceName
    let item = ""
    list.includes(itemService)? notification(): ((list[id] = itemService) && (item += renderItem(id)) && (displayTotal(items[id].price,1)))
    itemsListDOM.innerHTML += item;
    
}

function notification(){
    //Notify if the element added is duplicate
    notifyElementDOM.innerHTML = `
    <span id="snackbar-content">Item already added!<span>
    `
    notifyElementDOM.style.display = "flex"
    setTimeout(()=>{
        notifyElementDOM.style.display = "none"
    }
        , 1000)
}
function renderItem(id){
    //render the item on screen
    return `<li class="item"> 
    <span class="item-name">${items[id].serviceName}</span> 
    <span class="item-remove" onclick="removeItem(${id})">remove</span>
    <span class="item-price">
    <span class="dollar">$</span><span class="price">${items[id].price}</span>
    </span> 
    </li> `
   
}
function removeItem(id){
    //remove item from array
    let item = ""
    itemsListDOM.innerHTML = "";
    list[id] = undefined
    for(let i=0;i<list.length;i++){ 
        if(list[i]){
            item  +=  renderItem(i) // remove item from screen by overwriting existing items
        }
        
    }
    itemsListDOM.innerHTML += item;
    displayTotal(items[id].price,0);
}


function displayTotal(price,flag){
    //Display total price
    flag?totalPrice += price:totalPrice -= price
    let item = `
    <span class="total-title">TOTAL AMOUNT</span>
    <span class="total-price">$${totalPrice}</span> 
    `
    document.getElementById("total").innerHTML = item
}





onJSLoad()