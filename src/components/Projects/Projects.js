import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LoansLan from "../../Assets/LoansLan.png";
import chat from "../../Assets/chat.png";
import lothal from "../../Assets/lothal.png";
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
import zflix from "../../Assets/Zflix.png";
import zflix1 from "../../Assets/Zflix 1.png";
import zflix2 from "../../Assets/Zflix 2.png";
import zflix3 from "../../Assets/Zflix 3.png";
import zflix4 from "../../Assets/Zflix 4.png";
import Triology from "../../Assets/Triology.png";
import employee from "../../Assets/employee.png";



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
              imgPath={[zflix,zflix4, zflix1, zflix2,zflix3]}
              isBlog={false}
              title="Zflix - Online watch movie || series"
              description="Zflix is an innovative online streaming platform designed to provide users with a seamless and engaging
               movie and series watching experience. With a user-centric approach, Zflix aims to bring the latest and greatest cinematic content right to users' screens, offering a wide range of movies and TV series across various genres."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[HRMFrontend1, HRMFrontend2, HRMFrontend3]}
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
              imgPath={[Banoindia1, Banoindia2]}
              isBlog={false}
              title="Banoindia (Ecom)"
              description="This an exciting eCommerce project that aims to revolutionize online shopping. Thi project is designed to provide a seamless and engaging platform for buyers and sellers.
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Perspectve1, Perspectve2]}
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
              imgPath={[chat]}
              isBlog={false}
              title="Chat App"
              description="This repo consists of the Frontend part of a Realtime Chat Application built with the MERN stack. I built it when I was trying to learn React and the stack for the first time"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[chatify]}
              isBlog={false}
              title="Microservice with gRPC"
              description="The Microservice Architecture with gRPC Integration project focuses on developing a scalable and efficient system using microservices architecture and leveraging gRPC for communication between services. The project aims to showcase the benefits of microservices and demonstrate how gRPC can enhance inter-service communication in a distributed environment."/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[lothal]}
              isBlog={false}
              title="Lothal Valley"
              description="This project focuses on providing a hassle-free platform for property listings and viewing. Built with Node.js and Handlebars, it offers a seamless experience for users.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[employee]}
              isBlog={false}
              title="Employee Management"
              description="The Employee Management System project is a comprehensive software solution designed to streamline and enhance the management of employee-related tasks within an organization. The system aims to automate various aspects of employee management, including record keeping, communication, reporting, and administrative processes."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[bitsOfCode]}
              isBlog={false}
              title="Hiyee Mee (Job Portal)"
              description="The Hiyee Mee project is a comprehensive job portal website designed to connect job seekers with employers, providing a platform for efficient job search, application, and recruitment processes. The website aims to bridge the gap between job seekers and employers by offering user-friendly features and functionalities."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Triology]}
              isBlog={false}
              title="Triology Infinty (Ecom)"
              description="The Trilogy Infinity Ecommerce Website project aims to develop a dynamic and feature-rich online shopping platform using the Laravel framework. The website will showcase a wide range of products, provide a user-friendly shopping experience, and offer essential ecommerce functionalities to customers."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[LoansLan]}
              isBlog={false}
              title="LoansLan"
              description="LoansLan is an innovative online platform designed to connect borrowers with lending institutions, offering a streamlined and user-friendly experience for individuals seeking various types of loans. The project focuses on providing a secure, efficient, and transparent process for loan application, evaluation, and approval."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
