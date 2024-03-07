import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FeatureCard from './../Card/FeatureCard'
import Button from 'react-bootstrap/Button';
import './Homepage.css'

import Features from '../../data/Features.json';

function Homepage() {


    return (
        <>
        <Container fluid="lg">
        <header className="header">
            
            <h1 className="title"> 
            Impact Code Finder </h1>
            <h2 className="subtitle">A Discord bot with the objective to fetch and notify users of the latest promotional codes for the game, <span className='subtitle' style={{fontWeight: 'bold'}}>Genshin Impact</span>.</h2>
            <img className="screenshot" src={`${process.env.PUBLIC_URL}/${'Images/Product_Image.png'}`} alt="screenshot"></img>
            <a href='https://discord.com/oauth2/authorize?client_id=1201947014963658852&permissions=8&scope=bot' target='_blank' rel='noreferrer'><Button className='action-button'>Add To Discord</Button></a>
        </header>

        <h2 className="title" style={{fontSize: '40px'}}>Features</h2>
        
    
        <div className="card-container">
            {Features.map((features, index) =>
            <FeatureCard
                key={index}
                title={features.title}
                description={features.description}
            />
            )}
        </div>

        <a href='https://isaacnunez.com/' target='_blank' rel='noreferrer'><Button className='credit-button'>Made By Isaac Nunez</Button></a>
      
        </Container>
        </>
    );
}

export default Homepage;