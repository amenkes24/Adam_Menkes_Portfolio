import react from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='https://github.com/amenkes24' target="_blank"><AiOutlineGithub /></a>
            <a href='https://www.linkedin.com/in/adam-menkes-sf/' target="_blank">&nbsp;<AiOutlineLinkedin />&nbsp;</a>
            <a href='mailto:amenkes25@gmail.com' target="_blank"> <AiOutlineMail /></a>
        </footer>
    )
}

export default Footer;