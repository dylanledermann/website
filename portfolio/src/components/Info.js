import { useState } from 'react';
import pfp from '../assets/images/pfp.jpg';

const Info = () =>{
    const [hovered, setHovered] = useState(false);
    const mouseHover = () => {
        setHovered(true);
    }
    const mouseLeave = () => {
        setHovered(false);
    }
    return(
        <>
            <div className='bg-secondary' style = {{height:"100vh"}}>
                <div className='mx-auto row pt-5'>
                    <div className='col-xl-2 text-center'>
                        
                    </div>
                    <div className='col-xl-5 text-center order-xl-3 pb-5'>
                        <img src={pfp} className='rounded-circle' alt='profile_picture'/>
                    </div>
                    <div className='col-xl-5 d-flex justify-content-center text-center align-items-center'>
                        <p>
                            <h1 >Dylan Ledermann</h1>
                            <p >Computer Engineering major at University of San Diego</p>
                            <p>Software Engineer</p>
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='border-top border-dark w-75' ></div>
                </div>
                <div>
                <div className='d-flex justify-content-center'>
                    <div className='border-top border-dark w-75' >
                        <h1>Projects</h1>
                        <ul>
                            <h4>This Webpage</h4>
                            <li>Created using React, Bootstrap, npm, and npx</li>
                            <h4 className='d-flex'><a href='../Maze' style={{textDecoration:'none', color: hovered ? 'lightskyblue' : '#212529'}} onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>Maze Solver/Creator</a></h4>
                            <li>Allows the user to create a maze manually or with known maze 
                                creation algorithms, and solves the maze using different maze solving algorithms</li>
                            <li>Created using JavaScript, HTML, and CSS</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Info