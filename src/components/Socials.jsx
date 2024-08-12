import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            <a href="https://github.com/kashmithnisakya" className="text-white hover:text-accent">
                <FiGithub className={iconStyles} />
            </a>
            <a href="https://www.linkedin.com/in/kashmith-nisakya/" className="text-white hover:text-accent">
                <FiLinkedin className= {iconStyles}/>
            </a>
            <a href="https://x.com/nisakyamsk" className="text-white hover:text-accent">
                <FiTwitter className={iconStyles} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010864363006&mibextid=LQQJ4d" className="text-white hover:text-accent">
                <FiFacebook className={iconStyles} />
            </a>
            <a href="mailto:kashmithnisakya@gmail.com" className="text-white hover:text-accent">
                <FiMail className={iconStyles} />
            </a>
        </div>
    );
}

export default Socials;