import { ModelUtils } from '../../utils/model-utils';

export class EntityBase {

    public id: string;

    constructor(id: string) {
        this.id = ModelUtils.newGuid();
    }

}
