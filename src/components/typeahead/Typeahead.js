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
			searchString : ""
		}
	}

	handleChange(event) {
		console.log( " input value = " + event.target.value);
		this.setState({searchString:event.target.value});
	}

	render(
		return (
			<div>
				<input type="text" className="form-control" onChange={this.handleChange.bind(this)} />
				<DataList dataItems={dataItems} labelField="label" />
			</div>
		);
	)
}