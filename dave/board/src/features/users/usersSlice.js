import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Doe" },
  { id: "1", name: "Jane Doe" },
  { id: "2", name: "John Smith" },
  { id: "3", name: "Jane Smith" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;