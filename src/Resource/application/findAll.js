//application
export default class FindAllResources {
    constructor(resourceRepository) {
        this.repository = resourceRepository;
    }

    async exec() {
        return await this.repository.findAll();
    }
}