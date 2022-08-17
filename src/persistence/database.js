import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

const samplesDB = await createRxDatabase({
    name: "samples",
    storage: getRxStorageDexie()
});

const sampleType = {
    title: 'sampleTypes',
    version: 0,
    primaryKey: 'sampleTypeId',
    type: 'object',
    properties: {
        sampleTypeId: {   // id типа образца
            type: 'string',
            maxLength: 100
        },
        name: {    //название типа образца
            type: 'string'
        },
        description: {  //описание типа образца
            type: 'string'
        }
    }
};

const workers = {
    title: 'workers',
    version: 0,
    primaryKey: 'workerId',
    type: 'object',
    properties: {
        workerId: {
            type: 'string',
            maxLength: 100
        },
        name: {
            type: String
        },
        middleName: {
            type: String
        },
        surname: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        room: {
            ref: 'rooms',
            type: String
        },
        email: {
            type: String
        }
    }
};


const rooms = {
    title: 'rooms',
    version: 0,
    primaryKey: 'roomId',
    type: 'object',
    properties: {
        roomId: {
            type: 'string',
            maxLength: 100
        },
        roomNumber: {
            type: 'string'
        },
        description: {
            type: 'string'
        }
    }
};

const operations = {
    title: 'operations',
    version: 0,
    primaryKey: operationId,
    type: 'object',
    properties: {
        operationId: {
            type: 'string',
            maxLength: 100
        },
        name: {
            type: 'string'
        },
        description: {
            type: 'string'
        }
    }
};

