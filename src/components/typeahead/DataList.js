import _ from 'lodash';
import React, {Component, PropTypes} from 'react';

export default class DataList extends Component {
	constructor(props, context) {
		super(props,context);

		this.state = {
			dataItems:this.props.dataItems;
		}
	}

	componentWillMount() {
		if(this.props.isDynamic) {
			this.props.fetchDataItems();
		}
	}

	componentWillReceiveProps(nextProps) {
		var {isDynamic, dataItems} = nextProps;
		this.setState({{isDynamic:isDynamic},{dataItems:dataItems}});		
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