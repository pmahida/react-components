import _ from 'lodash';
import React, {Component, PropTypes} from 'react';

export default class DataList extends Component {
	constructor(props, context) {
		super(props,context);

		this.state = {
			dataItems:this.props.dataItems
		}

		this.filterDataItems = this.filterDataItems.bind(this);
		this.defaultFilterFunction = this.defaultFilterFunction.bind(this);
	}

	componentWillMount() {
		if(this.props.isDynamic) {
			this.props.fetchDataItems();
		}
	}

	componentWillReceiveProps(nextProps) {
		var {isDynamic, dataItems,searchString} = nextProps;
		this.setState({isDynamic,dataItems,searchString});	
		
		if(searchString != "") {
			this.filterDataItems(dataItems);
		}		
		
	}

	filterDataItems(dataItems) {
		var filteredData = [];
		if(dataItems != undefined && dataItems.length > 0) {
			if( this.props.filterFunction) {
				filteredData = dataItems.filter(this.props.filterFunction)
			}else {
				filteredData = dataItems.filter(this.defaultFilterFunction);
			}
		}
	
		this.setState({dataItems:filteredData});

	}

	defaultFilterFunction(item) {
		console.log("item " + JSON.stringify(item));
		if(item != undefined && item.hasOwnProperty(this.props.labelField)) {
			if(String(item[this.props.labelField]).indexOf(this.state.searchString) >= 0) {
				return item;
			}	
		}
	}

	renderDataItem(item) {
	    return (
	      <li className="list-group-item">
	        {item[this.props.labelField]}
	      </li>
	    );
	  }

	  renderList() {
	    return _.map(this.props.dataItems, this.renderDataItem.bind(this));
	  }

	render() {
		return (
	      <ul className="list-group">
	        {this.renderList()}
	      </ul>
	    );
	}
}