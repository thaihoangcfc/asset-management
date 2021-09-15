import React, { Component } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const apiUrl = process.env.REACT_APP_NETCORE_API_URL;

class AddLocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room: '',
            level: '',
            address: '',
            city: '',
            state: '',
            country: ''
        }
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const location = {
            Room: this.state.room,
            Level: this.state.level,
            Address: this.state.address,
            City: this.state.city,
            State: this.state.state,
            Country: this.state.country
        }

        axios.post(apiUrl + '/locations', JSON.stringify(location), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res=>
            {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Room</Form.Label>
                    <Form.Control type="text" name="room" onChange={this.handleChange} placeholder="1.1" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Level</Form.Label>
                    <Form.Control type="text" name="level" onChange={this.handleChange} placeholder="Level 1" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" onChange={this.handleChange} placeholder="1 Elizabeth Street" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" onChange={this.handleChange} placeholder="Melbourne" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" name="state" onChange={this.handleChange}>
                        <option value="">
                            Choose...
                        </option>
                        {["Australian Capital Territory", "New South Wales", "Queensland", "Victoria"].map(state => (
                            <option key={state}>{state}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" name="country" onChange={this.handleChange}>
                        <option value="">
                            Choose...
                        </option>
                        {["Australia"].map(country => (
                            <option key={country}>{country}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        )
    }
}

export default AddLocationForm;