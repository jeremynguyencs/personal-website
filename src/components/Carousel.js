import React from 'react';

import Card from '../components/Card';

import WIP from '../assets/images/WIP.png';
import COVID_Connect from '../assets/images/COVID_Connect.png';
import Github from '../assets/images/Github.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'COVID Connect',
                    subTitle: 'A platform for COVID-19 data',
                    imgSrc: COVID_Connect,
                    link: 'https://joinlaunchpad.com/#/projects/1316/combating-covid-19-2',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Github Projects',
                    subTitle: 'All the code I uploaded on Github',
                    imgSrc: Github,
                    link: 'https://github.com/jeremynguyencs',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Under Construction',
                    subTitle: 'Working on it! Keep in touch. :)',
                    imgSrc: WIP,
                    link: 'https://www.jeremynguyen.dev',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render () {
        return(
          <Container>
              <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
              </Row>
          </Container>

        );
    }
}

export default Carousel;