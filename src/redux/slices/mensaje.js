import { createSlice} from '@reduxjs/toolkit';

const MensajeEmpty = {
    mensaje: ''
};

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: MensajeEmpty,
    reducers:{
        createMensaje: (state,action) => {
            return {
                mensaje: action.payload
            };
        },
        updateMensaje: (state,action) => {
            return {...state, ...action.payload}
        },
        resetMensaje: ()  => {
            return {...MensajeEmpty}
        }
    }
});

export const {createMensaje, updateMensaje, resetMensaje } = mensajeSlice.actions;