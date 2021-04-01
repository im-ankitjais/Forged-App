import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import telegram from '../assets/images/telegram.svg'
import twitter from '../assets/images/twitter.svg'
import discord from '../assets/images/discord.svg'
import youtube from '../assets/images/youtube.svg'
import reddit from '../assets/images/reddit.svg'

import '../assets/css/RightNav.css'
const RightNav = () => {
    return (
        <div className="right_nav">
            <div>
                <a target="_blank" href="https://www.facebook.com/"><img src={facebook}  alt="penny atocks facebook" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.instagram.com/"><img src={instagram}  alt="penny atocks instagram" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.t.me/joinchat/"><img src={telegram}  alt="penny atocks telegram" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.twitter.com/"><img src={twitter} alt="penny atocks twitter" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.reddit.com/"><img src={reddit} alt= "penny atocks reddit" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.youtube.com/"><img src={youtube} alt="penny atocks youtube" className="right_nav_icons" /></a>
                <a target="_blank" href="https://www.discord.gg/"><img src={discord} alt="penny atocks discord" className="right_nav_icons" /></a>
              </div>
        </div>
    )   
}

export default RightNav;