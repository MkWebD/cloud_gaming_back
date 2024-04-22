import { GfnVariantsEntity } from './gfn-variants.entity';

/**
 * Geforce Now Game Options interface
 */
interface GfnGameOptions {
	id?: number;
	title: string;
	sortName: string;
	variants?: GfnVariantsEntity[];
}

/**
 * Geforce Now Game Entity
 */
export class GfnGameEntity {
	public id?: number;
	public title: string = '';
	public sortName: string = '';
	public variants?: GfnVariantsEntity[] = [];
	constructor(options: GfnGameOptions) {
		this.id = options.id;
		this.title = options.title;
		this.sortName = options.sortName;
		this.variants = options.variants;
	}
}
