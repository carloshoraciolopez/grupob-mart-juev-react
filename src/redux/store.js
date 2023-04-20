import {configureStore} from '@reduxjs/toolkit';
import { mensajeSlice } from './slices/mensaje';
import { resourceSlice } from './slices/resource';

export default configureStore({
    reducer: {
        mensaje: mensajeSlice.reducer,
        resource: resourceSlice.reducer
    }
});