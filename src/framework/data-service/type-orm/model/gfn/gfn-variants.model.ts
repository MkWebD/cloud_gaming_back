import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GfnGameModel } from './gfn-game.model';

/**
 * Geforce Now Variants Model
 */
@Entity({ database: 'postgres', name: 'variants', schema: 'public' })
export class GfnVariantsModel {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ length: 255, name: 'appstore', type: 'varchar' })
	appStore: string;

	@Column({ length: 255, name: 'publishername', type: 'varchar' })
	publisherName: string;

	@OneToOne(() => GfnGameModel)
	@JoinColumn({ name: 'gameid' })
	game: GfnGameModel;
}
