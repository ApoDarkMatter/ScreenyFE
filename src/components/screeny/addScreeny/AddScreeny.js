import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import useSession from '../../../hooks/useSession';
import axios from 'axios';
import HomeNavbarAuth from '../../navbar/home-navbar-auth/HomeNavbarAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../../reducers/screeny'
import { RotatingSquare } from  'react-loader-spinner'

function AddScreeny(screenyId) {
    console.log(screenyId);

    const isLoading = useSelector((state) => state.screen.isLoading)

    const dispatch = useDispatch()

    const session = useSession()

    const [text, setText] = useState("");
    const [btnLoad,setBtnLoad] = useState(false)

      // create a state for the file
    const [file, setFile] = useState(null);

    // create a function to set the file
    // need to be always to 0
    const onChangeSetFile = (e) => {
        setFile(e.target.files[0]);
    };

    const formData = {
        text: text,
        containerId: screenyId.screenyId,
        shopId: session.id,
    };

      // create a function to upload the file
    const uploadFile = async (screen) => {  
        setBtnLoad(true)
        const fileData = new FormData()
        fileData.append("screen", screen)
        
        // send the file to the server
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_BASE_URL}/screen/cloudUpload`,
                fileData
            );
            console.log("File caricato con successo:", response.data);
            return response.data;
        } catch (error) {
            console.log("Si è verificato un errore:", error);
        }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      if (file) {
        console.log(file);
        try {
          // upload the file
          const uploadedFile = await uploadFile(file);
          console.log(uploadedFile);
          // add the cover to the formData
          const finalBody = {
            ...formData,
            imgUrl: uploadedFile.screen
          };
          console.log("finalBody:", finalBody);
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_BASE_URL}/screen`,
            finalBody,
            { headers: { "Content-Type": "application/json" } }
          );
          console.log("Screen creato con successo:", response.data);
          setFile(null);
          console.log("uploadedFile:", uploadedFile);
          setText("")
          dispatch(setIsLoading(!isLoading))
          setBtnLoad(false)
        } catch (error) {
          console.log("Si è verificato un errore:", error);
        }
      } else {
        console.error("File filed empty");
        alert("File cannot be empty")
      }

    }

    useEffect(() => {

    }, [btnLoad,isLoading])
    
    
    if(btnLoad) {
      return (
        <> 
            <HomeNavbarAuth/>
            <Container>
                <h2>Add New Screeny!</h2>
            {/* setting the form encType */}
                <Form
                    className="mt-5"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    >
                    <Form.Group controlId="blog-form" className="mt-3">
                        <Form.Label>Img</Form.Label>
                            <Form.Control
                                value=""
                                type="file"
                                name="screen"
                                size="lg"
                                placeholder="Cover"
                                onChange={onChangeSetFile}
                        />
                    </Form.Group>
                    <Form.Group controlId="blog-form" className="mt-3">
                        <Form.Label>Text</Form.Label>
                            <Form.Control
                                size="lg"
                                placeholder="Text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="d-flex mt-3 justify-content-end">
                        <Button type="reset" size="lg" variant="outline-dark">
                            Reset
                        </Button>
                        <Button
                            type="submit"
                            size="lg"
                            variant="dark"
                            style={{
                            marginLeft: "1em",
                            }}
                        >
                            <RotatingSquare
                                      height="25"
                                      width="25"
                                      color="#ffffff"
                                      ariaLabel="rotating-square-loading"
                                      visible={true}
                            />
                        </Button>
                    </Form.Group>
                </Form>
            </Container>        
        </>
      )
    } else {
      return (
        <> 
            <HomeNavbarAuth/>
            <Container>
                <h2>Add New Screeny!</h2>
            {/* setting the form encType */}
                <Form
                    className="mt-5"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    >
                    <Form.Group controlId="blog-form" className="mt-3">
                        <Form.Label>Img</Form.Label>
                            <Form.Control
                                type="file"
                                name="screen"
                                size="lg"
                                placeholder="Cover"
                                onChange={onChangeSetFile}
                        />
                    </Form.Group>
                    <Form.Group controlId="blog-form" className="mt-3">
                        <Form.Label>Text</Form.Label>
                            <Form.Control
                                size="lg"
                                placeholder="Text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="d-flex mt-3 justify-content-end">
                        <Button type="reset" size="lg" variant="outline-dark">
                            Reset
                        </Button>
                        <Button
                            type="submit"
                            size="lg"
                            variant="dark"
                            style={{
                            marginLeft: "1em",
                            }}
                        >
                            Add
                        </Button>
                    </Form.Group>
                </Form>
            </Container>        
        </>
      )
    }
  
}

export default AddScreeny