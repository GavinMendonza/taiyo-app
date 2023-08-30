import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
