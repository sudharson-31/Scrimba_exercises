let chars = [];
let pwd = [];
let fillersEl = document.getElementsByClassName("Fillers");
let fillCharsArray = () =>
{
    for(i=65;i<=90;i++)
    {
        chars.push(String.fromCharCode(i));
    }
    for(i=97;i<=122;i++)
    {
        chars.push(String.fromCharCode(i));
    }
    for(i=33;i<=38;i++)
    {

        chars.push(String.fromCharCode(i));
    }
    for(i=48;i<=57;i++)
    {
        chars.push(String.fromCharCode(i));
    }
}
let generatePwd = () =>
{
    pwd = [];
    for(let i=1;i<=8;i++)
    {
    pwd.push(chars[Math.floor(Math.random()*68)]);
    }
    return pwd.join('');
}
function fillUp()
{
    fillCharsArray();
    for(let i=0;i<fillersEl.length;i++)
    {
        fillersEl[i].textContent = generatePwd();
    }
}