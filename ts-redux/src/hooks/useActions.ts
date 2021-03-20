import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

export const useActions = () => {
    const dispatch = useDispatch();

    bindActionCreators(actionCreators, dispatch);
    // response is similar to: { searchRepositories: dipatch(searchRepositories)}
};