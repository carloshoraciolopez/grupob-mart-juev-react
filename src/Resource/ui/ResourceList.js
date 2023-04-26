import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createResource, updateResource } from '../../redux/slices/resource';
import UseCaseFactory from './../application/uses-case-factory';

const useCase = UseCaseFactory.finAllResources(process.env);

const ResourceList = () => {
    const resourceState = useSelector(store => store.resource);
    
    const dispatcher = useDispatch();
    
    useEffect(()=> {
        useCase.exec().then(data => {
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
    
    const deleteOneResource = async (resource) => {
        const deleteUseCase = UseCaseFactory.deleteResourceUseCase({env: process.env, dataSource: [...resourceState.resources]});
        const resources = deleteUseCase.exec({id:resource.id});
        dispatcher(updateResource({resources: resources}));
    }
    
    const OneReource = ({resource}) => {
        return <tr>
            <td>
                {resource.id}
            </td>
            <td>
                {resource.descripcion}
            </td>
            <td>
                <button onClick={() => updateOneResource(resource)}>
                    Update Descripcion
                </button>
                <button onClick={() => deleteOneResource(resource)}>
                    Delete it
                </button>
            </td>
        </tr>
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DESCRIPCIÓN</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resourceState?.resources?.map(x=> <OneReource key={x.id} resource={x} />)
                    }
                </tbody>
            </table>
        </>
    )
}

export default ResourceList