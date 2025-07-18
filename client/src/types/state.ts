import { store } from "../store/index";
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;