import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Banoindia1 from "../../Assets/Banoindia-1.png";
import Banoindia2 from "../../Assets/Banoindia-2.png";
import HRMBackend from "../../Assets/HRM-Backend.png";
import HRMFrontend1 from "../../Assets/HRM-Frontend-1.png";
import HRMFrontend2 from "../../Assets/HRM-Frontend-2.png";
import HRMFrontend3 from "../../Assets/HRM-Frontend-3.png";
import Perspectve1 from "../../Assets/Perspectve-1.png";
import Perspectve2 from "../../Assets/Perspectve-2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[HRMFrontend1,HRMFrontend2,HRMFrontend3]}
              isBlog={false}
              title="HRM - Frontend"
              description="This groundbreaking project revolutionizes HRM for seamless staff management. Powered by the cutting-edge React library and seamlessly integrated with Node.js APIs, it redefines how organizations streamline their human resources processes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[HRMBackend]}
              isBlog={false}
              title="HRM Backend API's"
              description="This project focuses on creating a user-friendly and efficient Rest API using Node.js. Utilize a range of modern technologies to enhance security, real-time attendance tracking, staf management and ease of use."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Banoindia1,Banoindia2]}
              isBlog={false}
              title="Banoindia (Ecom)"
              description="This an exciting eCommerce project that aims to revolutionize online shopping. Thi project is designed to provide a seamless and engaging platform for buyers and sellers.
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Perspectve1,Perspectve2]}
              isBlog={false}
              title="Persepectv (Job Seeker)"
              description="Job portal website that connects job seekers and employers.
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[suicide]}
              isBlog={false}
              title="Ecommerce"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[emotion]}
              isBlog={false}
              title="Chat App"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[chatify]}
              isBlog={false}
              title="Microservice with gRPC"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[editor]}
              isBlog={false}
              title="Lothal Valley"
              description="This project focuses on providing a hassle-free platform for property listings and viewing. Built with Node.js and Handlebars, it offers a seamless experience for users.
              "            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[emotion]}
              isBlog={false}
              title="Employee Management"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[bitsOfCode]}
              isBlog={false}
              title="Hiyee Mee (Job Portal)"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[emotion]}
              isBlog={false}
              title="Triology Infinty (Ecom)"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[leaf]}
              isBlog={false}
              title="LoansLan"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
