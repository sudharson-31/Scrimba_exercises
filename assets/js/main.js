import images from './images'
function Card(){
    return (
        <div className="main-card">
            <Profile />
            <Contact />
            <Content />
            <Footer />
        </div>
    )
}
function Profile(){
    return (
        <div className="profile">
        <div className="profile-dp">
            <img src="images.profileDp" alt="Profile picture"></img>
        </div>
        <div className="profile-details">
            <h2 id="name">Laura Smith</h2>
            <span id="role">Frontend Developer</span>
            <span id="website">laurasmith.website</span>
        </div>
        </div>

    )
}
function Contact(){
    return(
        <div className="contact">
                <button id="email"><img src="../../images/icons/email.png" alt="email"></img>Email</button>
                <button id="linkedin"><img src="../../images/icons/linkedin.png"></img>LinkedIn</button>
        </div>
    )
}
function Content(){
    return(
        <div className="content">
            <h3>About</h3>
            <content>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always looking for new things to learn.
            </content>
            <h3>Interests</h3>
            <content>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. 
            Pop culture ninja. Coffee fanatic.
            </content>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <img src="../../images/icons/TwitterIcon.png" alt="twitter"></img>
            <img src="../../images/icons/FacebookIcon.png" alt="facebook"></img>
            <img src="../../images/icons/InstagramIcon.png" alt="instagram"></img>
            <img src="../../images/icons/GitHubIcon.png" alt="github"></img>
        </div>
    )
}





ReactDOM.render(
    <Card />,
    document.getElementById("root")
);