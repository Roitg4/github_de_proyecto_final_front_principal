import React from 'react';
import "../whatsapp/whatsapp.css";

export default function Whatsapp() {

    return (<>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <a href="https://api.whatsapp.com/send?phone=12345678&text=Bienvenidos al WhatsApp del complejo vacacional El Algarrobo." className="float" target="_blank" rel="noreferrer">
            <button className="fa fa-whatsapp my-float"></button>
        </a>

    </>);
}