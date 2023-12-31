import axios from 'axios'
import React, { useState } from 'react'
import useSession from '../../../hooks/useSession'
import { Container, Form, Button } from 'react-bootstrap'


const AddScreenyContainer = ({fun}) => {

    const session = useSession()

    const [containerName, setContainerName] = useState("");

    const createContainer = async () => {
        const rand = Math.floor(100000 + Math.random() * 900000)
        console.log(rand);
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/viewCode/${rand}`);
            console.log(response);

            if(response.data.codes === null) {
              const formData = {
                containerName: containerName,
                shopId: session.id,
                viewCode: rand.toString()
              };
              try {
                  const response = await axios.post(
                    `${process.env.REACT_APP_SERVER_BASE_URL}/containers`,
                    formData
                  );
                  console.log("Screeny Container created successfully:", response.data);
                  fun()
                } catch (error) {
                  console.log("Si è verificato un errore:", error);
              }
            } else {
              console.log(`Numero ${rand} già presente`);
              createContainer()
            }
          } catch (error) {
            console.log("Si è verificato un errore:", error);
          }
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      createContainer()
    }
    

  return (
    <>
        <Container className="new-user-container">
          <Form
            className="mt-5"
            >
            <Form.Group className="mt-3">
              <Form.Label>Container Name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Container Name"
                value={containerName}
                onChange={(e) => setContainerName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex mt-3 justify-content-end">
              <Button type="reset" size="lg" variant="outline-dark">
                Reset
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                size="lg"
                variant="dark"
                style={{
                  marginLeft: "1em",
                }}
              >
                Add Screeny Container
              </Button>
            </Form.Group>
          </Form>
        </Container>
    </>
  )
}

export default AddScreenyContainer