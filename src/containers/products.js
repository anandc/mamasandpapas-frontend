import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions/productActions';

class Products extends Component {
    componentDidMount() {
        const { dispatch, searchString, selectedColor } = this.props,
          action = searchAction({
            searchString,
            selectedColor
        });
        dispatch(action);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps.searchString !== this.props.searchString ||
            nextProps.selectedColor !== this.props.selectedColor);
    }

    render() {
        const { dispatch, products } = this.props,
            imgBasePath = '//prod4.mnpcdn.ae/small_light(p=listing2x,of=webp)/pub/media/catalog/product';
        return (
            <div className="flex-container">
                {products.map((item, i) => (
                        <div key={i} className="product-list-item">
                            <figure>
                                <img src={imgBasePath + item.image} />
                            </figure>
                            <div>{item.name}</div>
                            <div>{item.price} AED</div>
                        </div>
                    )
                )}
                { products.length === 0 && 
                    <div>No items found...</div>
                }
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    searchString: PropTypes.string,
    selectedColor: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { products, searchString, selectedColor } = state;
    return {
        products,
        searchString,
        selectedColor
    };
}

export default connect(mapStateToProps)(Products)
