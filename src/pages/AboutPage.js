import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hard-working high school student interested in the fields of web development, data science, and programming. I am ambitious to utilize my experiences and activities in a future occupation involving these areas. </p>
            </Content>
        </div>
    )
}

export default AboutPage;