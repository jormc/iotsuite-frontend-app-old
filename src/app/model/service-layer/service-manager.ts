import { IWidgetService } from './api/widget-service';
import { LocalStoragePersistenceManager } from '../persistence-layer/impl/local-storage/persistence-manager/localstorage.persistence.manager';
import { WidgetService } from './impl/widget-service.impl';

export class ServiceManager {

    // Services
    private widgetService: IWidgetService;

    // Persistence manager
    private localStoragePersistenceManager: LocalStoragePersistenceManager;

    constructor() {
        this.localStoragePersistenceManager = new LocalStoragePersistenceManager();
    }

    getwidgetService(): IWidgetService {
        if (this.widgetService == null) {
            this.widgetService = new WidgetService(
                this.localStoragePersistenceManager
            );
        }
        return this.widgetService;
    }

}
