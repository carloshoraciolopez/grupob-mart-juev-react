export default class FindAll {
    constructor(resourceReposiroty) {
        this.repository = resourceReposiroty;
    }

    async exec(cmd) {
        return await this.repository.findAll();
    }
}