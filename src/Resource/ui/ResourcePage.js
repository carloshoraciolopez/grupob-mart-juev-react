import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createResource, resetResource } from '../../redux/slices/resource';
import UseCaseFactory from './../application/uses-case-factory';
import ResourceList from './ResourceList';
import thisStyle from './Resource.module.css';

const useCase = UseCaseFactory.finAllResources(process.env);

const ResourcePage = () => {

    const dispatcher = useDispatch();

    useEffect(()=> {
        useCase.exec().then(data => {
            //api  externo > cargar mi store con los datos
            dispatcher(createResource({resources: JSON.parse(JSON.stringify(data))}));
        });
    },[dispatcher]) // o es-lint


    const resetResources = () => {
        dispatcher(resetResource());
    }

    const reloadResources = async () => {
        useCase.exec().then(data => {
            //api  externo > cargar mi store con los datos
            dispatcher(createResource({resources: JSON.parse(JSON.stringify(data))}));
        });
    }

    return (
        <>
            <div className={thisStyle.resourceContainer}>
                <h1>Resources</h1>
                <ResourceList/>            
                <button onClick={resetResources}>
                    Reset State
                </button>
                <button onClick={reloadResources}>
                    ReLoad State
                </button>
            </div>
        </>
    )
}

export default ResourcePage;