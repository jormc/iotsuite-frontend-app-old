import { Widget } from '../../business-layer/entities/widget';
import { WidgetType } from '../../business-layer/entities/widget-type';

export interface IWidgetService {

    findAll(persistenceDependency: any): Promise<Array<Widget>>;

    findById(id: string, persistenceDependency: any): Promise<Widget>;

    findByType(type: WidgetType, persistenceDependency: any): Promise<Array<Widget>>;

    save(widget: Widget, persistenceDependency: any);

    delete(id: string, persistenceDependency: any);

}
