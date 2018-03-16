import { IWidgetDao } from './api/widget.dao';

export interface PersistenceManager {

    getWidgetDao(): IWidgetDao;

}
