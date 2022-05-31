import React from 'react';


function PostLoading (Component) {
    return function PostLoadingComponent ({isLoading, ...props}) {
	if (!isLoading) return <Component {...props}/>;
	return (
	    <p style={{ fontSize:'15px' }}>Data Loading...</p>
	);	
    };
}

export default PostLoading;
