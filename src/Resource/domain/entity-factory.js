import AxiosResourceRepository from "../infrastructure/axios-resource-repository"
import Resource from './resource-entity';

export default class EntityFactory {
    
    static resourceEntity = (externalResource) => {
        return new Resource(
            externalResource.id,
            externalResource.name
        );
    }
}