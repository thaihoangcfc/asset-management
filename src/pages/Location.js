import React, { useRef } from "react";

import AddLocationModal from '../components/Location/AddLocationModal';
import LocationDataView from '../components/Location/LocationDataView';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function App() {
    const addLocationModal = useRef();

    return (
        <div className="container">
            <Button variant="primary" onClick={() => addLocationModal.current.openModal()}>Add Location</Button>
            <AddLocationModal ref={addLocationModal}/>
            <LocationDataView />
        </div>
    )
}