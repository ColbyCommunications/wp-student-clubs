import { connect } from 'react-redux';
import CategoryPane from '../components/category-pane';
import { fetchCategories } from '../actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetchCategories),
});

const ReceivedCategories = connect(mapStateToProps, mapDispatchToProps)(
  CategoryPane
);

export default ReceivedCategories;
