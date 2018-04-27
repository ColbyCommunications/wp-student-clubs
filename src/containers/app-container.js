import { connect } from 'react-redux';
import App from '../components/colby-student-clubs';

const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
