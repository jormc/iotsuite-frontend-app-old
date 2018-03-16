import { IWidgetService } from '../api/widget-service';
import { Widget } from '../../business-layer/entities/widget';
import { LocalStoragePersistenceManager } from '../../persistence-layer/impl/local-storage/persistence-manager/localstorage.persistence.manager';
import { PersistenceTechnology } from '../../utils/model-utils';
import { IWidgetDao } from '../../persistence-layer/api/widget.dao';
import { WidgetType } from '../../business-layer/entities/widget-type';

export class WidgetService implements IWidgetService {


    private localStoragePersistenceManager: LocalStoragePersistenceManager;

    constructor(
        localStoragePersistenceManager: LocalStoragePersistenceManager) {
        this.localStoragePersistenceManager = localStoragePersistenceManager;
    }

    findAll(persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

    findById(id: string, persistenceDependency: any): Promise<Widget> {
        throw new Error('Method not implemented.');
    }

    findByType(type: WidgetType, persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

    save(widget: Widget, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }

    delete(id: string, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }

    private getDao(persistenceTechnology: PersistenceTechnology): IWidgetDao {
        let dao: IWidgetDao;
        switch (persistenceTechnology) {
            case PersistenceTechnology.LOCAL_STORAGE:
                dao = this.localStoragePersistenceManager.getWidgetDao();
                break;
            case PersistenceTechnology.SESSION_STORAGE:
                break;
            case PersistenceTechnology.REST:
                break;
        }
        return dao;
    }
}
