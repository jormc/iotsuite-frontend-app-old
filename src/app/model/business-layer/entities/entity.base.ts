export class EntityBase {

    public id: string;
    
    constructor(id: string) {
        this.id = ModelUtils.newGuid();
    }
    
}