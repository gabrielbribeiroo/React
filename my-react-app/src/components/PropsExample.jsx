import React from 'react';

const PropsExample = ({name, age}) => {
    return (
        <div>
            <h3>Hello {name}</h3>
            <p>I have {age} years old.</p>
        </div>
    );
};

export default PropsExample;    