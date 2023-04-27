import AxiosResourceRepository from "../infrastructure/axios-resource-repository"
import Resource from './resource-entity';

export default class EntityFactory {
    /**
     * 
     * @param {} externalResource 
     * @returns List of Resource
     */
    static resourceEntity = (externalResource) => {
        return new Resource(
            externalResource.id,
            externalResource.name
        );
    }
    static listResourceEntity = (externalResources) => {
        const array = externalResources.data;
        return array.map(data => new Resource(
                data.id,
                data.name
            )
        )
    }
}