import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
export default function Class06() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="band">
                <h4>Class 06</h4>
                <p>23th March, 2025</p>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>Topic of 16th March Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li> <a href="#topic1"></a> </li>
                        <li> <a href="#topic2"></a> </li>
                        <li> <a href="#topic3"></a> </li>
                        <li> <a href="#topic4"></a> </li>
                    </ol>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="fixbtn" onClick={handleShow}>
                <button style={{ border: 'none', background: 'transparent' }} className="fw-bolder">Topic</button>
            </div>

            {/* ------class content------ */}
           <div className="content">
            <h1 className="text-center">
                Comming Soon...
            </h1>
           </div>
        </>
    )
}