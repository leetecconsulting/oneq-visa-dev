// function Btn(){

//     const clickHandler = () => console.log('clicked');

//     return(
//         <button onClick={clickHandler}>
//                 Click me
//         </button>
//     );
// }

// export default Btn;
import React, { useState, useEffect } from 'react';

function Btn(props){

    const clickHandler = () => console.log('Mouse over');
    const [obj, setObj] = useState(props.obj)

    const handleClick = () =>{
        const newObj = {...obj, name: 'carol', age: obj.age + 1};
        setObj(newObj);
        props.updateObj(newObj);
    }

    return(
        <button onClick={handleClick}>
                Click me
        </button>
    );
}

export default Btn;

