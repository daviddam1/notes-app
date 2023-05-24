import React from "react";  

export default function AddNote({handleAddNote}){

    const [noteText,setNoteText] = React.useState('')

    const characterLimit = 200

    function handleSaveClick(e){
        e.preventDefault()
        if(noteText!=='' &&noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')
        }
          
        else alert("You have to enter something!")
    }



    return(
        <div className="note new">
          <textarea
                className="text-area"
                rows="8" 
                cols="10" 
                placeholder="Type to add note.."   
                value ={noteText}
                onChange = {(e) =>{
                    if(characterLimit-e.target.value.length >=0){
                        setNoteText(e.target.value)
                    }
                }}
                >
            </textarea>
            <div className="footer-new">
                <small>{characterLimit- noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>        
        </div>
    )
}

