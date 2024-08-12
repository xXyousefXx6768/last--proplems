import React from 'react';

// في React، props هي اختصار لكلمة "Properties". props تُستخدم لتمرير البيانات من مكون أبوي إلى مكونات فرعية. هي غير قابلة للتغيير من قبل المكون الذي يستلمها، وبالتالي فهي تُستخدم لنقل المعلومات التي تحتاجها المكونات الفرعية.

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
