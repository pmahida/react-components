import React, {Component, PropType} from 'react';
import DataList from './DataList';

const dataItems = [{label:'First',data:1},
					{label:'Second',data:2},
					{label:'Third',data:3},
					{label:'Fourth',data:4},
					{label:'Fifth',data:5},
					{label:'Sixth',data:6},
					{label:'Seventh',data:7},
					{label:'Eighth',data:8},
					{label:'Nine',data:9},
					{label:'Tenth',data:10}
				]

export default class Typeahead extends Component {

	constructor(props,context) {
		super(props,context);

		this.state = {
			searchString : "",
			dataItems:dataItems
		}

		this.filterDataItems = this.filterDataItems.bind(this);
		this.defaultFilterFunction = this.defaultFilterFunction.bind(this);

	}

	handleChange(event) {
		var searchString = event.target.value;
		if(searchString != undefined && searchString != "") {
			this.filterDataItems();
		}		
		this.setState({searchString: searchString})
	}

	filterDataItems() {
		var filteredData = [];
		if(this.state.dataItems != undefined && this.state.dataItems.length > 0) {
			if( this.props.filterFunction) {
				filteredData = this.state.dataItems.filter(this.props.filterFunction)
			}else {
				filteredData = this.state.dataItems.filter(this.defaultFilterFunction);
			}
		}
	
		this.setState({dataItems:filteredData});

	}

	defaultFilterFunction(item) {
		if(item != undefined && item.hasOwnProperty("label")) {
			var searchString = this.refs.textInput.value; 
			if(String(item["label"]).indexOf(searchString) >= 0) {
				return item;
			}	
		}
	}

	render() {
		return (
			<div>
				<input ref="textInput" type="text" className="form-control" onChange={this.handleChange.bind(this)} />
				<DataList dataItems={this.state.dataItems} labelField="label" searchString={this.state.searchString} />
			</div>
		);
	}
}