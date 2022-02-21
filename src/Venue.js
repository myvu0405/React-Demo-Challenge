import React from 'react'

function Venue(props) {
    const {venue,index} = props;

    return (
        <div>
            <h4>{index+1}. Name: {venue.name}</h4>
            <p>Address: {venue.location.formatted_address}</p>
            <p>Region: {venue.location.region}</p>
        </div>
    )
}

export default Venue