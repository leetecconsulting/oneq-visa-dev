import React, { useEffect } from "react";

function Textbox(props){ 

    useEffect(() => {
        console.log('executed');
    })

    return (
        <>
            <input type='text' className='form-control' name='fullName' placeholder='Full Name'
                onChange={update} />
        </>
    );
}

export default Textbox;
    

