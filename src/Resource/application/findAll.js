export default class FindAll {
    constructor(resourceReposiroty) {
        this.repository = resourceReposiroty;
    }

    async exec(cmd) {
        console.log(cmd);
        return await this.repository.findAll();
    }
}