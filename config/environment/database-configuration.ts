import { DatabaseConfigurationProperties } from 'interface/database-configuration.interface';

const POSTGRES_DEFAULT_PORT = 5432;

/**
 * Database configuration properties
 * @returns - Database configuration properties as an object
 */
export const databaseConfiguration = (): DatabaseConfigurationProperties => ({
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT) || POSTGRES_DEFAULT_PORT,
	username: process.env.DB_USERNAME,
});
