import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <Container>
      
      <Form className='Predict-form'>

        <img className='mb-4 upes-Logo'
          src='https://indiaeducationdiary.in/wp-content/uploads/2022/01/UPES-LOGO-01.jpg'></img>
          
        <Form.Group className="mb-3" controlId="formProductName">
        <Form.Label>Name of the product:</Form.Label>
          <input className='ProdName' type="text" placeholder="Enter the product name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
        <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Category
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">A</Dropdown.Item>
    <Dropdown.Item href="#/action-2">B</Dropdown.Item>
    <Dropdown.Item href="#/action-3">C</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formType">
        <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Type
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">A</Dropdown.Item>
    <Dropdown.Item href="#/action-2">B</Dropdown.Item>
    <Dropdown.Item href="#/action-3">C</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formSpecifictaions">
        <Form.Label>Specifications:</Form.Label>
          <input className='ProdSpecifications' type="text" placeholder='Specifications'/>
          <input className='ProdSpecifications2' type="text" placeholder='Specifications'/>
          <input className='ProdSpecifications2' type="text" placeholder='Specifications'/>
          <input className='ProdSpecifications2' type="text" placeholder='Specifications'/>
        </Form.Group>


        <Button variant="success" type="submit">
    Predict
  </Button>

      </Form>

    </Container>
  );
}

export default App;
