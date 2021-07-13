import React from "react";
import axios from "axios";

function SavedCritter(props){
    return (
        <div className="savedContainer">
            <h1>{props.critter.name}</h1>
            <button className="deleteButton" onClick = {() => {
                    let critterID = props.critter._id;
                    axios.delete(`/delete/${critterID}`);
            }}>Delete</button>
        </div>
    )
} export default SavedCritter;
