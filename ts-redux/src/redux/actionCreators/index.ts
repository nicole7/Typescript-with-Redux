import axios from 'axios';
import { ActionType } from './../actionTypes/index';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
    //manually dispatch actions
    return async (dispatch: Dispatch<Action>) => {
        //dispatch an action of the right type
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const { data } = await axios.get('http://registry/npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });
            
            const names = data.objects.map((result: any) => {
                return result.package.name;
            })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            })
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    };
};