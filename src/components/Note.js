import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Note({id,text,date,handleDeleteNote}){
    return(
    <div className="note">
        <div className="type-text">
            <span className="text-area">
                {text}
            </span>
        </div>
    <div className="footer">
        <span className="date">{date}</span>
        <FontAwesomeIcon onClick={() => handleDeleteNote(id)} icon={faTrash}/>
    </div>
    </div>
    )
}