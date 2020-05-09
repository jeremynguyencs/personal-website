import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return (
        
        <div>
            <title>About Page</title>
            <Hero title={props.title}/>
            <Content>
                <p>
                    Hi! I'm a junior from La Quinta High School. I'm interested in the 
                    fields of web development, data science, and programming. I've been 
                    studying mostly Python, Java, and JavaScript. My hobbies include drawing, 
                    working on small projects, and gaming. I do enjoy going to a couple of 
                    hackathons here and there. Contact me at <a href="mailto:info@jeremynguyen.dev">info@jeremynguyen.dev</a>.
                </p>
                
            </Content>
        </div>
    )
}

export default AboutPage;