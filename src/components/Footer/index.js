import react from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='https://github.com/amenkes24' target="_blank"> <AiOutlineGithub /></a>
            <a href='https://www.linkedin.com/in/adam-menkes-sf/' target="_blank"><AiOutlineLinkedin /></a>
        </footer>
    )
}

export default Footer;