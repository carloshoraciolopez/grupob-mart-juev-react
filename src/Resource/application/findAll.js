export default class FindAllResources {
    constructor(resourceReposiroty) {
        this.repository = resourceReposiroty;
    }

    async exec() {
        return await this.repository.findAll();
    }
}