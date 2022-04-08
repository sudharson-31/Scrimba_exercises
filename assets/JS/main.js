//import Header from './Header'
function Header(){
    return(
        <header>
        <nav className='nav'>
        <span>
                <img className='image' src='../../react-logo.png'></img>
                <h1 className='title'>ReactFacts</h1>
        </span>

        <ul className="navigation"> 
            <li>Pricing </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
    
    );
}
function Footer(){
    return(
        <footer className='footer'>
        © 2022 Sudharson development. All rights reserved.
        </footer>
    );
}
function Content(){
return (
<div className='content'>
    <h1>Fun facts about react</h1>
    <ul>
        <li>   Was released in 2013     </li>
        <li>   Was created by John     </li>
        <li>   100K stars on Github    </li>
        <li>   Maintained by facebook     </li>
    </ul>
    </div>
);
}

ReactDOM.render(<div className='main'>
    <Header />
    <Content />
    <Footer />
</div>
  , document.getElementById('Page'));