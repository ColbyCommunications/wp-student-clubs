import { connect } from 'react-redux';
import CategoryButton from '../components/category-button';
import { fetchPage } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: state.categories.activeCategory === ownProps.id,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(fetchPage(id)),
});

const Category = connect(mapStateToProps, mapDispatchToProps)(CategoryButton);

export default Category;
