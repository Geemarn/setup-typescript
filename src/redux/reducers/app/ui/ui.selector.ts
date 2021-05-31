/**
 selectors are for redux optimisation to avoid unnecessary re renders,
 state will only re render component if it values changes or a dispatch relating to
 it own state is called.
 **/
import { createSelector } from "reselect/lib";
import { ReducerState } from "../../types";

//retrieve ui from state
const selectUi = (state: ReducerState) => state.ui;

export const selectLayoutSetup = createSelector([selectUi], (trips) => ({
  darkTheme: trips.switchTheme,
}));
