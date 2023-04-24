import { createSlice, current } from "@reduxjs/toolkit";

const ResourceEmptyState = {
    resources: [],
}

export const resourceSlice = createSlice({
    name: 'resource',
    initialState: ResourceEmptyState,
    reducers: {
        createResource: (state, action) => {
            return {...ResourceEmptyState, ...action.payload}
        },
        addResource: (state,action) => {
            const currentState = current(state);
            currentState.resources.push(action.payload);//viene un solo dato 
            return {...state, currentState};
        },
        removeResource: (state, action) => {
            const currentState = current(state);//es una funcion
            const fitlered = currentState.resources.filter(r => r.id !== action.payload.id);
            currentState.resources = fitlered;
            return {...state,...currentState};
        },
        resetResource: () =>  {
            return ResourceEmptyState
        }
    }
});


export const {createResource,addResource,removeResource,resetResource } = resourceSlice.actions;
