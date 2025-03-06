import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
export default function Class03() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="band">
                <h4>Class 03</h4>
                <p>2 March, 2025</p>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>Topic of 2nd March Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li> <a href="#topic1">Numpy</a> </li>
                        <li> <a href="#topic2">Panda</a> </li>
                        <li> <a href="#topic3">Matplotlib</a> </li>
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
            <div className="content pb-0" id="numpy">
                <div className="w-100 d-flex justify-content-center"><div className="line"></div></div>

                <h1 className="text-center mt-0 pt-0" >
                    Numpy
                </h1>
                <div className="w-100 mb-2 d-flex justify-content-center"><div className="line"></div></div>
                <p>NumPy, short for Numerical Python, is one of the most important foundational packages for numerical computing in Python.</p>
                <h5>In NumPy, you find the following:</h5>
                <ol>
                    <li>ndarray, an efficient multidimensional array providing fast array-oriented arithmetic
                        operations and flexible broadcasting capabilities.</li>
                    <li>Mathematical functions for fast operations on entire arrays of data without having
                        to write loops.</li>
                    <li>Tools for reading/writing array data to disk and working with memory-mapped
                        files.</li>
                    <li>Linear algebra, random number generation, and Fourier transform capabilities.</li>
                    <li>A C API for connecting NumPy with libraries written in C, C++, or FORTRAN.</li>
                </ol>
                <ul>
                    <li>While NumPy provides a computational foundation for general numerical data processing, experts use pandas as the basis for most kinds of statistics or analytics, especially on tabular data.</li>
                    <li>pandas also provides some more domain specific functionality like time series manipulation, which is not present in NumPy.</li>
                </ul>
                <h3 className="mb-2">Importing the Module</h3>
                <img src="/static/images/class03/01.png" alt="" className="code" />
                <p>After importing, we can access functions and classes in the numpy module using the np namespace.</p>
                <img src="/static/images/class03/02.png" alt="" className="code" />
                <h5>The NumPy Array Object</h5>
                <li>The core of the `NumPy` library is the data structures for representing multidimensional arrays of homogeneous data. </li>
                    <li>  Homogeneous refers to all elements in an array having the same data type
                    </li>
                    <li>
The main data structure for multidimensional arrays in `NumPy` is the `ndarray` class
                    </li>
                    <li>
                    In addition to the data stored in the array, this data structure also
contains important metadata about the array, such as its shape, size, data type, and other
attributes.
                    </li>
                    <img src="/static/images/class03/03.png" alt="" className="code" /> <br />

<b>The following example demonstrates how these attributes are accessed for an
instance data of the class ndarray:</b> <br />
<img src="/static/images/class03/04.png" alt="" className="code" />
<img src="/static/images/class03/05.png" alt="" className="code" />
<img src="/static/images/class03/06.png" alt="" className="code" />
<img src="/static/images/class03/07.png" alt="" className="code" />
<img src="/static/images/class03/08.png" alt="" className="code" />
<img src="/static/images/class03/09.png" alt="" className="code" />
<img src="/static/images/class03/10.png" alt="" className="code" />

            </div>
        </>
    )
}