import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        email: 'Email',
        phone_number: 'Phone Number',
        address: 'Address'
    },
    reducers: {
        //action is submitted elsewhere to state.com
        chooseName: (state, action) => { state.name = action.payload }, //all we are doing is setting the action to a state.name
        chooseEmail: (state, action) => { state.email = action.payload },
        choosePhoneNumber: (state, action) => { state.phone_number = action.payload },
        chooseAddress: (state, action) => {state.address = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhoneNumber, chooseAddress } = rootSlice.actions;