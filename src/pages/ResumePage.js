import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Resume from '../assets/pdf/Jeremy_Nguyen_Resume.pdf';

function AboutPage(props){

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
            <a href = {Resume} target = "_blank">Open PDF in new tab</a>
            </Content>
        </div>
    )
}

export default AboutPage;