/**
 * Geforce Now Variants Options interface
 */
interface GfnVariantsOptions {
	appStore: string;
	publisherName: string;
}

/**
 * Geforce Now Variants Entity
 */
export class GfnVariantsEntity {
	public appStore: string = '';
	public publisherName: string = '';
	constructor(options: GfnVariantsOptions) {
		this.appStore = options.appStore;
		this.publisherName = options.publisherName;
	}
}
