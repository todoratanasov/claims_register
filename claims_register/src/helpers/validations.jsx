import React from 'react';



export const camelCased=(myString)=>myString.replace(/-([a-z])/g, (g)=>{return g[1].toUpperCase()});

