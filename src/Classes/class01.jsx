import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
export default function Class01() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="band">
                <h4>Class 01</h4>
                <p>16 February, 2025</p>
            </div>
            <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title>Topic of 16 February Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<ol>
    <li> <a href="#topic1">Introduction to data modeling for business</a> </li>
    <li> <a href="#topic2">Fundamental of statistics</a> </li>
    <li> <a href="#topic3">Inferential statistics</a> </li>
    <li> <a href="#topic4">Descriptive statics with R</a> </li>
</ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          <div className="fixbtn" onClick={handleShow}>
            <button style={{border:'none'}}>Topic</button>
          </div>

          {/* ------class content------ */}
          <div className="content">
            <h3 className="text-center mt-0">Fundamental of statistics</h3>
            <b>Reference book : <span className="boldtext">AN INTRODUCTION TO STATISTICAL LEARNING WITH APPLICATIONS IN R</span></b>
            <p>Written by - Gareth James, Daniela Witten, Trevor Hasite & Robert Tibshirani</p>
           <p> <b>Statistics : </b> statistics is a field of mathematics that deals with collecting, analyzing, interpreting, and presenting data. It provides the foundation for making inferences and predictions from data, which is essential in machine learning.</p>
           <h5 className="text-center">Type of Statistics</h5>
          <div className="dfjcac">
            <img src="/static/images/typeofstatistics.jpg" alt="" width='100%' />
          </div>
          </div>
        </>
    )
}