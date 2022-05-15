import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
     const[details, setDetails]=useState({
       name:"", Category:"",Type:"", Spec1:"",Spec2:"",Spec3:"",Spec4:""
     });
   
    let name,value;
   const handleInputs = (e) =>{
      name=e.target.name;
      value=e.target.value;

      setDetails({...details, [name]:value})
   }


  return (
    <Container>

      <Form className='Predict-form'>

        <img className='mb-4 upes-Logo'
          src='https://indiaeducationdiary.in/wp-content/uploads/2022/01/UPES-LOGO-01.jpg'></img>

        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Name of the product:</Form.Label>
          <input className='ProdName' name="name" type="text" value={details.name} onChange={handleInputs} placeholder="Enter the product name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Category:</Form.Label>
          <input className='ProdCat' name="Category" type="text" value={details.Category} onChange={handleInputs} placeholder="Enter the product category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Type:</Form.Label>
          <input className='ProdType' name="Type" type="text" value={details.Type} onChange={handleInputs} placeholder="Enter the product type" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formSpecifictaions">
          <Form.Label>Specifications:</Form.Label>
          <input className='ProdSpecifications' name="Spec1" type="text" value={details.Spec1} onChange={handleInputs}  placeholder='Specifications' />
          <input className='ProdSpecifications2' name="Spec2" type="text" value={details.Spec2} onChange={handleInputs}  placeholder='Specifications' />
          <input className='ProdSpecifications2' name="Spec3" type="text" value={details.Spec3} onChange={handleInputs}  placeholder='Specifications' />
          <input className='ProdSpecifications2' name="Spec4" type="text" value={details.Spec4} onChange={handleInputs}  placeholder='Specifications' />
        </Form.Group>


        <Button variant="success" type="submit">
          Predict
        </Button>

      </Form>

    </Container>
  );
}

export default App;
