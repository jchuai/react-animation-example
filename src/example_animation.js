/**
 * Created by clicker on 14/10/2016.
 */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import './example_animation.css';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['start']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        var newItems = this.state.items.concat([
            Date.now()
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        return (
					<div>
            <button onClick={this.handleAdd}>Add Item</button>
						<ReactCSSTransitionGroup
							transitionName="example"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
							{this.state.items.map((item, i) => {
								return (
									<li key={item}>
										<a href="#" onClick={(e) => this.handleRemove(i)}>{item}</a>
									</li>);
							})}
						</ReactCSSTransitionGroup>
					</div>
    );
    }
}
