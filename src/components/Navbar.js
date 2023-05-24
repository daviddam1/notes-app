import React from "react";

export default function Navbar({handleToggleDarkMode}){
    return(
        <div className="navbar">
            <div className="app-title">Notes</div>
            <div className="toggle-mode">
                <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
            </div>
        </div>
    )
}