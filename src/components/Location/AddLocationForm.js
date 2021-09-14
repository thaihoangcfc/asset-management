import React, { Component } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

class AddLocationForm extends React.Component {

    handleSubmit = (event) => {
        alert("A form was submitted.");
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>Room</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="1.1" />
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>Level</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Level 1" />
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>Address</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="1 Elizabeth Street" />
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>Address</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="1 Elizabeth Street" />
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>City</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Melbourne" />
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>State</FormLabel>
                    <Col sm={10}>
                        <FormControl as="select">
                            <option value="">
                                Choose...
                            </option>
                            {["Australian Capital Territory", "New South Wales", "Queensland", "Victoria"].map(state => (
                                <option key={state}>{state}</option>
                            ))}
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup as="{Row}" className="mb-3">
                    <FormLabel column sm={2}>State</FormLabel>
                    <Col sm={10}>
                        <FormControl as="select">
                            <option value="">
                                Choose...
                            </option>
                            {["Australian Capital Territory", "New South Wales", "Queensland", "Victoria"].map(state => (
                                <option key={state}>{state}</option>
                            ))}
                        </FormControl>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}