export default class UpdateResource {
    constructor(repository){
        this.repository = repository;
    }

    exec(cmd) {
        return this.repository.update(cmd.id, cmd.resource);
    }
}