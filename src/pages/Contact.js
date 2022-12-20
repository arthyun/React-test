import React from 'react';

const BusinessName = (props) => {
    return (
        <h2>{props.brand}</h2>
    );
}

function Contact() {
    return (
    <>
        <BusinessName brand="Contact 페이지!" />

        <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </>
    );
}

export default Contact;