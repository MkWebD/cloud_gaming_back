import { ConfigurationProperties } from 'interface/config.interface';
import { applicationConfiguration } from './application-configuration';
import { igbdConfiguration } from './igbd-configuration';

export const environmentConfiguration = (): ConfigurationProperties => ({
	application: applicationConfiguration(),
	igdbApi: igbdConfiguration(),
});
