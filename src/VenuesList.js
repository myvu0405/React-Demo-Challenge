import React from 'react'
import Venue from './Venue';

function VenuesList(props) {

    const {venues} = props;
    const venuesNum= venues.length;

    return (
        <div>
            <h3>Available location(s): {venuesNum}</h3>
            {venuesNum>0 && venues.map((venue, index) => {
                return (
                    <Venue key={index} index={index} venue = {venue}/>
                    // <div key={index}>
                    //     <h4>Name: {venue.name}</h4>
                    //     <p>Address: {venue.location.formatted_address}</p>
                    //     <p>Region: {venue.location.region}</p>
                    // </div>
                )
            })}
        </div>
    )
}

export default VenuesList