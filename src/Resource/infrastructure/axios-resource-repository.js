import axios from "axios"
import { ResourceReposiroty } from "../domain/resource-repository";
import { fromResourceApiToResourceDomain } from "./adapters/resource-adepter";

//import { fromResourceApiToResourceDomain } from "../adapters/resource-adepter";
export default class AxiosResourceRepository extends ResourceReposiroty {
    constructor(basePath) {
        super();
        this.basePath = basePath;//'https://reqres.in/api';
    }

    findAll = async () => {
        const response = await axios.get(`${this.basePath}/unknown`);
        return fromResourceApiToResourceDomain(response.data);
    }
}