import axios from "axios"
import { ResourceRepository } from "../domain/resource-repository";
// import { fromResourceApiToResourceDomain } from "./adapters/adapter-factory";

//import { fromResourceApiToResourceDomain } from "../adapters/resource-adepter";
export default class AxiosResourceRepository extends ResourceRepository {
    constructor({basePath,adapter, dataSource}) {
        super();
        this.basePath = basePath;
        this.adapter = adapter;
        this.dataSource = dataSource;
    }

    /*
     Get all resources as list []
     */
    findAll = async () => {
        const response = await axios.get(`${this.basePath}/unknown`);
        
        //return fromResourceApiToResourceDomain(response.data);
        return this.adapter(response.data)
    }

    update(id, resource) {

        const idx = this.dataSource.findIndex(d => d.id === id);

        this.dataSource[idx] = resource;

        return this.dataSource;
    }

    delete(id) {

        const filtered = this.dataSource.filter(d => d.id !== id);

        this.dataSource = [...filtered];

        return this.dataSource;
    }
}