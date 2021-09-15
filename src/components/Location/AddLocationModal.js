import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import AddLocationForm from "./AddLocationForm";
import Button from 'react-bootstrap/Button';

class AddLocationModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <Modal size="xl" show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title>Add a new location</Modal.Title>
                    <Button className="btn-close" aria-label="Close" onClick={this.closeModal}></Button>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <AddLocationForm />
                        </Col>
                        <Col md={6}>
                            
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

export default AddLocationModel;