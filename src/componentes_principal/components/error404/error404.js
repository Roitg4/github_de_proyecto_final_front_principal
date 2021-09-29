import React from 'react';
import "twin.macro";
import "styled-components";

export default function error404() {

    //className="w-full h-full bg-no-repeat bg-cover"
    return (<>

        <div 
        style={{
            backgroundImage: 'url("https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_768/https://omegasoftve.com/wp-content/uploads/2020/05/error_404-e1590165350580-768x392.png")',
            height: "500px", backgroundRepeat: "no-repeat",  backgroundPosition: "center",
        }}>
        </div>

    </>);
}