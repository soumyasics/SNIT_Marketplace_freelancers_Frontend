import Navbar from "../../Common/Navbar/navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./userRequest.css";
import Footer from "../../Common/Footer/footer";
const UserRequest = () => {
  const [validated, setValidated] = useState(false);
  const [requestData, setRequestData] = useState({
    userId: "",
    title: "",
    description: "",
    budget: "",
    category: "",
    deadline: "",
  });
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setRequestData({
      ...requestData,
      [name]: value,
    });
  };

  console.log("req work", requestData);

  return (
    <>
      <div>
        <Navbar />
        <h2 className="text-center text-light mb-3 fw-bold">Request Work</h2>
        <Form
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          className="w-50 p-4 mx-auto text-light"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={requestData.title}
                onChange={handleChanges}
                placeholder="Title"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-light">
                Please provide a valid title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                placeholder="Deadline"
                name="deadline"
                value={requestData.deadline}
                onChange={handleChanges}
                required
              />
              <Form.Control.Feedback type="invalid" className="text-light">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={requestData.description}
                onChange={handleChanges}
                placeholder="Description"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-light">
                Tell us more about your requested work.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3 mt-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                name="category"
                value={requestData.category}
                onChange={handleChanges}
                required
              />
              <Form.Control.Feedback type="invalid" className="text-light">
                Please provide a valid Categor.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Your Budget</Form.Label>
              <Form.Control
                as="input"
                name="budget"
                value={requestData.budget}
                onChange={handleChanges}
                type="number"
                placeholder="Budget"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-light">
                Please provide your maximum budget for thiw work.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center">
            <Button className="mx-auto w-25" type="submit">
              Request Work
            </Button>
          </div>
        </Form>
      </div>
      <div style={{ marginTop: "400px" }}>
        <Footer />
      </div>
    </>
  );
};
export default UserRequest;