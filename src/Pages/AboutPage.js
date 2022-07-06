import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import './AboutPage.css'
import avatarBruno from "../assets/images/avatar_Bruno.jpeg"
import avatarKsenia from "../assets/images/avatar_Ksenia.jpeg"
import {FaLinkedin } from 'react-icons/fa'
import {FaGithub } from 'react-icons/fa'


function AboutPage(){
    return(
        <div className = 'about-wrapper'>
            <div className = 'about-container'>
                <h1 className="align-left">About the project</h1>
                <p>This project was created during the Ironhack Web Development Bootcamp in June 2022. 
                    The main objective is to help users track their incomes and expenses. 
                    <p><span style={{color: "#F5793B"}}>Technologies used in this project:</span> HTML, CSS, JavaScript, React, Bootstrap</p></p>
                
                <h1 className="align-left">About us</h1>
                <div className = 'flex-image-container'>
                    <img className="circular_image" src = {avatarBruno} alt = 'avatar Bruno'/>
                    <p>
                        <span style={{color: "#F5793B"}}>Bruno Novis</span> - engineer with more than 10 years of experience 
                        in the technology area. <p>At the moment in career transition to Software Development. </p>
                        
                            <a href = 'https://www.linkedin.com/in/brunonovis/'>
                                <FaLinkedin size={25} style={{ fill: '#F5793B' }}/> 
                            </a>

                            <a href = 'https://github.com/Bru9is'>
                                <FaGithub size={25} style={{ fill: '#F5793B' }}/>
                            </a>
                    </p>    
                </div>

                

                <div className = 'flex-image-container'>
                <img className="circular_image" src = {avatarKsenia} alt = 'avatar Ksenia'/>
                    <p>
                        <span style={{color: "#F5793B"}}>Ksenia Busquet</span> - customer-oriented specialist with excellent
                         communication and interpersonal skills.<p>Passionate about helping people solve complex issues. 
                         Rich intercultural and hospitality background. Twice an expat. </p>
                         
                         <a href = 'https://www.linkedin.com/in/kseniabusquet/'>
                                <FaLinkedin size={25} style={{ fill: '#F5793B' }}/> 
                            </a>

                            <a href = 'https://github.com/kseniabusquet'>
                                <FaGithub size={25} style={{ fill: '#F5793B' }}/>
                            </a>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage