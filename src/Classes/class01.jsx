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
        <button style={{ border: 'none', background: 'transparent' }} className="fw-bolder">Topic</button>
      </div>

      {/* ------class content------ */}
      <div className="content">
        <h3 className="text-center mt-0">Fundamental of statistics</h3>
        <b>Reference book : <span className="boldtext">AN INTRODUCTION TO STATISTICAL LEARNING WITH APPLICATIONS IN R</span></b>
        <p>Written by - Gareth James, Daniela Witten, Trevor Hasite & Robert Tibshirani <br />

        <b>Read Book : </b> <a href="https://www.google.co.in/books/edition/An_Introduction_to_Statistical_Learning/5dQ6EAAAQBAJ?hl=en&gbpv=1&pg=PA1&printsec=frontcover" target="_blank">Click here</a>
        </p>
        
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

        <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Measure of Variability</h4>
        <p>Measures of Dispersion describe how spread out or scattered the data points are in a dataset. They help understand the variability, consistency, and reliability of data.</p>
        <ul>
          <li>If dispersion is low, data points are close to the mean.</li>
          <li>If dispersion is high, data points are widely spread.</li>
        </ul>
        <h5>Types of Measures of Variability/Dispersion</h5>

        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Range:</h5>
        <p>Difference between the maximum and minimum values. <br />
          <h6>Range = max(X) - min(X) </h6>
          <b>Example:</b> <br />
          Dataset: 5, 10, 15, 20, 25 <br />
          Range = 25-5=20
        </p>

        <h5> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Variance (𝜎 &sup2;)</h5>
        <p>Measures how far each data point is from the mean. <br />
          <math className="fs-5" xmlns="http://www.w3.org/1998/Math/MathML">
            <msup>
              <mi>σ</mi>
              <mn>2</mn>
            </msup>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mo>&#8721;</mo>
                <mo>(</mo>
                <mi>X</mi>
                <mo>-</mo>
                <mover accent="true">
                  <mi>X</mi>
                  <mo className="mb-1 fs-2">-</mo>
                </mover>
                <msup>
                  <mo>)</mo>
                  <mn>2</mn>
                </msup>
              </mrow>
              <mi>n</mi>
            </mfrac>
          </math>
          <br />
          Where
          <ul>
            <li>X = individual data points</li>
            <li>
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mover accent="true">
                  <mi>X</mi>
                  <mo className="mb-1 fs-2">-</mo>
                </mover>
              </math>
              = mean
            </li>
            <li>n = number of values</li>
          </ul>
          <b>Example -</b> <br />
          Dataset: 2, 4, 6  <br />
          Mean = (2+4+6)/3= 4 <br />
          Variance = ((2-4)&sup2; + (4-4)&sup2; + (6-4)&sup2;)/3 = (4+0+4)/3 = 2.67
        </p>

        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Standard Deviation(σ) :</h5>
        <p>Square root of variance. <br />
          <math className="fs-5" xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>σ</mi>
            <mo>=</mo>
            <msqrt>
              <msup>
                <mi>σ</mi>
                <mn>2</mn>
              </msup>
            </msqrt>
          </math>


        </p>

        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Interquartile Range (IQR) :</h5>
        <p>
          Difference between Q3 (75th percentile) and Q1 (25th percentile). <br />
          <span className="fw-5">IQR = Q3 - Q1</span> <br />
          <b>Example : </b> <br />
          Dataset: 2, 4, 6, 8, 10, 12, 14 <br />
          <ul>
            <li>Q1 (25th percentile) = 4</li>
            <li>Q3 (75th percentile) = 12</li>
          </ul>
          IQR = 12 - 4 = 8
        </p>

        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Coefficient of Variation (CV)</h5>
        <p>
          The Coefficient of Variation (CV) is a statistical measure that shows the relative variability of a dataset compared to its mean. It expresses the standard deviation as a percentage of the mean, making it useful for comparing data with different units or scales. <br />
          <math className="fs-5" xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>CV</mi>
            <mo>=</mo>
            <mrow>
              <mfrac>
                <mover accent="true">
                  <mi>X</mi>
                  <mo className="mb-1 fs-2">-</mo>
                </mover>
                <mi>σ</mi>
              </mfrac>
              <mo>×</mo>
              <mn>100</mn>
            </mrow>
          </math>
          <br />
          Where: <br />
          <ul>
            <li>σ = Standard deviation</li>
            <li> <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mover accent="true">
                <mi>X</mi>
                <mo className="mb-1 fs-2">-</mo>
              </mover>
            </math> = Mean</li>
            <li>CV is expressed as a percentage (%)</li>
          </ul>
          <b>Need of standard Deviation : </b> <br />
          Variance (σ²) is calculated as the average squared deviation from the mean.Since variance involves squaring, its unit is different from the original data.Taking the square root of variance gives Standard Deviation (σ), which has the same unit as the original data. <br />
          <b>Exmaple - </b>
          <ul>
            <li>Suppose the variance of students' heights is 25 cm².</li>
            <li>Standard deviation = √25 = 5 cm → This is easier to interpret than 25 cm².</li>
          </ul>
        </p>


        <hr />
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg> Inferential Statistics</h3>
        <p>Inferential Statistics is a branch of statistics that allows us to draw conclusions or make predictions about a population based on a sample of data. Instead of analyzing entire populations, it uses probability theory to infer characteristics, test hypotheses, and make forecasts.</p>
        <h4>Types of Inferential Statistics</h4>
        <h5>Estimation Theory : </h5>
        <p>
          Estimation is a statistical process of approximating the value of a population parameter (e.g., mean, proportion) based on sample data. Since it's often impractical to study an entire population, estimation helps us infer population characteristics using sample statistics.
        </p>
        <h5>Types of Estimation</h5>
        <ol>
          <li><b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Point Estimation : </b>A single numerical value used to estimate a population parameter. <br />
            <b>Example : </b>
            <ul>
              <li>Suppose we survey 100 students to estimate the average height of all students in a school.</li>
              <li>If the sample mean height is 5.6 feet, we estimate the population mean as 5.6 feet.</li>
            </ul>
          </li>
          <li><b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Interval Estimation : </b>Instead of a single value, it provides a range where the population parameter is likely to fall, along with a confidence level.</li>
          <b>Example : </b> <br />
          <ul>
            <li>Instead of estimating average student height as 5.6 feet, we say:
              "The average height is between 5.5 and 5.7 feet with 95% confidence."</li>
            <li>This means if we repeat the survey multiple times, 95% of the intervals will contain the true population mean.</li>
          </ul>
        </ol>
        <hr />
        <h3 className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Sampling</h3>
        <p>Sampling is the process of selecting a subset (sample) from a larger population to analyze and draw conclusions about the entire population. Since studying an entire population is often impractical, sampling helps in making reliable inferences efficiently. <br />
          <b>Exmaple-</b> <br />
          A company wants to know the average salary of software engineers in the country. <br />
          <ul>
            <li><span className="fw-bold">Population :</span>All software engineers in the country.</li>
            <li> <span className="fw-bold">Sample :</span>1,000 engineers randomly selected.</li>
            <li>The sample data helps estimate the true average salary of all engineers.</li>
          </ul>

          <b>Need of Sampling</b> <br />
          <ul>
            <li> Collecting data from an entire population is time-consuming & expensive.</li>
            <li>Sampling allows us to analyze a smaller group quickly and affordably.</li>
            <li> Sampling allows us to analyze large populations efficiently without collecting data from every individual.</li>
          </ul>

          <b>Things to Consider While Collecting a Sample</b> <br />
          <ul>
            <li>Ensure the Sample is Representative</li>
            <li>The sample must not favor a particular group.</li>
            <li>Ensure the Sample Size is Large Enough</li>
          </ul>

        </p>
        <p><span className="fs-5">Statistic : </span> Function of random Sample</p>
        <img src="/static/images/sample.jpg" alt="" width='80%' />
        <p>
        <b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-vector-pen" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
          <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
        </svg>Sampling Distribution</b> <br />
        A sampling distribution is the probability distribution of a sample statistic (e.g., mean, proportion, standard deviation) obtained from multiple random samples of the same size from a population. Instead of analyzing a single sample, a sampling distribution helps understand how a statistic (like the sample mean) varies across different random samples. <br />
        <ul>
          <li>The Chi-Square (χ²), t, and F distributions are commonly used for different types of tests and data.</li>
        </ul>
        </p>
         
        </div>

    </>
  )
}