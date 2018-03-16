import { Widget } from '../../business-layer/entities/widget';

export interface IWidgetDao {

    findAll(persistenceDependency: any): Promise<Array<Widget>>;

}
