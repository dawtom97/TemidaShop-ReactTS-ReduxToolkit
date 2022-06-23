import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    modalMsg: '',
    isDanger: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state,action) => {
            state.modalMsg = action.payload
            state.isOpen = true;
        },
        hideModal:(state) => {
            state.isOpen = false;
        },
    },
});

export const {showModal,hideModal} = modalSlice.actions;
export default modalSlice.reducer;