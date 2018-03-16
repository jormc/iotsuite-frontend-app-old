import { PersistenceManager } from '../../../persistence-manager';
import { IWidgetDao } from '../../../api/widget.dao';
import { WidgetDaoLocalStorage } from '../daos/widget.dao.localstorage';


export class LocalStoragePersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDao;

    getWidgetDao() {
        if (this.widgetDAO === null) {
            this.widgetDAO = new WidgetDaoLocalStorage();
        }
        return this.widgetDAO;
    }

}
