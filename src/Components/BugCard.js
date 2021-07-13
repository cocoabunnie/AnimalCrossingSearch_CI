import React, { Component } from "react"
import ReactDOM from 'react-dom';

function BugCard(props){
    const resultPresent = props.resultPresent

    if (resultPresent === true){ //search produces a result!
        return (
            <div className="bugInfoCard">

                <div className="bugCardImage">
                    <img src={props.imageURL}/>
                </div>
                
                <div className="bugCardInfo">
                    <h1>{props.name}</h1>
                    <p>Rarity: {props.rarity}</p>
                    <p>Selling Price: {props.price} Bells</p>
                    <p>Description According To Blathers: {props.description}</p>
                    <button className="saveButton" onClick={props.saveDataFunction}>Save Search</button>
                </div>
                
            </div>
        )
    } else if (resultPresent === false){ //search produces no result
        return (
            <div>
                <p>Oop... guess we couldn't find anything for this search</p>
                <img src="https://media.giphy.com/media/dnRljdZNQ2HkTl75sk/giphy.gif"/>
            </div>
        )
    } else if (resultPresent === null){ //user hasn't tried searching yet
        return <p>Search something and see what happens!</p>
    }
} export default BugCard;

/*
picture
name
availability -> rarity
price (selling price)
museum-phrase
*/