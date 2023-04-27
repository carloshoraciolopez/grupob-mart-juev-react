/*
export const fromResourceApiToResourceDomain = (externalResource) => {
    const array = externalResource.data;
    return array.map(e => fromTo(e));
}

export const fromTo = (obj) => {
    return {
        id: obj.id,
        descripcion: obj.name
    }
}
*/

import EntityFactory from './../../domain/entity-factory';

export default class AdapterFactory {
    static toListOfEntity = (externalResources) => {
        return EntityFactory.listResourceEntity(externalResources)
    }
    /*
    static toListOfEntity = (externalResources) => {
        const array = externalResources.data;
        return array.map(data => 
            EntityFactory.resourceEntity(data)
        );
    } */   
}