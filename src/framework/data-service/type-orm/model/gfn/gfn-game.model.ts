import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Geforce Now Game Model
 */
@Entity({ database: 'postgres', name: 'game', schema: 'public' })
export class GfnGameModel {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ length: 255, type: 'varchar', name: 'title' })
	title: string;

	@Column({ length: 255, type: 'varchar', name: 'sortname' })
	sortName: string;
}
