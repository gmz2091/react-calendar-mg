import React from 'react';

export const Main: React.FC<{ name: String }> = ({name}) => {
    if (!name) {
      name = 'Mundo';
    }
    return (<h1>¡¡Hola {name}!!</h1>)
}
