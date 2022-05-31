import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

/*
const routing = (
    <Router>
	<React.StrictMode>
	    
	    <Routes>
		<Route exact path="/" component={<App />} />
	    </Routes>
	    
	</React.StrictMode>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
	<Router>
	    <Header />
	    <App />
	    <Footer />
	</Router>
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// seviceWorker.unregister();
