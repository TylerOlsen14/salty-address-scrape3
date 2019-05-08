import React from 'react';
import array from '../address.json'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import style from '../App.css'

function AddressCard() {
  return (
    <div className="App">
      {array.map( scrape => (
        <Card width="250px">
          <CardBody>
            <CardTitle><h4>{scrape.name}</h4></CardTitle>
            <CardSubtitle><h5>{scrape.url}</h5></CardSubtitle>
            <CardText>{scrape.address}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
export default AddressCard;