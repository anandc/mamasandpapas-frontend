import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorAction, searchCriteriaChangeAction } from '../actions/productActions';
import { InputGroup, InputGroupAddon, Input, Container,
 Row, Col, Card, CardImg,
 ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.selectColorHandler = this.selectColorHandler.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.state = {
		  dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
		  dropdownOpen: !this.state.dropdownOpen
		});
	}

	onBlur(e) {
		e.preventDefault();
		const searchString = e.target.value,
			{ dispatch, selectedColor } = this.props,
			action = searchCriteriaChangeAction({selectedColor, searchString});
		dispatch(action);
	}

	selectColorHandler(e) {
		const selectedColor = e.target.getAttribute('data-item'),
			{ dispatch, searchString } = this.props,
			action = searchCriteriaChangeAction({selectedColor, searchString});
		dispatch(action);
	}

	componentDidMount() {
        const { dispatch } = this.props,
          action = colorAction();
        dispatch(action);
    }
    render() {
        const { selectedColor, colors } = this.props;
        return (
            <div>
            	<Container className='banner'>
            		<Row>
          				<Col>
          					<Card className='brand-logo'>
          						<CardImg top width="160px" src="//localhost:4000/img/logo_en_ae.png" />
          					</Card>
          				</Col>
        			</Row>
	        		<Row>
	          			<Col
	          			 sm={{ size: 6, push: 2, pull: 2, offset: 1 }}
	          			 md={{ size: 8, offset: 0 }}>
	          			 	<div className="search-cntnr">
		          				<InputGroup>
			        				<Input onBlur={this.onBlur}/>
			        				<InputGroupAddon >Search</InputGroupAddon>
			      				</InputGroup>
			      				<ButtonDropdown
			      				  isOpen={this.state.dropdownOpen}
			      				  toggle={this.toggle}
			      				  >
							        <DropdownToggle caret>
							        	{selectedColor}
							        </DropdownToggle>
							        <DropdownMenu
							         onClick={this.selectColorHandler}>
							        	{colors.map((item, i) => (
							        		<DropdownItem data-item={item} key={i}>{ item }</DropdownItem>
							        	))}
							        </DropdownMenu>
							    </ButtonDropdown>
						    </div>
	          			</Col>
	        		</Row>
		        </Container>
  			</div>
        );
    }
}
Header.propTypes = {
    colors: PropTypes.array.isRequired,
    searchString: PropTypes.string,
    selectedColor: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { colors, searchString, selectedColor } = state;
    return {
        colors,
        searchString,
        selectedColor
    };
}

export default connect(mapStateToProps)(Header)
