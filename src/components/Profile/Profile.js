import React from "react";
import Controls from '../components/controls.Controls'



export default function Profile() {
    return (
        <div>Profile goes here
            <Controls.Button 
                text="Submit"
                color="secondary"
                onClick="handleOnClick"/>
        </div>
    )
}