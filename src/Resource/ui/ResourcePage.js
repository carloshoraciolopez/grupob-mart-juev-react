import React, { useEffect } from 'react';
// import { findResources } from './infrastructure/services/resources-service';
import { useDispatch, useSelector } from 'react-redux';
import { createResource, resetResource, updateResource } from '../../redux/slices/resource';
import UseCaseFactory from './../application/uses-case-factory';

const useCase = UseCaseFactory.resourceFindAll(process.env);

const OneReource = ({resource, updateOneResource, deleteOneResource}) => {
    return  <div>
        <span key={resource.id}>{JSON.stringify(resource)}</span>
        <button onClick={() => updateOneResource(resource)}>
            Update descripcion
        </button>
        <button onClick={() => deleteOneResource(resource)}>
            Delet it
        </button>
    </div>
}
const ResourcePage = () => {
    const resourceState = useSelector(store => store.resource);

    const dispatcher = useDispatch();

    useEffect(()=> {
        console.log('cambió');

        useCase.exec().then(data => {
            //api  externo > cargar mi store con los datos
            dispatcher(createResource({resources: JSON.parse(JSON.stringify(data))}));
        });
    },[dispatcher])

    const updateOneResource = (resource) => {

        //update resource data
        resource = {...resource, descripcion:'new color'};

        //get use case
        const updateUseCase = UseCaseFactory.updateResourceUseCase({env: process.env, dataSource: [...resourceState.resources]});
        
        //invoke use case by passing params
        const resources = updateUseCase.exec({id:resource.id, resource: resource});

        //dispatch new ACTION over redux and update the state
        dispatcher(updateResource({resources:resources}));
    }

    const resetResources = () => {
        dispatcher(resetResource())
    }

    const reloadResources = async () => {
        useCase.exec().then(data => {
            //api  externo > cargar mi store con los datos
            dispatcher(createResource({resources: JSON.parse(JSON.stringify(data))}));
        });
    }
    
    const deleteOneResource = async (resource) => {

        const deleteUseCase = UseCaseFactory.deleteResourceUseCase({env: process.env, dataSource: [...resourceState.resources]});
        
        const resources = deleteUseCase.exec({id:resource.id});
        
        dispatcher(updateResource({resources: resources}));
    }

    return (
        <div>
            Resources
            {resourceState?.resources?.map(x=> <OneReource key={x.id} 
                resource={x} 
                updateOneResource={updateOneResource}
                deleteOneResource={deleteOneResource}/>)}
            <hr/>
            <button onClick={resetResources}>
                Reset State
            </button>
            <button onClick={reloadResources}>
                ReLoad State
            </button>
        </div>
    )
}

export default ResourcePage