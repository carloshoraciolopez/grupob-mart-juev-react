import React, { useEffect } from 'react'
// import { findResources } from './infrastructure/services/resources-service';
import { useDispatch, useSelector } from 'react-redux';
import FindAll from '../application/findAll';
import AxiosResourceRepository from '../infrastructure/axios-resource-repository';
import { createResource } from '../../redux/slices/resource';

//creacion de repositorio 
//creacion de caso de uso
const useCase = new FindAll(
    new AxiosResourceRepository(process.env.REACT_APP_REQ_API)
);

const ResourcePage = () => {
    const resourceState = useSelector(
        store => store.resource
    )

    const dispatcher = useDispatch();

    useEffect(()=> {
        useCase.exec({}).then(data => {
            dispatcher(createResource({resources: data}));
            //api  externo > cargar mi store con los datos
        });
    },[])

    return (
        <div>
            Resources
            {resourceState?.resources?.map(x=><p key={x.id}>{JSON.stringify(x)}</p>)}
        </div>
    )
}

export default ResourcePage