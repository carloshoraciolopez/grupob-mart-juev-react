import AdapterFactory from "../infrastructure/adapters/adapter-factory";
import RepositoryFactory from "../infrastructure/repository-factory";
import DeleteResource from "./delete";
import FindAllResources from "./findAll";
import UpdateResource from "./update";

export default class UseCaseFactory {
    
    static finAllResources = (config) => {
        return new FindAllResources (
            RepositoryFactory.axiosResourceRepository(
                {
                    basePath: config['REACT_APP_REQ_API'],
                    adapter:  AdapterFactory.toListOfEntity,
                }
            )
        );
    }

    static updateResourceUseCase = (config) => {
        return new UpdateResource (
            RepositoryFactory.axiosResourceRepository(
                {
                    basePath: config.env['REACT_APP_REQ_API'],
                    adapter:  AdapterFactory.toListOfEntity,
                    dataSource: config.dataSource
                }
            )
        );
    }   

    static deleteResourceUseCase = (config) => {
        return new DeleteResource (
            RepositoryFactory.axiosResourceRepository(
                {
                    basePath: config.env['REACT_APP_REQ_API'],
                    adapter:  AdapterFactory.toListOfEntity,
                    dataSource: config.dataSource
                }
            )
        );
    }   

}