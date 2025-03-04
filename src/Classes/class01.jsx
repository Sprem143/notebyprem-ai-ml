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
        <button style={{ border: 'none', background:'transparent' }} className="fw-bolder">Topic</button>
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

        <h3>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg> Descriptive Analysis</h3>
        <p>Descriptive Analysis is a statistical method used to summarize, organize, and present data in a meaningful way. It helps in understanding the basic characteristics of a dataset through numerical measures, graphs, and tables. Unlike inferential statistics, it does not make predictions but provides insights into the data itself.</p>

        <h4>Measures of Central Tendency (Summarizing Data with a Single Value)</h4>
        <p><h5>

          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
            <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
          </svg>

          Mean (Average) : </h5>The sum of all values divided by the total number of values.</p>
        Mean = <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mfrac className="fs-3">
            <mrow>
              <mo>&#8721;</mo>
              <mi>X</mi>
            </mrow>
            <mi>n</mi>
          </mfrac>
        </math>

        <p><b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example -</b> <br /> Data = 85, 90, 78, 92, 88
          <br />
          Mean = (85+90+78+92+88)/5 <br />
          Mean = 433/5 = 86.6
        </p>

        <p><h5> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Median : </h5> The median is the middle value in a sorted dataset. It separates the dataset into two equal halves.</p>
        <ul>
          <li>If the number of values (n) is odd, the median is the middle value.</li>
          <li>If n is even, the median is the average of the two middle values.</li>
        </ul>

        <p>
          <b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example-I : Odd number of elements</b> <br />
          Dataset: 12, 18, 5, 20, 25 <br />
          Step 1: Sort the Data <br />
          Sorted dataset = 5, 12, 18, 20, 25 <br />
          The middle value is 18, so the median = 18.

        </p>
        <p><b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example 2: Even Number of Elements</b> <br />
          Dataset: 8, 15, 22, 30, 40, 50 <br />
          Step 1: Sort the Data <br />
          8, 15, 22, 30, 40, 50 <br />
          There are two middle values: 22 and 30. <br />
          Median =  22+30/2=26
        </p>

        <p>
          <h5> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
            <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
          </svg>Mode :</h5> The mode is the value that appears most frequently in a dataset. <br />
          <b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example 1: Unimodal Dataset</b> <br />
          Dataset: 4, 7, 8, 4, 6, 4, 9, 2
          <br />
          The number 4 appears 3 times, more than any other number. <br />
          Mode = 4
          <br />
          <b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example 2: Bimodal Dataset</b> <br />
          Dataset: 3, 6, 9, 6, 3, 2, 9 <br />

          3,6 & 9 appears twice <br />
          Since 3, 6, and 9 all appear most frequently (same count), the dataset is multimodal . <br />
          Mode = 3, 6, and 9 (Multimodal dataset) <br />
          <b><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-journal-code" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>Example 3: No Mode</b> <br />
          Dataset: 1, 2, 3, 4, 5 <br />
          All numbers appear only once, so there is no mode.
        </p>

      </div>

    </>
  )
}