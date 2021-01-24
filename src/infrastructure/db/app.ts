
import { MongoConnector } from "./mongo-connector";


export async function start(): Promise<void> {
    const mongoConnector = new MongoConnector();
    await mongoConnector.connect();
    const graceful = async () => {
        await mongoConnector.disconnect();
        process.exit(0);
    };

    // Stop graceful
    process.on('SIGTERM', graceful);
    process.on('SIGINT', graceful);
}

start()
    .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error(`Error starting server: ${err.message}`);
        process.exit(-1);
    });