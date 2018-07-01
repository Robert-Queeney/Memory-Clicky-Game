import React from "react";
import "./header.css";

const Header = props => (
        <div className="page-header">
                <h1>Bootcamp memory game</h1>
                    <p>Click on the coding icons to earn points!</p>
                    <p>If you click on the same icon twice the game will reset</p>
                    <p>Score: {props.score} High Score: {props.highscore}</p>
        </div> 
    
)

export default Header;