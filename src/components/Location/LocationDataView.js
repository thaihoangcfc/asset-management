import React, { useRef } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";


const apiUrl = process.env.REACT_APP_NETCORE_API_URL;

class LocationDataView extends React.Component {
    state = {
        locations: []
    };

    componentDidMount() {
        this.fetchLocation();
    }

    fetchLocation = () => {
        axios.get(apiUrl + '/locations').then(res => {
            this.setState({ locations: res.data });
        })
    }

    render() {
        return (
            <div>
                <Button type="button" variant="primary" onClick={this.fetchLocation}>
                    <FontAwesomeIcon icon={faSyncAlt} /> Refresh
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.locations.map(location => (
                            <tr key={location.id}>
                                <td>Room {location.room}, Level {location.level}, {location.address}</td>
                                <td>{location.city}</td>
                                <td>{location.state}</td>
                                <td>{location.country}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default LocationDataView;