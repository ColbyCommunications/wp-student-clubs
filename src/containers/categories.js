import { connect } from 'react-redux';
import CategoryPane from '../components/category-pane';
import { fetchCategories } from '../actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const ReceivedCategories = connect(mapStateToProps)(CategoryPane);

export default ReceivedCategories;
