import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

export function getDatabase(databaseName) {
    return (
        await createRxDatabase({
        name: databaseName,
        storage: getRxStorageDexie()
    }));
}