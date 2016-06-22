import React from 'react';
import '../css/Real-time-search.css';
let SearchExample = React.createClass({
  getInitialState() {
  	return { searchString: '' }
  },

  handleChange (e) {
  	this.setState({searchString:e.target.value})
  },
  render() {
	   var libraries = [
		    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
		    { name: 'AngularJS', url: 'https://angularjs.org/'},
		    { name: 'jQuery', url: 'http://jquery.com/'},
		    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
		    { name: 'React', url: 'http://facebook.github.io/react/'},
		    { name: 'Ember', url: 'http://emberjs.com/'},
		    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
		    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
		    { name: 'Mootools', url: 'http://mootools.net/'},
		    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
		    { name: 'Lodash', url: 'http://lodash.com/'},
		    { name: 'Moment', url: 'http://momentjs.com/'},
		    { name: 'Express', url: 'http://expressjs.com/'},
		    { name: 'Koa', url: 'http://koajs.com/'}
	   ];
	    var searchString = this.state.searchString.trim().toLowerCase();
	    if(searchString.length > 0){
	        libraries = libraries.filter(function(l){
	            return l.name.toLowerCase().match( searchString );
	        });
	    }
	    return (
			<div className="real-time-search">
	            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
	            <ul> 
	                { 
	                	libraries.map(function(l,index){
	                    	return <li key={index}>{l.name} <a href={l.url}>{l.url}</a></li>
	                	}) 
	            	}
	            </ul>

	        </div>
	    );
	  
	}
});

export default SearchExample;

	                                                                                                                                                             