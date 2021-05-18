import { UIStateType } from './app/ui/types';
import { AppStateType } from './app/app-set-up/types';

type UIAppState = {
  ui: UIStateType;
};

type AppState = {
  app: AppStateType;
};

type ReducerState = UIAppState & AppState;


export { ReducerState };