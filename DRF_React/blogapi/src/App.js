import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Posts from './components/Posts'
import PostLoadingComponent from './components/PostLoading'


import Footer from './components/Footer'


function App () {
    const [appState, setAppState] = useState({
	loading:false,
	posts:null,
    });
    const PostLoading = PostLoadingComponent(Posts);
    
    useEffect(() => {
	setAppState({loading:true})
	const apiUrl = `http://localhost:8000/api/`;
	fetch(apiUrl).then((data) => data.json()).then((posts) => {
	    setAppState({loading:false, posts:posts});
	});
    },[setAppState]);
    
    return(
	<div className="App">
	    <h1>Latest Posts</h1>
	    <PostLoading isLoading={appState.loading} posts={appState.posts} />
	</div>
	  )
   
}

export default App;

/* class connectionExample extends React.Component {
    componentDidMount() {
    const apiUrl = "http://localhost:8000/api/"
    fetch(apiUrl).then((response) => response.json()).then((data) => alert(data))
    }
    render() {
	return <div id="write">Example Connection</div>;
    }
}

export default connectionExample;
*/
