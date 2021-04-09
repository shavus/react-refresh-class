import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    authenticate: () => {},
});

export default authContext;