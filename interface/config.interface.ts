import { ApplicationConfigurationProperties } from './application-configuration.interface';
import { DatabaseConfigurationProperties } from './database-configuration.interface';
import { IgdbConfigurationProperties } from './igbd-configuration.interface';

export interface ConfigurationProperties {
	application: ApplicationConfigurationProperties;
	database: DatabaseConfigurationProperties;
	igdbApi: IgdbConfigurationProperties;
}
