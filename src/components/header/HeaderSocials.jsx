import React from 'react'
import {
    BsLinkedin,
    BsGithub,
    BsTwitter,
    BsInstagram
} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/purvesh-patidar-1982721b8/" target="_blank" rel='noopener noreferrer'>
           <BsLinkedin />
        </a>
        <a href="https://github.com/ptdr1516/" target="_blank" rel='noopener noreferrer'>
            <BsGithub />
        </a>
        <a href="https://twitter.com/ptdr1516/" target="_blank" rel='noopener noreferrer'>
            <BsTwitter />
        </a>
        <a href="https://instagram.com/ptdr1516/" target="_blank" rel='noopener noreferrer'>
            <BsInstagram />
        </a>
    </div>
  );
}

export default HeaderSocials;