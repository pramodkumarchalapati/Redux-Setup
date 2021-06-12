import { connect } from 'react-redux';
import OnBoarding from './pure';
import { validateUser } from '../../redux/actions/OnBoardingAction';

export const mapStateToProps = (state) => ({
    userInfo : state
});

export const mapDispatchToProps = (dispatch) => ({
    validateUser: () => dispatch(validateUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(OnBoarding);