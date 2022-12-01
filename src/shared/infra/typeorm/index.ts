/* eslint-disable @typescript-eslint/no-floating-promises */
import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "localhost"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return await createConnection(
        Object.assign(defaultOptions, {
            host,
        })
    );
};
