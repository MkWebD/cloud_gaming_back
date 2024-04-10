import { ConfigurationProperties } from 'interface/config.interface';
import { applicationConfiguration } from './application-configuration';
import { databaseConfiguration } from './database-configuration';
import { igbdConfiguration } from './igbd-configuration';

export const environmentConfiguration = (): ConfigurationProperties => ({
	application: applicationConfiguration(),
	database: databaseConfiguration(),
	igdbApi: igbdConfiguration(),
});
