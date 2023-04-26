export default class DeleteResource {
    constructor(repository){
        this.repository = repository;
    }

    exec(cmd) {
        return this.repository.delete(cmd.id);
    }
}