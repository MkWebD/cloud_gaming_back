import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateGfnGameDto, UpdateGfnGameDto } from 'src/core/dto/gfn/gfn-game.dto';
import { GenericOptionsDto } from 'src/core/dto/query/generic-options.dto';
import { PageOptionsDto } from 'src/core/dto/query/pagination/page-options.dto';
import { GfnGameEntity } from 'src/core/entity/gfn/gfn-game.entity';
import { AdminGameUseCases } from 'src/use-case/admin/game/admin-game.use-case';

@Controller('admin/game')
export class AdminGameController {
	constructor(private readonly adminGameUseCases: AdminGameUseCases) {}

	@Post()
	async createGfnGame(@Body() createGfnGameDto: CreateGfnGameDto): Promise<GfnGameEntity> {
		return this.adminGameUseCases.createGfnGame(createGfnGameDto);
	}

	@Get()
	async getGfnGames(@Query() pageOptionsDto: PageOptionsDto): Promise<GenericOptionsDto<GfnGameEntity>> {
		return this.adminGameUseCases.getGfnGames(pageOptionsDto);
	}

	@Get('name')
	async getOneGfnGameByName(@Query('name') name: string): Promise<GfnGameEntity> {
		return this.adminGameUseCases.getOneGfnGameByName(name);
	}

	@Get(':id')
	async getOneGfnGame(@Param('id') id: string): Promise<GfnGameEntity> {
		return this.adminGameUseCases.getOneGfnGame(Number(id));
	}

	@Put(':id')
	async updateGfnGame(@Param('id') id: string, @Body() updateGfnGameDto: UpdateGfnGameDto): Promise<GfnGameEntity> {
		return this.adminGameUseCases.updateGfnGame(Number(id), updateGfnGameDto);
	}

	@Delete(':id')
	async deleteGfnGame(@Param('id') id: string): Promise<GfnGameEntity> {
		return this.adminGameUseCases.deleteGfnGame(Number(id));
	}
}
