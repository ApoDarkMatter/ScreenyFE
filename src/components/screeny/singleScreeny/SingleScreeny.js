import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, Form } from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../../reducers/screeny';
import axios from 'axios';
import {BsPencil} from 'react-icons/bs';

const SingleScreeny = (screen) => {

    const [text, setText] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      setText(screen.screen.text)
      setShow(true);
    }

    console.log(screen);

    const isLoading = useSelector((state) => state.screen.isLoading)
    const dispatch = useDispatch()

    const deleteScreeny = async () => {
      const confirmString = window.confirm("Confirm Screeeny Delete?")
      if(confirmString) {
        try {
          await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${screen.screen._id}`)
          console.log("Screen deleted succesfully");
          dispatch(setIsLoading(!isLoading))
        } catch (error) {
          console.log(error);
        }
      }

      }

    const modifyName = async (event) => {
        event.preventDefault()
    
        try {
          const response = await axios.patch(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${screen.screen._id}`,{text: text})
          console.log("Screeny name modified correctly:", response.data);
          handleClose()
          dispatch(setIsLoading(!isLoading))
        } catch (error) {
          console.log("Error:", error);
        }
    
      }
    
      useEffect(() => {

      }, [isLoading])
      


  return (
    <>
        <Card style={{marginBottom:"0.5rem"}}>
            <Card.Img variant="top" src={screen.screen.imgUrl} style={{ height: '10rem' }}/>
            <Card.Body>
              <Card.Title><Button variant="light" onClick={handleShow}><BsPencil/></Button> {screen.screen.text}</Card.Title>
              <Button 
                      style={{width: "100%"}} 
                      variant="danger"
                      onClick={deleteScreeny}
                      >Delete <AiOutlineDelete/></Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Screeny Text</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Modify Screeny Text</Form.Label>
                <Form.Control
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={modifyName}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </>  
    )
}

export default SingleScreeny