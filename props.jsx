import React from 'react';


function ChildComponent(props) {
    return <p>{props.text}</p>;
}
 
function ParentComponent() {
    const message = "its parent";

    return (
        <div>
            <h1> parent</h1>
            <ChildComponent text={message} />
        </div>
    );
}

export default ParentComponent;
