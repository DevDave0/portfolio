import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';


const AboutPage = (props) => {
    

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <img className="propic" src={props.propic} alt='profile picture' />

            <p>Hello, my name is David. I'm a full stack engineer with experience in React, Redux, Vanilla Javascript, Ruby, Ruby on Rails, PostGreSQL, and Node.js.</p>

            <p>My dream is to one day start my own coffee business and become an entrepreneur.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with Node.js, React, and Angular.</p>

            <p>My latest project, Obsido, is a budgeting web application. You can check it out <a href="https://github.com/DevDave0/obsido-frontend" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with React, Redux, Chart JS, and Ruby on Rails.</p>

            <p>When I'm not learning something new chances are I'm playing basketball or ultimate frisbee.</p>
            </Content>
        </div>
    )
}


export default AboutPage;