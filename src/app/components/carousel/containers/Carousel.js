
import { connect } from 'react-redux';
import { getCarouselData } from '../selectors';
import Carousel from '../components/Carousel';
import { fetchTestState } from '../actions';

const mapStateToProps = (state) => ({
    carouselData: getCarouselData(state),
});

const mapDispatchToProps = {
    fetchTestState,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Carousel);