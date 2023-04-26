import AxiosResourceRepository from "./axios-resource-repository"

export default class RepositoryFactory {
    static axiosResourceRepository = (config) => {
        return new AxiosResourceRepository(config);
    }
}