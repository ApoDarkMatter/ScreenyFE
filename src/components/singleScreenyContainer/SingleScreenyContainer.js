import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleScreenyContainer = (screeny) => {
  console.log(screeny)
  const {containerName, viewCode} = screeny.screeny
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{containerName}</Card.Title>
            <Card.Text>
              Screeny Code: {viewCode}
            </Card.Text>
            <Button variant="warning">Modify</Button>
            <Button variant="danger">Delete</Button>
        </Card.Body>
    </Card>
  )
}

export default SingleScreenyContainer
