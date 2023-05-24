import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({handleSearchNote}){
    return(
        <div className="search-content">
            <div className="search-bar">
                <FontAwesomeIcon className="search-icon" icon={faSearch} size="lg"/>
                <input
                    onChange={(e) => handleSearchNote(e.target.value)}
                    placeholder="Search...">
                </input>
            </div>
            
        </div>
    )
}