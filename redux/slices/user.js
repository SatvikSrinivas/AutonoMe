import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    user: null,
    userLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payLoad
        },
        setUserLoading: (state, action) => {
            state.userLoading = action.payLoad
        }
    },
})

export const { setUser, setUserLoading } = userSlice.actions

export default userSlice.reducer
