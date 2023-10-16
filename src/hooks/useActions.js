import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorite.slice";
import * as userActions from '../store/user/user.actions';
const rootReducers = {
  ...actions,
  ...userActions
};


export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(rootReducers, dispatch);
  }, [dispatch]);
};
