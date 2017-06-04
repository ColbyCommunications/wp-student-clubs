import { connect } from 'react-redux';
import App from '../components/colby-student-clubs';
import { fetchPage } from '../actions';

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  goBack: (id) => dispatch(fetchPage(id)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
