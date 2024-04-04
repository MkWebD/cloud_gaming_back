import { ApplicationConfigurationProperties } from './application-configuration.interface';
import { IgdbConfigurationProperties } from './igbd-configuration.interface';

export interface ConfigurationProperties {
	application: ApplicationConfigurationProperties;
	igdbApi: IgdbConfigurationProperties;
}
