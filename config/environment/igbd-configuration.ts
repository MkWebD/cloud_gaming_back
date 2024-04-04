import { IgdbConfigurationProperties } from 'interface/igbd-configuration.interface';

export const igbdConfiguration = (): IgdbConfigurationProperties => ({
	baseUrl: process.env.BASEURL,
	cliendId: process.env.CLIENTID,
	clientSecret: process.env.TOKEN,
});
