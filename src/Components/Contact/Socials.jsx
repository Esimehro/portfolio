import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SlSocialTwitter} from 'react-icons/sl';
import con from './Contact.module.css'

function Socials () {
  return (
    <div className={con.socialsHeader}>
    <a href='https://linkedln.com'><BsLinkedin/></a>
    <a href='https://github.com/Esimehro'><BsGithub/></a>
    <a href='https://twiiter.com'><SlSocialTwitter/></a>
    </div>
  )
}
export default Socials;
