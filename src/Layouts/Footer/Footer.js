import './Footer.css'
import instagram from '../../Assets/SVG/instagram.svg'
import youtube from '../../Assets/SVG/youtube.svg'
import soundcloud from '../../Assets/SVG/soundcloud.svg'
import linkedin from '../../Assets/SVG/linkedin.svg'


const FOOTER_TEXT = {
    "PT":"Contacte-me",
    "EN":"Contact me"
}

const SOCIALS = {
    "instagram": {
        "url": "https://www.instagram.com/flip_ze/",
        "img": instagram
    },
    "youtube": {
        "url": "https://www.youtube.com/channel/UCwKmayMgXom558mldQlPKHQ",
        "img": youtube
    },
    "soundcloud": {
        "url": "https://soundcloud.com/flip_ze",
        "img": soundcloud
    },
    "linkedin": {
        "url": "https://www.linkedin.com/in/filipe-jose/",
        "img": linkedin
    }
}


function listSocials(){
    return Object.keys(SOCIALS).map((key) => {
        return (
            <a href={SOCIALS[key]["url"]}><img src={SOCIALS[key]["img"]} className='social-icon'/></a>
        )
    });
}

function Footer({currentLanguage}){
    console.log(instagram)
    return(
        <div className="footer">
            <h2>{FOOTER_TEXT[currentLanguage]}</h2>
            <p className='email'>filipemnjose@gmail.com</p>
            <div className='socials-list-container'>
                {listSocials()}
            </div>
        </div>
    )
}

export default Footer;