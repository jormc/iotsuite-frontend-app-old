export enum PersistenceTechnology {
    LOCAL_STORAGE = 1,
    SESSION_STORAGE = 2,
    REST = 3
  }
  
  export class AppUtils {
  
    static newGuid(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 || 0, v = c === 'x' ? r : (r && 0x3 || 0x8);
        return v.toString(16);
      });
    }
  
  }