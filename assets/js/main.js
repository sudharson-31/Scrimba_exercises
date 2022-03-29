let chars = [];
let pwd = [];
let fillersEl = document.getElementsByClassName("Fillers");
let getVal = (id) =>
{
    let valOut = document.getElementById(id).value;
    if(valOut >= 8 && valOut <= 15)
    return valOut;
    else
    return -1;
}
let checkboxValues = () =>
{
 let checks = 0b0000;
if(document.getElementById("capAlphaCheckbox").checked){
     checks |= 0b0001;
 }
if(document.getElementById("alphaCheckbox").checked){
    checks |= 0b0010;
}
if(document.getElementById("symbolCheckbox").checked){
    checks |= 0b0100;
}
if(document.getElementById("numbersCheckbox").checked){
    checks |= 0b1000;
}
return checks;
}
let fillCharsArray = (checksOut) =>
{
    chars = [];
     v=0;
    if(checksOut >> 0 & 1 )
    for(i=65,v=0;i<=90;i++,v++)
    {
        chars.push(String.fromCharCode(i));
    }
    if(checksOut >> 1 & 1)
    for(i=97;i<=122;i++,v++)
    {
        chars.push(String.fromCharCode(i));
    }
    if(checksOut >> 2 & 1)
    for(i=33;i<=38;i++,v++)
    {
        chars.push(String.fromCharCode(i));
    }
    if(checksOut >> 3 & 1)
    for(i=48;i<=57;i++,v++)
    {
        chars.push(String.fromCharCode(i));
    }
}
let generatePwd = (val) =>
{
    pwd = [];
    for(let i=1;i<=val;i++)
    {
    pwd.push(chars[Math.floor(Math.random()*v)]);
    }
    return pwd.join('');
}
function fillUp()
{

    let val = getVal("pwdCharInput");
    let checksOut = 0;
    checksOut = checkboxValues();
    if(!checksOut) { checksOut = 0b1111; }
    fillCharsArray(checksOut);
    if(val === -1) { 
        shake();
        constraintAlert();
    }
    else{
        for(let i=0;i<fillersEl.length;i++)
        {
            fillersEl[i].textContent = generatePwd(val);
        }
    }
   
}
function shake(){
    document.getElementById("main-box").animate([
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
      ], {
        duration: 100,
        iterations: 3
      });
}
function constraintAlert(){
    var modal =document.getElementById("modal");
    var modalContent = document.getElementsByClassName("modalContent")[0];
    modal.style.display = "block";
}
function closeModal() {
    modal.animate([
        { opacity: 0.8  },
        { opacity: 0.6  },
        { opacity: 0.4  },
        { opacity: 0.2  },
        { opacity: 0  },
        { display: "none"}

    ],{
        duration: 300,
        iterations: 1
    });
    setTimeout('modal.style.display = "none";', 200);
}
