import React, { useEffect } from 'react'
import { findResources } from './services/resources-service';
import { useDispatch } from 'react-redux';
import { createResource } from '../../../redux/slices/resource';

const Resource = () => {
    const dispatcher = useDispatch();

    //cargar los resource en el store!!!
    // una sola vez    
    findResources().then(data => {
        dispatcher(createResource({resources: data}));
        //api  externo > cargar mi store con los datos
    });

    return (
        <div>
            Resources
        </div>
    )
}

export default Resource