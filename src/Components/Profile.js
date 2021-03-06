import React from 'react'
import Checkout_Side from './Checkout_Side'
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import {
    Card,
    CardHeader
  } from "reactstrap";
import Navbar from './Navbar';
import Footer from './Footer';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Profile() {
   
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    let gender = localStorage.getItem("gender");
    let email = localStorage.getItem("email");
    let mobile = localStorage.getItem("mobile");

    return (
        <div>
         <ToastContainer position="bottom-center" />
        <Container className="mt-2">
            <Row>
                <Col md={7}>
                     <Checkout_Side/> 
                </Col>
                <Col md={5}>
                     <p className="display-5">Profile</p>
                     <Row>
                         <Col>
                            <Card>
                                <CardHeader className="m-2 p-4 bg-dark text-white pro">First Name : {fname}</CardHeader>
                                <CardHeader className="m-2 p-4 bg-dark text-white pro">Last Name : {lname}</CardHeader>
                                <CardHeader className="m-2 p-4 bg-dark text-white pro">Gender : {gender}</CardHeader>
                                <CardHeader className="m-2 p-4 bg-dark text-white pro">Mobile : {mobile}</CardHeader>
                                <CardHeader className="m-2 p-4 bg-dark text-white pro">Email : {email}</CardHeader>
                            </Card>
                         </Col>
                     </Row>
                </Col>
            </Row>
                       
        </Container>
     
        </div>

    )
}
