import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

function ProjectCards(props) {

  const [slides, setSlides] =useState();

  useEffect(()=>{
    let items = [];
    for (let index = 0; index < props.imgPath.length; index++) {
      items.push(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imgPath[index]}
          alt="First slide"
        />
      </Carousel.Item>
      )

      setSlides(items);
      
    }
  },[props.imgPath])

  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Carousel fade>
      {slides}
    </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
