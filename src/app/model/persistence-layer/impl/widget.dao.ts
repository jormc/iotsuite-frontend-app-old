import { IWidgetDao } from '../api/widget.dao';
import { Widget } from '../../business-layer/entities/widget';


export class WidgetDao implements IWidgetDao {

    findAll(persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

}
