import { useState } from 'react'
import Slider from "react-slick";
import './App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function App() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
      <div className="pt"></div>
      <div className="container p-4 m-0 homecontact">
        <div className="row p-0 m-0 parentheight">
          <div className="col-lg-8 col-md-6 pe-4 d-flex flex-column justify-content-center parentheight" >
            <h4>heading 001</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni deleniti facilis? Repellendus doloremque molestiae et asperiores dolorum excepturi debitis dolor inventore, possimus, veritatis sequi quos enim harum ut dolore.</p>
            <button className='butn'>Button</button>

          </div>
          <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center parentheight">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>

        </div>
      </div>

      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h2>About Company</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
            <button className='butn2'>Button</button>
          </div>
          <div className="col-md-6 p-4 dfjcac">
            <img src="/static/images/demo.jpeg" alt="" height='250' />
          </div>
        </div>
      </div>
      <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
      </div>

      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem1 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem3 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>

          <div className="col-md-6 mt-3 dfjcac borderbox">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
            <p className='tac'>Lorem4 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
          </div>
        </div>
      </div>

      <div className="container p-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-evenly">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="smbox dfjcac">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="smbox dfjcac p-0">
              <img src="/static/images/logo.jpeg" alt="logo" height='100' />
              <h4 className="text-center">10+ Year</h4>
              <p className='text-center'>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4 mt-4" style={{ background: 'rgb(28, 28, 103)' }}>
        <div className="row">
          <div className="col-md-7 dfjcac">
            <h3 className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-md-5 dfjcac">
            <button className='butn ps-4 pe-4'><h4>Button</h4></button>

          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
        <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corrupti vitae, temporibus, voluptatum, ipsum a officiis quas minima natus quis quod labore quidem? Sapiente magni odit similique reprehenderit libero aspernatur?</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="content-container">
              <div className="sidelogo d-flex flex-column align-items-center">
                <img src="/static/images/logo.jpeg" alt="logo" height='90' />
                <div className='line'></div>
              </div>
              <div className='content'>
                <h4 className='mb-2'>Plan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam possimus reprehenderit. Similique veniam autem aspernatur? At, autem. Similique debitis ut iusto nihil totam minima architecto incidunt ipsam quidem magnam!</p>
              </div>
            </div>

            <div className="content-container">
              <div className="sidelogo d-flex flex-column align-items-center">
                <img src="/static/images/logo.jpeg" alt="logo" height='90' />
                <div className='line'></div>
              </div>
              <div className='content'>
                <h4 className='mb-2'>Plan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam possimus reprehenderit. Similique veniam autem aspernatur? At, autem. Similique debitis ut iusto nihil totam minima architecto incidunt ipsam quidem magnam!</p>
              </div>
            </div>

            <div className="content-container">
              <div className="sidelogo d-flex flex-column align-items-center">
                <img src="/static/images/logo.jpeg" alt="logo" height='90' />
                <div className='line'></div>
              </div>
              <div className='content'>
                <h4 className='mb-2'>Plan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam possimus reprehenderit. Similique veniam autem aspernatur? At, autem. Similique debitis ut iusto nihil totam minima architecto incidunt ipsam quidem magnam!</p>
              </div>
            </div>

            <div className="content-container">
              <div className="sidelogo d-flex flex-column align-items-center">
                <img src="/static/images/logo.jpeg" alt="logo" height='90' />
                {/* <div className='line'></div> */}
              </div>
              <div className='content'>
                <h4 className='mb-2'>Plan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam possimus reprehenderit. Similique veniam autem aspernatur? At, autem. Similique debitis ut iusto nihil totam minima architecto incidunt ipsam quidem magnam!</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 dfjcac">
            <img src="/static/images/demo.jpeg" alt="" height='300' />
          </div>
        </div>
      </div>

      <div className="container p-3 bg-theme">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h2 className='ps-4'>About Company</h2>
            <p className='ps-4 mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
            </p>
            <button className='butn ms-4 mt-3'>Button</button>
          </div>
          <div className="col-md-6 p-4 dfjcac">
            <img src="/static/images/demo.jpeg" alt="" height='250' />
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-center">Our Digital Marketing Services</h2>
        <p className="text-center mt-3 ps-4 pe-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corrupti vitae, temporibus, voluptatum, ipsum a officiis quas minima natus quis quod labore quidem? Sapiente magni odit similique reprehenderit libero aspernatur?</p>
      </div>

      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 dfjcac mt-4">
            <div className='dfjcac borderbox2'>
              <img src="/static/images/logo.jpeg" alt="logo" height='120' />
              <h3 className="text-center mb-3">Heading</h3>
              <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
            </div>
          </div>

          <div className="col-md-6 dfjcac mt-4 ">
            <div className='dfjcac borderbox2'>
              <img src="/static/images/logo.jpeg" alt="logo" height='120' />
              <h3 className="text-center mb-3">Heading</h3>
              <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
            </div>
          </div>

          <div className="col-md-6 dfjcac mt-4">
            <div className='dfjcac borderbox2'>
              <img src="/static/images/logo.jpeg" alt="logo" height='120' />
              <h3 className="text-center mb-3">Heading</h3>
              <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
            </div>
          </div>

          <div className="col-md-6 dfjcac mt-4">
            <div className='dfjcac borderbox2'>
              <img src="/static/images/logo.jpeg" alt="logo" height='120' />
              <h3 className="text-center mb-3">Heading</h3>
              <p className='tac'>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit similique iusto nisi reiciendis asperiores voluptate consectetur nam, sequi eligendi cumque at suscipit aperiam, quo expedita temporibus facilis, minima nemo.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-3 mt-4 bg-theme">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h2 className='ps-4'>About Company</h2>
            <p className='ps-4 mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sequi corporis officia id minus blanditiis architecto quam labore explicabo dicta enim ullam molestias, quasi odio voluptates necessitatibus eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero facere nihil voluptates nesciunt quisquam minus sunt eligendi? Iste ullam nihil quo veniam ut sed laborum ad explicabo natus maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugit debitis inventore quasi quos dicta consequuntur minus incidunt ab, accusamus dolore est assumenda. Dolore illo, nihil repellat inventore a cupiditate.
            </p>
            <button className='butn ms-4 mt-3'>Button</button>
          </div>
          <div className="col-md-6 p-4 dfjcac">
            <img src="/static/images/demo.jpeg" alt="" height='250' />
          </div>
        </div>
      </div>

      {/* ------4 logo in line------- */}
      <div className="container">
        <div className="row d-flex p-4">
          <div className="col-md-3 dfjcac">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
          </div>
          <div className="col-md-3 dfjcac">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
          </div>
          <div className="col-md-3 dfjcac">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
          </div>
          <div className="col-md-3 dfjcac">
            <img src="/static/images/logo.jpeg" alt="logo" height='120' />
          </div>
        </div>
      </div>
      {/* -----------client feedback----------- */}
      {/* <div className="p-3 mt-4 bg-theme">
        <h3 className="text-center">Client Speak</h3>
        <div>
          <AwesomeSlider>
            <div className='slider dfjcac p-4'>
              <h1 >"</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolorum quam reiciendis magnam error neque consequatur illo itaque perferendis fuga esse possimus quas deleniti sint, cumque ullam tempore! Sit, dicta.</p>
              <hr />
              <h5>Name</h5>
              <b>Occupation</b>
            </div>
            <div className='slider dfjcac p-4'>
              <h1 >"</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolorum quam reiciendis magnam error neque consequatur illo itaque perferendis fuga esse possimus quas deleniti sint, cumque ullam tempore! Sit, dicta.</p>
              <hr />
              <h5>Name</h5>
              <b>Occupation</b>
            </div>
            <div className='slider dfjcac p-4'>
              <h1 >"</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolorum quam reiciendis magnam error neque consequatur illo itaque perferendis fuga esse possimus quas deleniti sint, cumque ullam tempore! Sit, dicta.</p>
              <hr />
              <h5>Name</h5>
              <b>Occupation</b>
            </div>
            <div className='slider dfjcac p-4'>
              <h1 >"</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolorum quam reiciendis magnam error neque consequatur illo itaque perferendis fuga esse possimus quas deleniti sint, cumque ullam tempore! Sit, dicta.</p>
              <hr />
              <h5>Name</h5>
              <b>Occupation</b>
            </div>
          </AwesomeSlider>
        </div>
      </div> */}
      <div className="container bg-theme p-4">
        <h3 className="text-center mb-4">Client Feedback</h3>

        <Slider {...settings}>
          <div className='dfjcac' style={{ widows: '100%' }}>
            <h3 className='text-center'>1</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
          <div className='dfjcac'>
            <h3 className='text-center'>2</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
          <div className='dfjcac'>
            <h3 className='text-center'>3</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
          <div className='dfjcac'>
            <h3 className='text-center'>4</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
          <div className='dfjcac'>
            <h3 className='text-center'>5</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
          <div className='dfjcac'>
            <h3 className='text-center'>6</h3>
            <div className="feedback dfjcac">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus dolores repudiandae voluptatum sunt libero illum rem autem, officia nam doloribus minima, cum, iure accusantium deleniti architecto quam est qui.
              </p>
              <h5 className="text-center">Name</h5>
              <p cl>Occupation</p>
            </div>
          </div>
        </Slider>

      </div>

      <div className="container">
        <h3 className='text-center mt-4 mb-4'>Heading</h3>
        <div className="row ">
          <div className="col-md-4 pt-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 p-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 p-2 dfjcac">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/static/images/demo.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <h3 className="text-center">Contact Form</h3>
        <p className="text-center mt-3 fs-4">Want to get in touch? We'd love to hear from you. Just fill in the form below.</p>
        <div className="row row2 dfjcac flex-row mt-4">
          <div className="col-md-3">

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

          </div>
          <div className="col-md-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </div>
          <div className="col-md-9">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </div>
         
        </div>
       <div className="w-100 d-flex justify-content-center">
       <button className='butn2 ps-4 pe-4 pt-2 pb-2'>Button</button>
       </div>
      </div>
    </>
  )
}

export default App
