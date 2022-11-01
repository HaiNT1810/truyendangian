import * as requestFromServer from './Crud';
import { globalSlice, callTypes } from './Slice';
import store from '../store';
import { createNextState } from '@reduxjs/toolkit';

const { actions } = globalSlice;

export const setLoadIntro = (isLoadedIntro) => (dispatch) => {
    return dispatch(actions.setLoadIntro(isLoadedIntro));
};