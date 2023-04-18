import {configureStore} from '@reduxjs/toolkit';
import { mensajeSlice } from './slices/mensaje';

export default configureStore({
    reducer: {
        mensaje: mensajeSlice.reducer,
    }
});