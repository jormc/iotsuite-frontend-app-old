import { IWidgetDao } from '../../../api/widget.dao';
import { Widget } from '../../../../business-layer/entities/widget';


export class WidgetDaoLocalStorage implements IWidgetDao {

    findAll(persistenceDependency: any): Promise<Widget[]> {
        return new Promise<Array<Widget>>((resolve, reject) => {
            resolve(JSON.parse(persistenceDependency.getItem('widgets')));
        });
    }

}
