import { connect } from 'react-redux';
import Page from '../components/page';

const mapStateToProps = (state) => ({
  posts: state.page.posts,
  fetchingPage: state.page.fetchingPage,
});

const CurrentPage = connect(mapStateToProps)(Page);

export default CurrentPage;
