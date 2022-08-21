import React from 'react';

const Hello: React.FC<{ name: String }> = ({name}) => {
    if (!name) {
      name = 'Mundo';
    }
    return (<h1>¡¡Hola {name}!!</h1>)
}

export default Hello;