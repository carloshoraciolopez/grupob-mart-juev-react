import React, { useEffect } from 'react'
import { findResources } from './infrastructure/services/resources-service';
import { useDispatch } from 'react-redux';
import FindAll from './application/findAll';
import AxiosResourceRepository from './infrastructure/axios-resource-repository';
import { createResource } from '../redux/slices/resource';

const ResourcePage = () => {
    const dispatcher = useDispatch();

    //cargar los resource en el store!!!
    // una sola vez    
    const useCase = new FindAll(
        new AxiosResourceRepository('https://reqres.in/api')
    );
    useCase.exec({}).then(data => {
        dispatcher(createResource({resources: data}));
        //api  externo > cargar mi store con los datos
    });

    return (
        <div>
            Resources
        </div>
    )
}

export default ResourcePage