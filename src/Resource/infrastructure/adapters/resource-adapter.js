import Resource from "../../domain/resource-entity";

export default class ResourceAdapter {
    /*
    constructor(factory) {
        this.factory = factory;
    }

    fromApiToDomain = (externalResource) => {
        const array = externalResource.data;
        return array.map(data => this.factory(data));
    }
    */

    constructor() {

    }

    fromApiToDomain = (externalResource) => {
        const array = externalResource.data;
        return array.map(data => new Resource(
            data.id,
            data.name
        ));
    }
}