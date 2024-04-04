import { ApplicationConfigurationProperties } from 'interface/application-configuration.interface';

const DEFAULT_PORT = 3000;

/**
 * Application configuration properties
 * @returns - Application configuration properties as an object
 */
export const applicationConfiguration = (): ApplicationConfigurationProperties => ({
	applicationPort: Number(process.env.PORT) || DEFAULT_PORT,
});
