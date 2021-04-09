import React from 'react';

//HOC that doesn't return a functional component.  These often makes sense to use more for components that add logic to a component.
const withClass = (WrappedComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClass;