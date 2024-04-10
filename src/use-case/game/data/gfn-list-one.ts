interface PublisherItem {
	appStore: string;
	publisherName: string;
}

interface GameItem {
	title: string;
	sortName: string;
	variants: PublisherItem[];
}

export interface GfnGameData {
	data: {
		apps: {
			numberReturned: number;
			pageInfo: {
				endCursor: string;
				hasNextPage: boolean;
			};
			items: GameItem[];
		};
	};
}

export const gfnDataOne: GfnGameData = {
	'data': {
		'apps': {
			'numberReturned': 750,
			'pageInfo': {
				'endCursor': 'NzUw',
				'hasNextPage': true,
			},
			'items': [
				{
					'title': 'Wolcen: Lords of Mayhem',
					'sortName': 'wolcen:_lords_of_mayhem',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'WOLCEN STUDIO',
						},
					],
				},
				{
					'title': 'Half-Life® 2',
					'sortName': 'half_life_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Rage',
					'sortName': 'rage',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Far Cry® 3 Deluxe Edition',
					'sortName': 'far_cry_3_deluxe_edition',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Thief',
					'sortName': 'thief_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Eidos Interactive Corp.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Eidos Interactive Corp.',
						},
					],
				},
				{
					'title': 'League of Legends',
					'sortName': 'league_of_legends',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'Riot Games, Inc.',
						},
					],
				},
				{
					'title': 'Counter-Strike 2',
					'sortName': 'counter_strike_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® Revelations',
					'sortName': 'assassins_creed_04',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Dota 2®',
					'sortName': 'dota_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Saints Row: The Third',
					'sortName': 'saints_row_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': ' Wolfenstein®: The New Order™',
					'sortName': 'wolfenstein_i_a',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'War Thunder',
					'sortName': 'war_thunder_s',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'Gaijin Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Gaijin Entertainment',
						},
					],
				},
				{
					'title': 'Warframe',
					'sortName': 'warframe',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'Digital Extremes',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Digital Extremes',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Digital Extremes',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® IV Black Flag™ - Gold Edition',
					'sortName': 'assassins_creed_06_gold_edition',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Euro Truck Simulator 2',
					'sortName': 'euro_truck_simulator_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SCS Software',
						},
					],
				},
				{
					'title': 'SUPERHOT',
					'sortName': 'superhot',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'SUPERHOT Team',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'SUPERHOT Team',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'SUPERHOT Team',
						},
					],
				},
				{
					'title': 'Spintires®',
					'sortName': 'spintires',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Oovee Games',
						},
					],
				},
				{
					'title': 'Apollo 11 Lunar Landing Demo',
					'sortName': 'apollo_11_lunar_landing_demo',
					'variants': [
						{
							'appStore': 'NVIDIA',
							'publisherName': 'NVIDIA',
						},
					],
				},
				{
					'title': 'LARA CROFT AND THE TEMPLE OF OSIRIS™',
					'sortName': 'lara_croft_and_the_temple_of_osiris',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crystal Dynamics',
						},
					],
				},
				{
					'title': 'Rocket League®',
					'sortName': 'rocket_league',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Psyonix Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Psyonix Studios',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® III',
					'sortName': 'assassins_creed_03',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Assassin’s Creed®: Syndicate',
					'sortName': 'assassins_creed_09',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': "Assassin's Creed® Unity",
					'sortName': 'assassins_creed_08',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Call of Juarez® Gunslinger',
					'sortName': 'call_of_juarez_gunslinger',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Techland sp. z o.o.',
						},
					],
				},
				{
					'title': 'DayZ',
					'sortName': 'dayz',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bohemia Interactive',
						},
					],
				},
				{
					'title': 'Divinity: Original Sin (Classic)',
					'sortName': 'divinity_original_sin_1_classic',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Larian Studios',
						},
					],
				},
				{
					'title': "Don't Starve",
					'sortName': "don't_starve",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Klei Entertainment',
						},
					],
				},
				{
					'title': 'Neverwinter',
					'sortName': 'neverwinter',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gearbox Publishing',
						},
					],
				},
				{
					'title': 'Far Cry® 4',
					'sortName': 'far_cry_4',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Guild Wars 2',
					'sortName': 'guild_wars_2',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'NCsoft Corp.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'NCsoft Corp.',
						},
					],
				},
				{
					'title': 'Hearthstone',
					'sortName': 'hearthstone:_heroes_of_warcraft',
					'variants': [
						{
							'appStore': 'BATTLENET',
							'publisherName': 'Blizzard Entertainment, Inc.',
						},
					],
				},
				{
					'title': 'Just Cause™ 3',
					'sortName': 'just_cause_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Lords Of The Fallen™ (2014)',
					'sortName': 'lords_of_the_fallen_(2014)',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CI Games',
						},
					],
				},
				{
					'title': 'Magicka 2',
					'sortName': 'magicka_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'MapleStory',
					'sortName': 'maplestory',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nexon America',
						},
					],
				},
				{
					'title': 'Path of Exile',
					'sortName': 'path_of_exile',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'Grinding Gear Games',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Grinding Gear Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Grinding Gear Games',
						},
					],
				},
				{
					'title': 'PlanetSide 2',
					'sortName': 'planetside_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Daybreak Game Company',
						},
					],
				},
				{
					'title': 'Sniper: Ghost Warrior 2',
					'sortName': 'sniper_ghost_warrior_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CI Games',
						},
					],
				},
				{
					'title': 'South Park™: The Stick of Truth™',
					'sortName': 'south_park_01',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'The Crew™',
					'sortName': 'crew_01',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'World of Tanks',
					'sortName': 'world_of_tanks',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'Wargaming Group Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Wargaming Group Limited',
						},
					],
				},
				{
					'title': 'American Truck Simulator',
					'sortName': 'american_truck_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SCS Software',
						},
					],
				},
				{
					'title': 'Black Desert',
					'sortName': 'black_desert_online',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'Pearl Abyss',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Pearl Abyss',
						},
					],
				},
				{
					'title': 'Mount & Blade: Warband',
					'sortName': 'mount_and_blade_1a',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TaleWorlds',
						},
					],
				},
				{
					'title': 'Terraria',
					'sortName': 'terraria',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Re-Logic',
						},
					],
				},
				{
					'title': 'Unturned',
					'sortName': 'unturned',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Smartly Dressed Games',
						},
					],
				},
				{
					'title': 'The Flame in the Flood',
					'sortName': 'flame_in_the_flood',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Far Cry® Primal',
					'sortName': 'far_cry_4a',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Rise of the Tomb Raider™',
					'sortName': 'rise_of_the_tomb_raider',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Crystal Dynamics',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Crystal Dynamics',
						},
					],
				},
				{
					'title': 'Arma 2: Operation Arrowhead',
					'sortName': 'arma_2_operation_arrowhead',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bohemia Interactive',
						},
					],
				},
				{
					'title': 'Dirty Bomb®',
					'sortName': 'dirty_bomb',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Warchest Ltd.',
						},
					],
				},
				{
					'title': "Don't Starve Together",
					'sortName': "don't_starve_together",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Klei Entertainment',
						},
					],
				},
				{
					'title': 'Elite Dangerous',
					'sortName': 'elite_dangerous',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frontier Developments',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frontier Developments',
						},
					],
				},
				{
					'title': 'Mount & Blade: With Fire & Sword',
					'sortName': 'mount_and_blade_1b',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TaleWorlds',
						},
					],
				},
				{
					'title': 'Pillars of Eternity',
					'sortName': 'pillars_of_eternity',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Prison Architect',
					'sortName': 'prison_architect',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Rust',
					'sortName': 'rust',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Facepunch Studios',
						},
					],
				},
				{
					'title': 'Skyforge',
					'sortName': 'skyforge',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'My.com B.V.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'My.com B.V.',
						},
					],
				},
				{
					'title': 'Torchlight II',
					'sortName': 'torchlight_2_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Gearbox Publishing',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Gearbox Publishing',
						},
					],
				},
				{
					'title': 'Wargame: Airland Battle',
					'sortName': 'wargame:_airland_battle',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eugen Systems',
						},
					],
				},
				{
					'title': 'Warhammer: End Times - Vermintide',
					'sortName': 'warhammer:_end_times_-_vermintide',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Fatshark AB',
						},
					],
				},
				{
					'title': 'X Rebirth',
					'sortName': 'x_rebirth',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EGOSOFT GmbH',
						},
					],
				},
				{
					'title': 'Ashes of the Singularity: Escalation',
					'sortName': 'ashes_of_the_singularity:_escalation',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Stardock Entertainment',
						},
					],
				},
				{
					'title': 'Counter-Strike: Source',
					'sortName': 'counter_strike_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Divinity: Original Sin - Enhanced Edition',
					'sortName': 'divinity_original_sin_1_enhanced',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Larian Studios',
						},
					],
				},
				{
					'title': 'Half-Life®',
					'sortName': 'half_life_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Half-Life® 2: Episode Two',
					'sortName': 'half_life_2_episode_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'HITMAN™',
					'sortName': 'hitman_6',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'IO Interactive A/S',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'IO Interactive A/S',
						},
					],
				},
				{
					'title': 'Portal 2',
					'sortName': 'portal_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Xuan Yuan Sword: The Gate of Firmament',
					'sortName': 'xuan_yuan_sword:_the_gate_of_firmament',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SOFTSTAR Entertainment',
						},
					],
				},
				{
					'title': 'Sniper Elite 3',
					'sortName': 'sniper_elite_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'Tom Clancy’s Splinter Cell® Blacklist™ Deluxe Edition',
					'sortName': 'tom_clancys_splinter_cell_blacklist_deluxe_edition',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Stardew Valley',
					'sortName': 'stardew_valley',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'ConcernedApe',
						},
					],
				},
				{
					'title': 'Team Fortress 2',
					'sortName': 'team_fortress_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Tree of Savior',
					'sortName': 'tree_of_savior_korean_version',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'IMC Games Co., Ltd.',
						},
					],
				},
				{
					'title': 'Enter the Gungeon',
					'sortName': 'enter_the_gungeon_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Devolver Digital',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'Tale of Wuxia (侠客风云传)',
					'sortName': 'tale_of_wuxia',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'FHYX',
						},
					],
				},
				{
					'title': 'Total War™: WARHAMMER®',
					'sortName': 'total_war_warhammer_02',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'SEGA Europe, Ltd.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Stellaris',
					'sortName': 'stellaris',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Deliver Us The Moon: Fortuna',
					'sortName': 'deliver_us_the_moon',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'Caveblazers',
					'sortName': 'caveblazers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Yogscast Games',
						},
					],
				},
				{
					'title': 'Assetto Corsa',
					'sortName': 'assetto_corsa',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '505 Games',
						},
					],
				},
				{
					'title': 'Factorio',
					'sortName': 'factorio',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wube Software Ltd.',
						},
					],
				},
				{
					'title': 'Subnautica',
					'sortName': 'subnautica_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Unknown Worlds Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Unknown Worlds Entertainment',
						},
					],
				},
				{
					'title': 'Ori and the Blind Forest: Definitive Edition',
					'sortName': 'ori_and_the_blind_forest:_definitive_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Grim Dawn',
					'sortName': 'grim_dawn',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crate Entertainment',
						},
					],
				},
				{
					'title': 'The Talos Principle',
					'sortName': 'talos_principle_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'ARK: Survival Evolved',
					'sortName': 'ark_survival_evolved_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Studio Wildcard',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Studio Wildcard',
						},
					],
				},
				{
					'title': 'Snake Pass',
					'sortName': 'snake_pass',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Secret Mode',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Secret Mode',
						},
					],
				},
				{
					'title': 'GWENT®: The Witcher Card Game',
					'sortName': 'gwent_the_witcher_card_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CD PROJEKT RED',
						},
					],
				},
				{
					'title': "Sherlock Holmes: The Devil's Daughter",
					'sortName': "sherlock_holmes:_the_devil's_daughter",
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frogwares',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frogwares',
						},
					],
				},
				{
					'title': 'Hearts of Iron IV',
					'sortName': 'hearts_of_iron_iv',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Zombie Army Trilogy',
					'sortName': 'zombie_army_trilogy',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'Nine Parchments',
					'sortName': 'nine_parchments',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frozenbyte Inc',
						},
					],
				},
				{
					'title': 'Sniper Elite 4',
					'sortName': 'sniper_elite_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'Dead by Daylight',
					'sortName': 'dead_by_daylight',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Behaviour Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Behaviour Interactive',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Behaviour Interactive',
						},
					],
				},
				{
					'title': 'Dwarrows',
					'sortName': 'dwarrows',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Lithic Entertainment',
						},
					],
				},
				{
					'title': 'Kenshi',
					'sortName': 'kenshi',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Lo-Fi Games Ltd',
						},
					],
				},
				{
					'title': 'Ys Origin',
					'sortName': 'ys_origin',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'XSEED JKS, Inc.',
						},
					],
				},
				{
					'title': 'The Legend of Heroes: Trails in the Sky SC',
					'sortName': 'legend_of_heroes_trails_in_sky_02',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'XSEED JKS, Inc.',
						},
					],
				},
				{
					'title': 'The Legend of Heroes: Trails in the Sky',
					'sortName': 'legend_of_heroes_trails_in_sky_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'XSEED JKS, Inc.',
						},
					],
				},
				{
					'title': 'Aragami',
					'sortName': 'aragami',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Lince Works SL',
						},
					],
				},
				{
					'title': 'Watch_Dogs® 2',
					'sortName': 'watch_dogs_2',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Outward Definitive Edition',
					'sortName': 'outward',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Broforce',
					'sortName': 'broforce',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'Children of Morta',
					'sortName': 'children_of_morta',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '11 Bit Studios s.a.',
						},
					],
				},
				{
					'title': 'Forts',
					'sortName': 'forts',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EarthWork Games',
						},
					],
				},
				{
					'title': 'GoNNER',
					'sortName': 'gonner',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Raw Fury Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'Brawlhalla',
					'sortName': 'brawlhalla',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Epistory - Typing Chronicles',
					'sortName': 'epistory_-_typing_chronicles',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Plug In Digital',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Plug In Digital',
						},
					],
				},
				{
					'title': 'Serial Cleaner',
					'sortName': 'serial_cleaner',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Mordheim: City of the Damned',
					'sortName': 'mordheim:_city_of_the_damned',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rogue Factor',
						},
					],
				},
				{
					'title': 'Farming Simulator 17',
					'sortName': 'farming_simulator_2017',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'GIANTS Software GmbH',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'GIANTS Software GmbH',
						},
					],
				},
				{
					'title': 'Darksiders: Warmastered Edition',
					'sortName': 'darksiders_1_warmaster_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Rayman® Legends',
					'sortName': 'rayman_5',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Trackmania® Turbo',
					'sortName': 'trackmania_turbo',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'For Honor™',
					'sortName': 'for_honor_1',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Steep™',
					'sortName': 'steep_gfn_pc_steam',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'This War of Mine: Final Cut',
					'sortName': 'this_war_of_mine_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '11 Bit Studios s.a.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '11 Bit Studios s.a.',
						},
					],
				},
				{
					'title': 'Project Zomboid',
					'sortName': 'project_zomboid',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'The Indie Stone',
						},
					],
				},
				{
					'title': 'Fortnite®',
					'sortName': 'fortnite',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Epic Games',
						},
					],
				},
				{
					'title': 'Crawl',
					'sortName': 'crawl',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Powerhoof',
						},
					],
				},
				{
					'title': 'Kholat',
					'sortName': 'kholat',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'IMGN.PRO',
						},
					],
				},
				{
					'title': 'Blood Bowl 2',
					'sortName': 'blood_bowl_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Styx: Master of Shadows',
					'sortName': 'styx:_master_of_shadows',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Black Mesa',
					'sortName': 'black_mesa',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crowbar Collective',
						},
					],
				},
				{
					'title': 'Sleeping Dogs™: Definitive Edition',
					'sortName': 'sleeping_dogs:_definitive_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'THE KING OF FIGHTERS XIII',
					'sortName': 'king_of_fighters_13',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SNK Corporation',
						},
					],
				},
				{
					'title': 'Hotline Miami 2: Wrong Number',
					'sortName': 'hotline_miami_2:_wrong_number',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'Sanctum 2',
					'sortName': 'sanctum_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Coffee Stain Studios',
						},
					],
				},
				{
					'title': 'Amnesia: A Machine for Pigs',
					'sortName': 'amnesia:_a_machine_for_pigs',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frictional Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frictional Games',
						},
					],
				},
				{
					'title': 'Chivalry: Medieval Warfare',
					'sortName': 'chivalry:_medieval_warfare',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Torn Banner Studios',
						},
					],
				},
				{
					'title': 'Paladins®',
					'sortName': 'paladins',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
					],
				},
				{
					'title': 'EVERSPACE™',
					'sortName': 'everspace',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rockfish Games',
						},
					],
				},
				{
					'title': "Tom Clancy's The Division™",
					'sortName': 'division_1',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Assassin’s Creed®: Syndicate Gold Edition',
					'sortName': 'assassin’s_creed:_syndicate_gold_edition',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Europa Universalis IV',
					'sortName': 'europa_universalis_iv',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Legion TD 2',
					'sortName': 'legion_td_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'AutoAttack Games',
						},
					],
				},
				{
					'title': "Tom Clancy's Rainbow Six® Siege",
					'sortName': 'tom_clancys_rainbow_six_siege_steam_ww',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'The Forest',
					'sortName': 'forest',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Endnight Games Ltd.',
						},
					],
				},
				{
					'title': 'Star Trek Online',
					'sortName': 'star_trek_online',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gearbox Publishing',
						},
					],
				},
				{
					'title': 'Conan Exiles',
					'sortName': 'conan_exiles',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Funcom Oslo A/S',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Door Kickers',
					'sortName': 'door_kickers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'KillHouse Games SRL',
						},
					],
				},
				{
					'title': 'Resident Evil 7: Biohazard',
					'sortName': 'resident_evil_7',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': '7 Days to Die',
					'sortName': '7_days_to_die',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'The Fun Pimps',
						},
					],
				},
				{
					'title': 'Cities: Skylines©',
					'sortName': 'cities:_skylines',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Dishonored',
					'sortName': 'dishonored_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Dishonored 2',
					'sortName': 'dishonored_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Dying Light',
					'sortName': 'dying_light_01',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Techland sp. z o.o.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Techland sp. z o.o.',
						},
					],
				},
				{
					'title': 'Killing Floor 2',
					'sortName': 'killing_floor_2_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Tripwire Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Tripwire Interactive',
						},
					],
				},
				{
					'title': 'Left 4 Dead 2',
					'sortName': 'left_4_dead_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': "No Man's Sky",
					'sortName': 'no_mans_sky',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Hello Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Hello Games',
						},
					],
				},
				{
					'title': 'PAYDAY 2',
					'sortName': 'payday_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Starbreeze Studios AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Starbreeze Studios AB',
						},
					],
				},
				{
					'title': 'Shadow Warrior 2',
					'sortName': 'shadow_warrior_02',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'SMITE®',
					'sortName': 'smite',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
					],
				},
				{
					'title': 'Starbound',
					'sortName': 'starbound',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Chucklefish',
						},
					],
				},
				{
					'title': 'World of Warships',
					'sortName': 'world_of_warships',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'Wargaming Group Limited',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Wargaming Group Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Wargaming Group Limited',
						},
					],
				},
				{
					'title': 'Arma 3',
					'sortName': 'arma_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bohemia Interactive',
						},
					],
				},
				{
					'title': 'Deus Ex: Mankind Divided™',
					'sortName': 'deus_ex_5',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Eidos Interactive Corp.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Eidos Interactive Corp.',
						},
					],
				},
				{
					'title': 'The Witcher® 3: Wild Hunt',
					'sortName': 'witcher_3',
					'variants': [
						{
							'appStore': 'GOG',
							'publisherName': 'CD PROJEKT RED',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'CD PROJEKT RED',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'CD PROJEKT RED',
						},
					],
				},
				{
					'title': 'EVE Online',
					'sortName': 'eve_online',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'CCP Games',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'CCP Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'CCP Games',
						},
					],
				},
				{
					'title': 'Squad',
					'sortName': 'squad',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Offworld Industries',
						},
					],
				},
				{
					'title': 'Starbase',
					'sortName': 'starbase',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frozenbyte Inc',
						},
					],
				},
				{
					'title': 'Dead Cells',
					'sortName': 'dead_cells',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Motion Twin',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Motion Twin',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Motion Twin',
						},
					],
				},
				{
					'title': "Tom Clancy's Ghost Recon® Wildlands",
					'sortName': 'ghost_recon_wildlands',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Drone Swarm',
					'sortName': 'drone_swarm',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Astragon Entertainment',
						},
					],
				},
				{
					'title': 'Skyborn',
					'sortName': 'skyborn',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'DEGICA Co., Ltd.',
						},
					],
				},
				{
					'title': 'Deathsmiles',
					'sortName': 'deathsmiles',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'DEGICA Co., Ltd.',
						},
					],
				},
				{
					'title': 'Kingdom Come: Deliverance',
					'sortName': 'kingdom_come:_deliverance',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': "Assassin's Creed® II Deluxe Edition",
					'sortName': 'assassins_creed_02',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Anno® 2205',
					'sortName': 'anno_2205',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Hollow Knight',
					'sortName': 'hollow_knight',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team Cherry',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team Cherry',
						},
					],
				},
				{
					'title': 'Little Nightmares',
					'sortName': 'little_nightmares',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'BANDAI NAMCO Entertainment Europe S.A.S.',
						},
					],
				},
				{
					'title': 'The Pedestrian',
					'sortName': 'pedestrian',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Skookum Arts',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Skookum Arts',
						},
					],
				},
				{
					'title': 'Space Engineers',
					'sortName': 'space_engineers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Keen Software House s. r. o.',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Keen Software House s. r. o.',
						},
					],
				},
				{
					'title': 'Tabletop Simulator',
					'sortName': 'tabletop_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Berserk Games',
						},
					],
				},
				{
					'title': 'Insurgency',
					'sortName': 'insurgency',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'New World Interactive',
						},
					],
				},
				{
					'title': 'The Surge',
					'sortName': 'surge_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Nex Machina',
					'sortName': 'nex_machina',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Housemarque Oy',
						},
					],
				},
				{
					'title': 'Mount & Blade',
					'sortName': 'mount_and_blade_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TaleWorlds',
						},
					],
				},
				{
					'title': 'Spacelords',
					'sortName': 'spacelords',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Mercury Steam Entertainment',
						},
					],
				},
				{
					'title': 'South Park™: The Fractured But Whole™',
					'sortName': 'south_park_02',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Owlboy',
					'sortName': 'owlboy',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'D-Pad Studio',
						},
					],
				},
				{
					'title': 'Wolfenstein® II: The New Colossus™',
					'sortName': 'wolfenstein_ii_a',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Hello Neighbor',
					'sortName': 'hello,_neighbor',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'tinyBuild',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'Sniper Ghost Warrior 3',
					'sortName': 'sniper_ghost_warrior_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CI Games',
						},
					],
				},
				{
					'title': 'Starpoint Gemini Warlords',
					'sortName': 'starpoint_gemini_warlords',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Battle Chasers: Nightwar',
					'sortName': 'battle_chasers:_nightwar',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'SpellForce 3 Reforced',
					'sortName': 'spellforce_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'The King of Fighters XIV',
					'sortName': 'king_of_fighters_14',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SNK Corporation',
						},
					],
				},
				{
					'title': 'Yooka-Laylee',
					'sortName': 'yooka-laylee',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Trailmakers',
					'sortName': 'trailmakers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Flashbulb Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Flashbulb Games',
						},
					],
				},
				{
					'title': 'Tacoma',
					'sortName': 'tacoma_gfn_pc',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Fullbright',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Fullbright',
						},
					],
				},
				{
					'title': 'Friday the 13th: The Game',
					'sortName': 'friday_the_13th:_the_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gun Media',
						},
					],
				},
				{
					'title': 'Life Is Strange™ 2',
					'sortName': 'life_is_strange_02',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'MOTHERGUNSHIP',
					'sortName': 'mothergunship',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Terrible Posture Games',
						},
					],
				},
				{
					'title': 'Super Mega Baseball 2',
					'sortName': 'super_mega_baseball_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Electronic Arts Inc.',
						},
					],
				},
				{
					'title': 'Rising Storm 2: Vietnam',
					'sortName': 'rising_storm_2:_vietnam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Tripwire Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Tripwire Interactive',
						},
					],
				},
				{
					'title': "Garry's Mod",
					'sortName': "garry's_mod",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Blood of Steel',
					'sortName': 'blood_of_steel',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'YC Games',
						},
					],
				},
				{
					'title': 'Endless Space® 2 - Digital Deluxe Edition',
					'sortName': 'endless_space_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Road Redemption',
					'sortName': 'road_redemption',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Pixel Dash Studios',
						},
					],
				},
				{
					'title': 'Semblance',
					'sortName': 'semblance',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'Divinity: Original Sin 2 - Definitive Edition',
					'sortName': 'divinity_original_sin_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Larian Studios',
						},
					],
				},
				{
					'title': 'RiME',
					'sortName': 'rime',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Six Foot',
						},
					],
				},
				{
					'title': 'The Witcher 2: Assassins of Kings Enhanced Edition',
					'sortName': 'witcher_2_enhanced_edition',
					'variants': [
						{
							'appStore': 'GOG',
							'publisherName': 'CD PROJEKT RED',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'CD PROJEKT RED',
						},
					],
				},
				{
					'title': 'PixARK',
					'sortName': 'pixark',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Snail Game',
						},
					],
				},
				{
					'title': 'Vampyr',
					'sortName': 'vampyr',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Tomb Raider',
					'sortName': 'tomb_raider_2013',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Crystal Dynamics',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Crystal Dynamics',
						},
					],
				},
				{
					'title': 'Firewatch',
					'sortName': 'firewatch',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Campo Santo',
						},
					],
				},
				{
					'title': 'Anno® 2070',
					'sortName': 'anno_2070',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': "Assassin's Creed™: Director's Cut Edition",
					'sortName': 'assassins_creed_01',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® Brotherhood',
					'sortName': "assassin's_creed_brotherhood",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® Rogue',
					'sortName': 'assassins_creed_07',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Beyond Good and Evil™',
					'sortName': 'beyond_good_&_evil',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': "Far Cry® 2: Fortune's Edition",
					'sortName': 'far_cry_2',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Far Cry® 5',
					'sortName': 'far_cry_5',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Heroes® of Might & Magic® III - HD Edition',
					'sortName': 'heroes_of_might_&_magic_iii_-_hd_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Might & Magic® Heroes® VII',
					'sortName': 'might_and_magic_heroes_7',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Heroes of Might & Magic V',
					'sortName': 'heroes_of_might_magic_v',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Rayman Raving Rabbids™',
					'sortName': 'rayman:_raving_rabbids',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'SKULL AND BONES™',
					'sortName': 'skull_&_bones',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'The Crew® 2',
					'sortName': 'crew_02',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'HYPERCHARGE: Unboxed',
					'sortName': 'hypercharge:_unboxed',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Digital Cybercherries',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Digital Cybercherries',
						},
					],
				},
				{
					'title': 'Distance',
					'sortName': 'distance',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Refract',
						},
					],
				},
				{
					'title': 'Crossout',
					'sortName': 'crossout',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gaijin Entertainment',
						},
					],
				},
				{
					'title': 'Planet Coaster®',
					'sortName': 'planet_coaster',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frontier Developments',
						},
					],
				},
				{
					'title': 'The Long Dark®',
					'sortName': 'long_dark',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Hinterland Studio Inc.',
						},
					],
				},
				{
					'title': 'Total War™: WARHAMMER® II',
					'sortName': 'total_war_warhammer_01',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'SEGA Europe, Ltd.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Men of War: Assault Squad 2',
					'sortName': 'men_of_war_assault_squad_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Absolver',
					'sortName': 'absolver',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'World of Tanks Blitz',
					'sortName': 'world_of_tanks:_blitz',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wargaming Group Limited',
						},
					],
				},
				{
					'title': 'X-Morph: Defense',
					'sortName': 'x-morph:_defense',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EXOR Studios',
						},
					],
				},
				{
					'title': 'Q.U.B.E. 2',
					'sortName': 'qube_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Trapped Nerve Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Trapped Nerve Games',
						},
					],
				},
				{
					'title': 'Dishonored®: Death of the Outsider™',
					'sortName': 'dishonored_03',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Black Squad',
					'sortName': 'black_squad',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NS STUDIO',
						},
					],
				},
				{
					'title': 'ARK: Survival Of The Fittest',
					'sortName': 'ark:_survival_of_the_fittest',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Studio Wildcard',
						},
					],
				},
				{
					'title': 'Claybook',
					'sortName': 'claybook',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Second Order',
						},
					],
				},
				{
					'title': 'MudRunner',
					'sortName': 'mudrunner',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Portal™',
					'sortName': 'portal_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'ATOMEGA™',
					'sortName': 'atomega',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'RAID: World War II',
					'sortName': 'raid:_world_war_ii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Starbreeze Studios AB',
						},
					],
				},
				{
					'title': 'Totally Accurate Battlegrounds',
					'sortName': 'totally_accurate_battlegrounds',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Landfall Games AB',
						},
					],
				},
				{
					'title': 'Age of Empires: Definitive Edition',
					'sortName': 'age_of_empires_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Citadel: Forged with Fire',
					'sortName': 'citadel:_forged_with_fire',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Blue Isle Studios',
						},
					],
				},
				{
					'title': 'FrostPunk',
					'sortName': 'frostpunk',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '11 Bit Studios s.a.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '11 Bit Studios s.a.',
						},
					],
				},
				{
					'title': 'Dual Universe',
					'sortName': 'dual_universe',
					'variants': [
						{
							'appStore': 'NONE',
							'publisherName': 'Novaquark',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Novaquark',
						},
					],
				},
				{
					'title': 'Oxygen Not Included',
					'sortName': 'oxygen_not_included',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Klei Entertainment',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® Origins',
					'sortName': 'assassins_creed_10',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Jurassic World Evolution™',
					'sortName': 'jurassic_world_evolution_01',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frontier Developments',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frontier Developments',
						},
					],
				},
				{
					'title': 'Cuphead',
					'sortName': 'cuphead',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'StudioMHDR Entertainment',
						},
					],
				},
				{
					'title': 'Depth',
					'sortName': 'depth',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Digital Confectioners',
						},
					],
				},
				{
					'title': 'Stick Fight: The Game',
					'sortName': 'stick_fight:_the_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Landfall Games AB',
						},
					],
				},
				{
					'title': 'Golf With Your Friends',
					'sortName': 'golf_with_your_friends',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Metro Exodus',
					'sortName': 'metro_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Besiege',
					'sortName': 'besiege',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spiderling Games',
						},
					],
				},
				{
					'title': 'RimWorld',
					'sortName': 'rimworld',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Ludeon Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ludeon Studios',
						},
					],
				},
				{
					'title': 'Darkest Dungeon®',
					'sortName': 'darkest_dungeon',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Red Hook Studios',
						},
					],
				},
				{
					'title': 'Crusader Kings II',
					'sortName': 'crusader_kings_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Idle Champions of the Forgotten Realms',
					'sortName': 'idle_champions_of_the_forgotten_realms',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Codename Entertainment Inc.',
						},
					],
				},
				{
					'title': 'My Summer Car',
					'sortName': 'my_summer_car',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Amistech Games',
						},
					],
				},
				{
					'title': 'Just Cause 2',
					'sortName': 'just_cause_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Edge Of Eternity',
					'sortName': 'edge_of_eternity',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Dear Villagers',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Dear Villagers',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Dear Villagers',
						},
					],
				},
				{
					'title': 'The Universim',
					'sortName': 'universim',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crytivo Games',
						},
					],
				},
				{
					'title': 'Counter-Strike',
					'sortName': 'counter_strike_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Realm Grinder',
					'sortName': 'realm_grinder',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kongregate',
						},
					],
				},
				{
					'title': 'Hunt: Showdown',
					'sortName': 'hunt:_showdown',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crytek GmbH',
						},
					],
				},
				{
					'title': 'Fade to Silence',
					'sortName': 'fade_to_silence',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'BeamNG.drive',
					'sortName': 'beamng.drive',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'BeamNG',
						},
					],
				},
				{
					'title': 'Raji™: An Ancient Epic Enhanced Edition',
					'sortName': 'raji:_an_ancient_epic',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'SuperGG.com',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'SuperGG.com',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'SuperGG.com',
						},
					],
				},
				{
					'title': 'For The King',
					'sortName': 'for_the_king_02',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Curve Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Three Kingdoms: The Last Warlord',
					'sortName': 'three_kingdoms:_the_last_warlord',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'LongYou Game',
						},
					],
				},
				{
					'title': 'ATOM RPG',
					'sortName': 'atom_rpg',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'ATENT GAMES LTD',
						},
					],
				},
				{
					'title': 'theHunter: Call of the Wild™',
					'sortName': 'hunter_call_of_the_wild',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Expansive Worlds',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Expansive Worlds',
						},
					],
				},
				{
					'title': 'Warhammer: Vermintide 2',
					'sortName': 'warhammer:_vermintide_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Fatshark AB',
						},
					],
				},
				{
					'title': 'Driftland: The Magic Revival',
					'sortName': 'driftland:_the_magic_revival',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Star Drifters',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® IV Black Flag™',
					'sortName': 'assassins_creed_06',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Far Cry® 3',
					'sortName': 'far_cry_3',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'They Are Billions',
					'sortName': 'they_are_billions',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Numantian Games',
						},
					],
				},
				{
					'title': 'GTFO',
					'sortName': 'gtfo',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '10 Chambers Collective',
						},
					],
				},
				{
					'title': 'Gravel',
					'sortName': 'gravel',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'Forged Battalion',
					'sortName': 'forged_battalion',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Kingdom: Classic',
					'sortName': 'kingdom:_classic',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'Human: Fall Flat',
					'sortName': 'human:_fall_flat',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Bomber Crew',
					'sortName': 'bomber_crew',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Watch_Dogs™',
					'sortName': 'watch_dogs_1',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Descenders',
					'sortName': 'descenders',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'No More Robots',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'No More Robots',
						},
					],
				},
				{
					'title': 'Tom Clancy’s Splinter Cell® Blacklist™',
					'sortName': 'tom_clancys_splinter_cell_blacklist',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'State of Decay 2: Juggernaut Edition',
					'sortName': 'state_of_decay_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Surviving Mars',
					'sortName': 'surviving_mars_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Deep Rock Galactic',
					'sortName': 'deep_rock_galactic',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Coffee Stain Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Coffee Stain Studios',
						},
					],
				},
				{
					'title': 'GRIP: Combat Racing',
					'sortName': 'grip:_combat_racing',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'Pure Farming 2018',
					'sortName': 'pure_farming_2018',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Techland sp. z o.o.',
						},
					],
				},
				{
					'title': 'SCUM',
					'sortName': 'scum',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gamepires',
						},
					],
				},
				{
					'title': 'My Time at Portia',
					'sortName': 'my_time_at_portia',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Phantom Doctrine',
					'sortName': 'phantom_doctrine',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'Mechwarrior 5: Mercenaries',
					'sortName': 'mechwarrior_5:_mercenaries',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Sold Out',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Sold Out',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Sold Out',
						},
					],
				},
				{
					'title': 'Mount & Blade II: Bannerlord',
					'sortName': 'mount_and_blade_1',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'TaleWorlds Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'TaleWorlds',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'TaleWorlds',
						},
					],
				},
				{
					'title': 'Magic the Gathering: Arena',
					'sortName': 'magic_the_gathering:_arena',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'Wizards of the Coast',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Wizards of the Coast',
						},
					],
				},
				{
					'title': 'BATTALION 1944',
					'sortName': 'battalion_1944',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix Collective',
						},
					],
				},
				{
					'title': 'Slay the Spire',
					'sortName': 'slay_the_spire',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Mega Crit Games',
						},
					],
				},
				{
					'title': 'Battletech',
					'sortName': 'battletech',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Lonely Mountains: Downhill',
					'sortName': 'lonely_mountains:_downhill',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Thunderful Publishing',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Thunderful Publishing',
						},
					],
				},
				{
					'title': 'Insurgency: Sandstorm',
					'sortName': 'insurgency_sandstorm',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'XERA: Survival',
					'sortName': 'xera:_survival',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spotted Kiwi Interactive',
						},
					],
				},
				{
					'title': 'Into the Breach',
					'sortName': 'into_the_breach',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Subset Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Subset Games',
						},
					],
				},
				{
					'title': 'Hitman: Absolution™',
					'sortName': 'hitman_5',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Io Interactive',
						},
					],
				},
				{
					'title': 'Saints Row IV: Re-Elected',
					'sortName': 'saints_row_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Mini Ninjas',
					'sortName': 'mini_ninjas',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Metro: 2033 Redux',
					'sortName': 'metro_1_redux',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Homefront®: The Revolution',
					'sortName': 'homefront:_the_revolution',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Sacred 3',
					'sortName': 'sacred_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Metro: Last Light Redux',
					'sortName': 'metro_2_redux',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Risen 3 - Titan Lords',
					'sortName': 'risen_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Outlast',
					'sortName': 'outlast',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Red Barrels Inc.',
						},
					],
				},
				{
					'title': 'Ori and the Will of the Wisps',
					'sortName': 'ori_and_the_will_of_the_wisps',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'TT Isle of Man Ride on the Edge',
					'sortName': 'tt_isle_of_man_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Aven Colony',
					'sortName': 'aven_colony',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'WRC 7 FIA World Rally Championship',
					'sortName': 'wrc_07',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Star Control®: Origins',
					'sortName': 'star_control_origins',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Stardock Entertainment',
						},
					],
				},
				{
					'title': 'Dauntless',
					'sortName': 'dauntless',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Phoenix Labs',
						},
					],
				},
				{
					'title': 'Enlisted',
					'sortName': 'enlisted',
					'variants': [
						{
							'appStore': 'UNKNOWN',
							'publisherName': 'Gaijin Entertainment',
						},
					],
				},
				{
					'title': 'Will To Live Online',
					'sortName': 'will_to_live_online',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'AlphaSoft LLC',
						},
					],
				},
				{
					'title': 'Strange Brigade',
					'sortName': 'strange_brigade',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'Shadow of the Tomb Raider​™ Definitive Edition',
					'sortName': 'shadow_of_the_tomb_raider',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Crystal Dynamics',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Crystal Dynamics',
						},
					],
				},
				{
					'title': 'Yet Another Zombie Defense HD',
					'sortName': 'yet_another_zombie_defense_hd',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Awesome Games Studio Sp. z o. o.',
						},
					],
				},
				{
					'title': 'Fury Unleashed',
					'sortName': 'fury_unleashed',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Awesome Games Studio Sp. z o. o.',
						},
					],
				},
				{
					'title': 'Deceit',
					'sortName': 'deceit',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Baseline',
						},
					],
				},
				{
					'title': 'Darwin Project',
					'sortName': 'darwin_project',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Scavengers Studio',
						},
					],
				},
				{
					'title': 'SCP: Secret Laboratory',
					'sortName': 'scp:_secret_laboratory',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Northwood Studios',
						},
					],
				},
				{
					'title': 'ASTRONEER',
					'sortName': 'astroneer',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'System Era Softworks LLC',
						},
					],
				},
				{
					'title': 'Dying Light: Bad Blood',
					'sortName': 'dying_light_bad_blood',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Techland sp. z o.o.',
						},
					],
				},
				{
					'title': 'Fear The Wolves',
					'sortName': 'fear_the_wolves',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Raft',
					'sortName': 'raft',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Axolot Games',
						},
					],
				},
				{
					'title': 'Plague Inc: Evolved',
					'sortName': 'plague_inc:_evolved',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ndemic Creations',
						},
					],
				},
				{
					'title': 'Darksiders II Deathinitive Edition',
					'sortName': 'darksiders_2_deathintive_edition',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Ys VIII: Lacrimosa of DANA',
					'sortName': 'ys_viii:_lacrimosa_of_dana',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NIS America',
						},
					],
				},
				{
					'title': 'Ravenfield',
					'sortName': 'ravenfield',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SteelRaven7',
						},
					],
				},
				{
					'title': 'PC Building Simulator',
					'sortName': 'pc_building_simulator',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Epic Games Publishing',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Epic Games Publishing',
						},
					],
				},
				{
					'title': 'Startup Company',
					'sortName': 'startup_company',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Hovgaard Games',
						},
					],
				},
				{
					'title': 'Dead In Vinland',
					'sortName': 'dead_in_vinland',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Dear Villagers',
						},
					],
				},
				{
					'title': 'Welcome to the Game II',
					'sortName': 'welcome_to_the_game_ii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Reflect Studios',
						},
					],
				},
				{
					'title': 'Tower of Time',
					'sortName': 'tower_of_time',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Event Horizon Ltd',
						},
					],
				},
				{
					'title': 'HITMAN™2',
					'sortName': 'hitman_7',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'IO Interactive A/S',
						},
					],
				},
				{
					'title': 'Assetto Corsa Competizione',
					'sortName': 'assetto_corsa_competizione',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '505 Games',
						},
					],
				},
				{
					'title': 'Phoenix Point',
					'sortName': 'phoenix_point',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Snapshot Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Snapshot Games',
						},
					],
				},
				{
					'title': 'BIOMUTANT®',
					'sortName': 'biomutant',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Mortal Shell',
					'sortName': 'mortal_shell',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Playstack',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Playstack',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Playstack',
						},
					],
				},
				{
					'title': 'Call of Cthulhu®',
					'sortName': 'call_of_cthulhu',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Darksiders III',
					'sortName': 'darksiders_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Warhammer 40,000: Inquisitor - Martyr',
					'sortName': 'warhammer_40,000:_inquisitor_-_martyr',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NeoCore Games',
						},
					],
				},
				{
					'title': 'BlazBlue: Cross Tag Battle',
					'sortName': 'blazblue:_cross_tag_battle',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Arc System Works Co., Ltd.',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Arc System Works Co., Ltd.',
						},
					],
				},
				{
					'title': 'Cultist Simulator',
					'sortName': 'cultist_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Weather Factory',
						},
					],
				},
				{
					'title': 'Moonlighter',
					'sortName': 'moonlighter',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '11 Bit Studios s.a.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '11 Bit Studios s.a.',
						},
					],
				},
				{
					'title': 'Salt and Sanctuary',
					'sortName': 'salt_and_sanctuary',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Ska Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ska Studios',
						},
					],
				},
				{
					'title': "Yoku's Island Express",
					'sortName': "yoku's_island_express",
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Realm Royale Reforged',
					'sortName': 'realm_royale',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Hi-Rez Studios, Inc.',
						},
					],
				},
				{
					'title': 'Just Cause 4 Reloaded',
					'sortName': 'just_cause_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Square Enix',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Shadowrun Returns',
					'sortName': 'shadowrun_returns',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Empyrion - Galactic Survival',
					'sortName': 'empyrion_-_galactic_survival',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eleon Game Studios',
						},
					],
				},
				{
					'title': 'CRSED: Cuisine Royale',
					'sortName': 'crsed:_cuisine_royale',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Gaijin Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Gaijin Entertainment',
						},
					],
				},
				{
					'title': 'House Flipper',
					'sortName': 'house_flipper_01',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frozen District',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frozen District',
						},
					],
				},
				{
					'title': 'Unknown Fate',
					'sortName': 'unknown_fate',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'The Awesome Adventures of Captain Spirit',
					'sortName': 'awesome_adventures_of_captain_spirit',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Tropico 6',
					'sortName': 'tropico_6',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® Odyssey',
					'sortName': 'assassins_creed_11',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Parkasaurus',
					'sortName': 'parkasaurus',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wash Bear Studio',
						},
					],
				},
				{
					'title': 'Wreckfest',
					'sortName': 'wreckfest',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Worms W.M.D',
					'sortName': 'worms_wmd',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Hacknet',
					'sortName': 'hacknet',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Fellow Traveller',
						},
					],
				},
				{
					'title': 'Miscreated',
					'sortName': 'miscreated',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Entrada Interactive',
						},
					],
				},
				{
					'title': 'Iron Harvest',
					'sortName': 'iron_harvest',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Resident Evil 2',
					'sortName': 'resident_evil_2_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': 'Total War™: THREE KINGDOMS',
					'sortName': 'total_war:_three_kingdoms',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Trials® Rising',
					'sortName': 'trials_rising',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Battlefleet Gothic: Armada 2',
					'sortName': 'battlefleet_gothic:_armada_ii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Space Hulk: Tactics',
					'sortName': 'space_hulk:_tactics',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Control',
					'sortName': 'control',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '505 Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '505 Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': '505 Games',
						},
					],
				},
				{
					'title': 'Pathfinder: Kingmaker® - Enhanced Plus Edition',
					'sortName': 'pathfinder:_kingmaker',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Two Point Hospital',
					'sortName': 'two_point_hospital',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Forza Horizon 4',
					'sortName': 'forza_horizon_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Overcooked! 2',
					'sortName': 'overcooked_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'UNO',
					'sortName': 'uno',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'This Is the Police 2',
					'sortName': 'this_is_the_police_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': '428: Shibuya Scramble',
					'sortName': '428_shibuya_scramble',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'Squad 44',
					'sortName': 'squad_44',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Offworld Industries',
						},
					],
				},
				{
					'title': 'Armello',
					'sortName': 'armello',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'League of Geeks',
						},
					],
				},
				{
					'title': 'Tricky Towers',
					'sortName': 'tricky_towers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'WeirdBeard',
						},
					],
				},
				{
					'title': 'Papers, Please',
					'sortName': 'papers,_please',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '3909',
						},
					],
				},
				{
					'title': 'Russian Fishing 4',
					'sortName': 'russian_fishing_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Russian Fishing',
						},
					],
				},
				{
					'title': 'Fate Seeker',
					'sortName': 'fate_seeker',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'JSL Games',
						},
					],
				},
				{
					'title': 'Necromunda: Underhive Wars',
					'sortName': 'necromunda:_underhive_wars',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'V-Rally 4',
					'sortName': 'v-rally_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Danganronpa V3: Killing Harmony',
					'sortName': 'danganronpa_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'GROUND BRANCH',
					'sortName': 'ground_branch',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microprose Software Inc.',
						},
					],
				},
				{
					'title': 'Danganronpa: Trigger Happy Havoc',
					'sortName': 'danganronpa_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'Danganronpa 2: Goodbye Despair',
					'sortName': 'danganronpa_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'UNDER NIGHT IN-BIRTH Exe:Late[cl-r]',
					'sortName': 'under_night_in-birth_exe:late[cl-r]',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Arc System Works Co., Ltd.',
						},
					],
				},
				{
					'title': 'X4: Foundations',
					'sortName': 'x4:_foundations',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EGOSOFT GmbH',
						},
					],
				},
				{
					'title': 'Endless Legend™ - Emperor Edition',
					'sortName': 'endless_legend',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SEGA Europe, Ltd.',
						},
					],
				},
				{
					'title': 'Not Tonight',
					'sortName': 'not_tonight',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'No More Robots',
						},
					],
				},
				{
					'title': 'Last Tide',
					'sortName': 'last_tide',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Digital Confectioners',
						},
					],
				},
				{
					'title': 'SOMA',
					'sortName': 'soma',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frictional Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frictional Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Frictional Games',
						},
					],
				},
				{
					'title': 'Green Hell',
					'sortName': 'green_hell',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Creepy Jar',
						},
					],
				},
				{
					'title': 'Furi',
					'sortName': 'furi',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'The Game Bakers',
						},
					],
				},
				{
					'title': 'Farming Simulator 19',
					'sortName': 'farming_simulator_2019',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Exanima',
					'sortName': 'exanima',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bare Mettle Entertainment',
						},
					],
				},
				{
					'title': 'Stormworks: Build and Rescue',
					'sortName': 'stormworks:_build_and_rescue',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Geometa',
						},
					],
				},
				{
					'title': 'Dakar 18',
					'sortName': 'dakar_18',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'PLANET ALPHA',
					'sortName': 'planet_alpha',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Ultimate Fishing Simulator',
					'sortName': 'ultimate_fishing_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Ultimate Games S.A.',
						},
					],
				},
				{
					'title': 'INSOMNIA: The Ark',
					'sortName': 'insomnia:_the_ark',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Herocraft',
						},
					],
				},
				{
					'title': 'Holdfast: Nations At War',
					'sortName': 'holdfast:_nations_at_war',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Anvil Game Studios',
						},
					],
				},
				{
					'title': "THE KING OF FIGHTERS '98 ULTIMATE MATCH FINAL EDITION",
					'sortName': 'king_of_fighters_98',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'SNK Corporation',
						},
					],
				},
				{
					'title': 'Construction Simulator 2 US - Pocket Edition',
					'sortName': 'construction_simulator_2_us_-_pocket_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Astragon Entertainment',
						},
					],
				},
				{
					'title': 'NASCAR Heat 3',
					'sortName': 'nascar_heat_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '704 Games Company',
						},
					],
				},
				{
					'title': 'Tom Clancy’s The Division® 2',
					'sortName': 'division_2',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Railway Empire',
					'sortName': 'railway_empire',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Dungeons 3',
					'sortName': 'dungeons_03',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Dungeon Defenders II',
					'sortName': 'dungeon_defenders_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Chromatic Games',
						},
					],
				},
				{
					'title': 'Breathedge',
					'sortName': 'breathedge:_space_survival',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'HypeTrain Digital',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'HypeTrain Digital',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'HypeTrain Digital',
						},
					],
				},
				{
					'title': 'Boundless',
					'sortName': 'boundless',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix Collective',
						},
					],
				},
				{
					'title': 'Transport Fever',
					'sortName': 'transport_fever',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'Atomic Heart',
					'sortName': 'atomic_heart',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'DEATH STRANDING',
					'sortName': 'death_stranding_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '505 Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '505 Games',
						},
					],
				},
				{
					'title': 'ATLAS',
					'sortName': 'atlas',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Studio Wildcard',
						},
					],
				},
				{
					'title': 'Dying Light 2 Stay Human: Reloaded Edition',
					'sortName': 'dying_light_02',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Techland sp. z o.o.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Techland sp. z o.o.',
						},
					],
				},
				{
					'title': 'ELEX 2',
					'sortName': 'elex_ii',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'EVERSPACE™ 2',
					'sortName': 'everspace_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rockfish Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Rockfish Games',
						},
					],
				},
				{
					'title': 'Remnant™: From the Ashes',
					'sortName': 'remnant_01',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Gearbox Publishing',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Gearbox Publishing',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Gearbox Publishing',
						},
					],
				},
				{
					'title': 'SYNCED',
					'sortName': 'synced',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NEXT Studios',
						},
					],
				},
				{
					'title': 'Torchlight III',
					'sortName': 'torchlight_03',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gearbox Publishing',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Gearbox Publishing',
						},
					],
				},
				{
					'title': 'Werewolf: The Apocalypse - Earthblood',
					'sortName': 'werewolf:_the_apocalypse_-_earthblood',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Devil May Cry 5',
					'sortName': 'devil_may_cry_5',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': 'GreedFall',
					'sortName': 'greedfall',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'A Plague Tale: Innocence',
					'sortName': 'plague_tale_innocence',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Ring of Elysium',
					'sortName': 'ring_of_elysium',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Tencent',
						},
					],
				},
				{
					'title': 'I am not a Monster: First Contact',
					'sortName': 'i’m_not_a_monster',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Alawar Premium',
						},
					],
				},
				{
					'title': 'Anno 1800™',
					'sortName': 'anno_1800',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Project Winter',
					'sortName': 'project_winter',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Other Ocean',
						},
					],
				},
				{
					'title': 'Far Cry® New Dawn',
					'sortName': 'far_cry_5a',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': '太吾绘卷 The Scroll Of Taiwu',
					'sortName': 'scroll_of_taiwu',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Conch Ship Games',
						},
					],
				},
				{
					'title': "Marvel's Avengers - The Definitive Edition",
					'sortName': "marvel's_avengers",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Crystal Dynamics',
						},
					],
				},
				{
					'title': 'Planet Zoo',
					'sortName': 'planet_zoo',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frontier Developments',
						},
					],
				},
				{
					'title': 'Generation Zero',
					'sortName': 'generation_zero',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Systemic Reaction',
						},
					],
				},
				{
					'title': 'Evil West',
					'sortName': 'evil_west',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Scorn',
					'sortName': 'scorn',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kepler Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kepler Interactive',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Kepler Interactive',
						},
					],
				},
				{
					'title': 'Sword and Fairy 7',
					'sortName': 'sword_and_fairy_7',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Cube Game',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Cube Game',
						},
					],
				},
				{
					'title': 'Northgard',
					'sortName': 'northgard',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Shiro Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Shiro Games',
						},
					],
				},
				{
					'title': 'My Memory of Us',
					'sortName': 'my_memory_of_us',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'IMGN.PRO',
						},
					],
				},
				{
					'title': 'Orwell: Keeping an Eye On You',
					'sortName': 'orwell:_keeping_an_eye_on_you',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Fellow Traveller',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Fellow Traveller',
						},
					],
				},
				{
					'title': 'Chinese Parents',
					'sortName': 'chinese_parents',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Coconut Island Games',
						},
					],
				},
				{
					'title': 'GUILTY GEAR Xrd REV 2',
					'sortName': 'guilty_gear_6',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Arc System Works Co., Ltd.',
						},
					],
				},
				{
					'title': 'Amnesia: The Dark Descent',
					'sortName': 'amnesia:_the_dark_descent',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frictional Games',
						},
					],
				},
				{
					'title': 'Reigns: Game of Thrones',
					'sortName': 'reigns:_game_of_thrones',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'Warhammer 40,000: Mechanicus',
					'sortName': 'warhammer_40,000:_mechanicus',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kasedo Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kasedo Games',
						},
					],
				},
				{
					'title': 'Artifact',
					'sortName': 'artifact',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'RIDE 3',
					'sortName': 'ride_03',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'Deep Sky Derelicts',
					'sortName': 'deep_sky_derelicts',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Farm Together',
					'sortName': 'farm_together',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milkstone Studios',
						},
					],
				},
				{
					'title': 'Industries of Titan',
					'sortName': 'industries_of_titan',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Brace Yourself Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Brace Yourself Games',
						},
					],
				},
				{
					'title': 'Disgaea 5 Complete',
					'sortName': 'disgaea_05',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NIS America',
						},
					],
				},
				{
					'title': 'Infliction Extended Cut',
					'sortName': 'infliction',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Caustic Reality',
						},
					],
				},
				{
					'title': 'Lethal League Blaze',
					'sortName': 'lethal_league_blaze',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team Reptile',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team Reptile',
						},
					],
				},
				{
					'title': 'Twin Mirror',
					'sortName': 'twin_mirror',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': "Don't Nod",
						},
						{
							'appStore': 'STEAM',
							'publisherName': "Don't Nod",
						},
					],
				},
				{
					'title': 'OUTRIDERS',
					'sortName': 'outriders',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Square Enix',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'The Architect Paris',
					'sortName': 'architect_paris',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Enodo Games',
						},
					],
				},
				{
					'title': 'Maneater',
					'sortName': 'maneater',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Tripwire Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Tripwire Interactive',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Tripwire Interactive',
						},
					],
				},
				{
					'title': 'Halo Infinite',
					'sortName': 'halo_infinite',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Dead Island 2',
					'sortName': 'dead_island_02',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Sable',
					'sortName': 'sable',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Raw Fury Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'STAR WARS Jedi: Fallen Order™',
					'sortName': 'star_wars_jedi:_fallen_order',
					'variants': [
						{
							'appStore': 'EA_APP',
							'publisherName': 'Electronic Arts Inc.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Electronic Arts Inc.',
						},
					],
				},
				{
					'title': 'The Surge 2',
					'sortName': 'surge_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'RESIDENT EVIL 3',
					'sortName': 'resident_evil_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': 'PAYDAY 3',
					'sortName': 'payday_3',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Saints Row',
					'sortName': 'saints_row_5',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Vampire The Masquerade: Bloodhunt',
					'sortName': 'vampire_the_masquerade:_bloodhunt',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Sharkmob',
						},
					],
				},
				{
					'title': 'Avatar: Frontiers of Pandora™',
					'sortName': 'avatar:_frontiers_of_pandora',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Second Extinction™',
					'sortName': 'second_extinction',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Systemic Reaction',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Systemic Reaction',
						},
					],
				},
				{
					'title': 'The Legend of Heroes: Trails of Cold Steel',
					'sortName': 'legend_of_heroes_trails_of_cold_steel_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'XSEED JKS, Inc.',
						},
					],
				},
				{
					'title': 'The Legend of Heroes: Trails of Cold Steel II',
					'sortName': 'legend_of_heroes_trails_of_cold_steel_02',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'XSEED JKS, Inc.',
						},
					],
				},
				{
					'title': 'Thief Simulator',
					'sortName': 'thief_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'PlayWay S.A.',
						},
					],
				},
				{
					'title': 'Dungreed',
					'sortName': 'dungreed',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TEAM HORAY',
						},
					],
				},
				{
					'title': 'Mutant Year Zero: Road to Eden',
					'sortName': 'mutant_year_zero:_road_to_eden',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Funcom Oslo A/S',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Thronebreaker: The Witcher® Tales',
					'sortName': 'thronebreaker:_the_witcher_tales',
					'variants': [
						{
							'appStore': 'GOG',
							'publisherName': 'CD PROJEKT RED',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'CD PROJEKT RED',
						},
					],
				},
				{
					'title': 'MUSYNX',
					'sortName': 'musynx',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Zodiac Interactive',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Zodiac Interactive',
						},
					],
				},
				{
					'title': 'Parkitect',
					'sortName': 'parkitect',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Texel Raptor',
						},
					],
				},
				{
					'title': 'Hobo: Tough Life',
					'sortName': 'hobo:_tough_life',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Perun Creative',
						},
					],
				},
				{
					'title': 'FTL: Faster Than Light',
					'sortName': 'ftl_faster_than_light_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Subset Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Subset Games',
						},
					],
				},
				{
					'title': 'Kingdom Two Crowns',
					'sortName': 'kingdom_-_two_crowns',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'DUSK',
					'sortName': 'dusk',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'New Blood Interactive',
						},
					],
				},
				{
					'title': 'War of Rights',
					'sortName': 'war_of_rights',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Campfire Games',
						},
					],
				},
				{
					'title': 'Steel Division 2',
					'sortName': 'steel_division_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eugen Systems',
						},
					],
				},
				{
					'title': 'Monster Energy Supercross - The Official Videogame 2',
					'sortName': 'monster_energy_supercross_-_the_official_videogame_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'Genesis Alpha One Deluxe Edition',
					'sortName': 'genesis_alpha_one_deluxe_edition',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'World War Z: Aftermath',
					'sortName': 'world_war_z_aftermath',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Saber Interactive USA',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Saber Interactive USA',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Saber Interactive USA',
						},
					],
				},
				{
					'title': 'Imperator: Rome',
					'sortName': 'imperator:_rome',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Amazing Cultivation Simulator',
					'sortName': 'amazing_cultivation_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Gamera Game',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Gamera Game',
						},
					],
				},
				{
					'title': 'Onimusha: Warlords',
					'sortName': 'onimusha:_warlords',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': 'Subnautica: Below Zero',
					'sortName': 'subnautica_steam_below_zero',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Unknown Worlds Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Unknown Worlds Entertainment',
						},
					],
				},
				{
					'title': 'Sins of a Solar Empire®: Rebellion',
					'sortName': 'sins_of_a_solar_empire:_rebellion',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Stardock Entertainment',
						},
					],
				},
				{
					'title': 'Foundation',
					'sortName': 'foundation',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Polymorph Games',
						},
					],
				},
				{
					'title': 'Praey for the Gods',
					'sortName': 'praey_for_the_gods',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'No Matter Studios',
						},
					],
				},
				{
					'title': 'Assassin’s Creed® III Remastered',
					'sortName': 'assassins_creed_05_remastered',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Warhammer: Chaosbane',
					'sortName': 'warhammer:_chaosbane',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'MotoGP™19',
					'sortName': 'moto_gp_19',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'Redout: Space Assault',
					'sortName': 'redout:_space_assault',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '34BigThings',
						},
					],
				},
				{
					'title': 'Zombie Army 4',
					'sortName': 'zombie_army_4:_dead_war',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Rebellion',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'MXGP 2019 - The Official Motocross Videogame',
					'sortName': 'mxgp_2019_-_the_official_motocross_videogame',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'Sniper Ghost Warrior Contracts',
					'sortName': 'sniper_ghost_warrior_contracts_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CI Games',
						},
					],
				},
				{
					'title': 'Dawn of Man',
					'sortName': 'dawn_of_man',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Madruga Works',
						},
					],
				},
				{
					'title': 'Dungeon Defenders: Awakened',
					'sortName': 'dungeon_defenders_2_awakened',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Chromatic Games',
						},
					],
				},
				{
					'title': 'Satisfactory',
					'sortName': 'satisfactory',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Coffee Stain Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Coffee Stain Studios',
						},
					],
				},
				{
					'title': 'The Isle',
					'sortName': 'isle',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Afterthought',
						},
					],
				},
				{
					'title': 'Zanki Zero: Last Beginning',
					'sortName': 'zanki_zero:_last_beginning',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'Wolfenstein®: Youngblood™',
					'sortName': 'wolfenstein_iii_a',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Pathway',
					'sortName': 'pathway',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Chucklefish',
						},
					],
				},
				{
					'title': 'Encased',
					'sortName': 'encased:_a_sci-fi_post-apocalyptic_rpg',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Those Who Remain',
					'sortName': 'those_who_remain',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'Tyranny',
					'sortName': 'tyranny',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Super Animal Royale',
					'sortName': 'super_animal_royale',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Modus Games',
						},
					],
				},
				{
					'title': 'MORDHAU',
					'sortName': 'mordhau',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Triternion',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Triternion',
						},
					],
				},
				{
					'title': 'Supraland',
					'sortName': 'supraland',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Supra Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Supra Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Supra Games',
						},
					],
				},
				{
					'title': 'Last Epoch',
					'sortName': 'last_epoch',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eleventh Hour Games',
						},
					],
				},
				{
					'title': 'UBOAT',
					'sortName': 'uboat',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'PlayWay S.A.',
						},
					],
				},
				{
					'title': 'Yuppie Psycho: Executive Edition',
					'sortName': 'yuppie_psycho',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Another Indie',
						},
					],
				},
				{
					'title': 'Rise of Industry',
					'sortName': 'rise_of_industry',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kasedo Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kasedo Games',
						},
					],
				},
				{
					'title': 'Tales of the Neon Sea',
					'sortName': 'tales_of_the_neon_sea',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Thermite Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Thermite Games',
						},
					],
				},
				{
					'title': "Fell Seal: Arbiter's Mark",
					'sortName': "fell_seal:_arbiter's_mark",
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '1C Company',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Splitgate',
					'sortName': 'splitgate',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1047 Games',
						},
					],
				},
				{
					'title': 'KurtzPel',
					'sortName': 'kurtzpel',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'KOG Studio',
						},
					],
				},
				{
					'title': 'Sniper Elite V2 Remastered',
					'sortName': 'sniper_elite_2_remastered',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Rebellion',
						},
					],
				},
				{
					'title': 'Kathy Rain',
					'sortName': 'kathy_rain',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'Do Not Feed the Monkeys',
					'sortName': 'do_not_feed_the_monkeys',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Alawar Premium',
						},
					],
				},
				{
					'title': 'Pax Nova',
					'sortName': 'pax_nova',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'OCTOPATH TRAVELER™',
					'sortName': 'octopath_traveler',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Square Enix',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Square Enix',
						},
					],
				},
				{
					'title': 'Observation',
					'sortName': 'observation',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Devolver Digital',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Devolver Digital',
						},
					],
				},
				{
					'title': 'Age of Wonders III',
					'sortName': 'age_of_wonders_03',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Titan Quest Anniversary Edition',
					'sortName': 'titan_quest_anniversary_edition',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Totally Accurate Battle Simulator',
					'sortName': 'totally_accurate_battle_simulator_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Landfall Games AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Landfall Games AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Landfall Games AB',
						},
					],
				},
				{
					'title': 'American Fugitive',
					'sortName': 'american_fugitive',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Hello Neighbor: Hide and Seek',
					'sortName': 'hello_neighbor:_hide_and_seek',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'tinyBuild',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'TrackMania² Stadium',
					'sortName': 'trackmania_2_stadium',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Session: Skate Sim',
					'sortName': 'session',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Thea 2: The Shattering',
					'sortName': 'thea_2:_the_shattering',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'MuHa Games',
						},
					],
				},
				{
					'title': 'Pathologic 2',
					'sortName': 'pathologic_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'Railroad Corporation',
					'sortName': 'railroad_corporation',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Conan Unconquered',
					'sortName': 'conan_unconquered',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'SpellForce 3: Soul Harvest',
					'sortName': 'spellforce_3:_soul_harvest',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Hell Let Loose',
					'sortName': 'hell_let_loose',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Minion Masters',
					'sortName': 'minion_masters',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'BetaDwarf',
						},
					],
				},
				{
					'title': 'Warhammer 40,000: Inquisitor - Prophecy',
					'sortName': 'warhammer_40,000:_inquisitor_-_prophecy',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'NeoCore Games',
						},
					],
				},
				{
					'title': 'Trover Saves The Universe',
					'sortName': 'trover_saves_the_universe',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Squanch Games',
						},
					],
				},
				{
					'title': 'Quake II',
					'sortName': 'quake_ii',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'id Software, Inc',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'id Software, Inc',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'id Software, Inc',
						},
					],
				},
				{
					'title': 'Tannenberg',
					'sortName': 'tannenberg',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'M2H',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'M2H',
						},
					],
				},
				{
					'title': 'Triton Survival',
					'sortName': 'triton_survival',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'DreamsSoftGames',
						},
					],
				},
				{
					'title': 'Blasphemous',
					'sortName': 'blasphemous',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Gears 5',
					'sortName': 'gears_5',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Shenmue III',
					'sortName': 'shenmue_3',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'DOOM Eternal',
					'sortName': 'doom_eternal',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Ghostwire: Tokyo',
					'sortName': 'ghostwire:_tokyo',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Blair Witch',
					'sortName': 'blair_witch',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bloober Team',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bloober Team',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bloober Team',
						},
					],
				},
				{
					'title': "Baldur's Gate 3",
					'sortName': "baldur's_gate_3",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Larian Studios',
						},
					],
				},
				{
					'title': 'Age of Empires II: Definitive Edition',
					'sortName': 'age_of_empires_ii:_definitive_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Barotrauma',
					'sortName': 'barotrauma',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Daedalic Entertainment GmbH',
						},
					],
				},
				{
					'title': "Tom Clancy's Ghost Recon® Breakpoint",
					'sortName': 'ghost_recon_breakpoint',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Watch Dogs®: Legion',
					'sortName': 'watch_dogs_3',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'Age of Wonders: Planetfall',
					'sortName': 'age_of_wonders:_planetfall',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Dota Underlords',
					'sortName': 'dota_underlords',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Valve Software',
						},
					],
				},
				{
					'title': 'Destiny 2',
					'sortName': 'destiny_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bungie',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bungie',
						},
					],
				},
				{
					'title': 'Gloomhaven',
					'sortName': 'gloomhaven',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Twin Sails Interactive',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Twin Sails Interactive',
						},
					],
				},
				{
					'title': 'SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated',
					'sortName': 'spongebob_squarepants:_battle_for_bikini_bottom_-_rehydrated',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Call to Arms - Gates of Hell: Ostfront',
					'sortName': 'gates_of_hell',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Reset Games Ltd',
						},
					],
				},
				{
					'title': 'Empire of Sin',
					'sortName': 'empire_of_sin',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Chernobylite Enhanced Edition',
					'sortName': 'chernobylite',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'The Farm 51 Group SA',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'The Farm 51 Group SA',
						},
					],
				},
				{
					'title': 'AI: The Somnium Files',
					'sortName': 'ai:_the_somnium_files',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'System Shock',
					'sortName': 'system_shock',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'EARTH DEFENSE FORCE 5',
					'sortName': 'earth_defense_force_5',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'D3 Publisher Inc.',
						},
					],
				},
				{
					'title': 'FIA European Truck Racing Championship',
					'sortName': 'fia_european_truck_racing_championship',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Martha Is Dead',
					'sortName': 'martha_is_dead',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Wired Productions',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'DARKSIDERS: GENESIS',
					'sortName': 'darksiders_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Silver Chains',
					'sortName': 'silver_chains',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
					],
				},
				{
					'title': "Deus Ex: Human Revolution - Director's Cut",
					'sortName': 'deus_ex_3_directors_cut',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eidos Interactive Corp.',
						},
					],
				},
				{
					'title': 'The Dark Pictures Anthology: Man of Medan',
					'sortName': 'dark_pictures_anthology_season1_01',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'BANDAI NAMCO Entertainment Europe S.A.S.',
						},
					],
				},
				{
					'title': 'Immortals Fenyx Rising™',
					'sortName': 'immortals:_fenyx_rising',
					'variants': [
						{
							'appStore': 'UPLAY',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'EPIC',
							'publisherName': 'Ubisoft',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Ubisoft',
						},
					],
				},
				{
					'title': 'WRC 8 FIA World Rally Championship',
					'sortName': 'wrc_08',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Moons of Madness™',
					'sortName': 'moons_of_madness',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Trine 4: The Nightmare Prince',
					'sortName': 'trine_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Modus Games',
						},
					],
				},
				{
					'title': "King's Bounty: The Legend",
					'sortName': "king's_bounty:_the_legend",
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '1C Company',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Men of War: Assault Squad',
					'sortName': 'men_of_war_assault_squad_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Space Rangers HD: A War Apart',
					'sortName': 'space_rangers_hd:_a_war_apart',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Conglomerate 451',
					'sortName': 'conglomerate_451',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': "King's Bounty: Warriors of the North",
					'sortName': "king's_bounty:_warriors_of_the_north",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '1C Company',
						},
					],
				},
				{
					'title': 'Redout: Enhanced Edition',
					'sortName': 'redout:_enhanced_edition',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '34BigThings',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '34BigThings',
						},
					],
				},
				{
					'title': 'Hyperdrive Massacre',
					'sortName': 'hyperdrive_massacre',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': '34BigThings',
						},
					],
				},
				{
					'title': 'Pro Cycling Manager 2019',
					'sortName': 'pro_cycling_manager_2019',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Vampire: The Masquerade® Swansong',
					'sortName': 'vampire:_the_masquerade_swansong',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Blood Bowl 3',
					'sortName': 'blood_bowl_3',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'WRC 9 FIA World Rally Championship',
					'sortName': 'wrc_09',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Nacon',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'TT Isle of Man Ride on the Edge 2',
					'sortName': 'tt_isle_of_man_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'OVERPASS™',
					'sortName': 'overpass',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bigben Interactive',
						},
					],
				},
				{
					'title': 'Bee Simulator',
					'sortName': 'bee_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'The Bradwell Conspiracy',
					'sortName': 'bradwell_consipiracy',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bossa Studios Ltd',
						},
					],
				},
				{
					'title': 'Surgeon Simulator',
					'sortName': 'surgeon_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bossa Studios Ltd',
						},
					],
				},
				{
					'title': 'Cake Bash',
					'sortName': 'cake_bash',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Coatsink',
						},
					],
				},
				{
					'title': 'Recompile',
					'sortName': 'recompile',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Dear Villagers',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Dear Villagers',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Dear Villagers',
						},
					],
				},
				{
					'title': 'ScourgeBringer',
					'sortName': 'scourgebringer',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Dear Villagers',
						},
					],
				},
				{
					'title': 'Saints Row 2',
					'sortName': 'saints_row_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Saints Row®: The Third™ Remastered',
					'sortName': 'saints_row_3_remastered',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Gods Will Fall',
					'sortName': 'gods_will_fall',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Sacred 2 Gold',
					'sortName': 'sacred_2_gold',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Chorus',
					'sortName': 'chorus',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'Windbound',
					'sortName': 'windbound',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Deep Silver',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Deep Silver',
						},
					],
				},
				{
					'title': 'The Dark Crystal: Age of Resistance Tactics',
					'sortName': 'dark_crystal_age_of_resistance_tactics',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'En Masse Entertainment',
						},
					],
				},
				{
					'title': 'Neo Cab',
					'sortName': 'neo_cab',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Fellow Traveller',
						},
					],
				},
				{
					'title': 'Farming Simulator 15',
					'sortName': 'farming_simulator_2015',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'GIANTS Software GmbH',
						},
					],
				},
				{
					'title': 'Blood Bowl: Legendary Edition',
					'sortName': 'blood_bowl_-_legendary_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Pro Cycling Manager 2018',
					'sortName': 'pro_cycling_manager_2018',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Battlefleet Gothic: Armada',
					'sortName': 'battlefleet_gothic:_armada',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Styx: Shards of Darkness',
					'sortName': 'styx_shards_of_darkness',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Wargame: Red Dragon',
					'sortName': 'wargame:_red_dragon',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Eugen Systems',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Eugen Systems',
						},
					],
				},
				{
					'title': 'Wargame: European Escalation',
					'sortName': 'wargame:_european_escalation',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Eugen Systems',
						},
					],
				},
				{
					'title': 'Space Hulk: Deathwing - Enhanced Edition',
					'sortName': 'space_hulk:_deathwing_-_enhanced_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'The Council - Episode 1',
					'sortName': 'council_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Train Fever',
					'sortName': 'train_fever',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': "Black Future '88",
					'sortName': "black_future_'88",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'The Eternal Cylinder',
					'sortName': 'eternal_cylinder',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Good Shepherd Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'Transport Fever® 2',
					'sortName': 'transport_fever_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Good Shepherd Entertainment',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Good Shepherd Entertainment',
						},
					],
				},
				{
					'title': 'Skybolt Zack',
					'sortName': 'skybolt_zack',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Green Man Gaming',
						},
					],
				},
				{
					'title': 'Bridge Constructor Portal™',
					'sortName': 'bridge_constructor_portal',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
					],
				},
				{
					'title': 'Dead Age',
					'sortName': 'dead_age',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
					],
				},
				{
					'title': 'Everreach: Project Eden',
					'sortName': 'everreach:_project_eden',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
					],
				},
				{
					'title': 'Trüberbrook',
					'sortName': 'truberbrook',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Headup Games GmbH & Co KG',
						},
					],
				},
				{
					'title': 'Tropico 5',
					'sortName': 'tropico_5',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Commandos 2 - HD Remaster',
					'sortName': 'commandos_2_-_hd_remaster',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Sudden Strike 4',
					'sortName': 'sudden_strike_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Ride 4',
					'sortName': 'ride_04',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Milestone S.r.l.',
						},
					],
				},
				{
					'title': 'System Shock: Enhanced Edition',
					'sortName': 'system_shock:_enhanced_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Night Dive Studios',
						},
					],
				},
				{
					'title': 'Car Mechanic Simulator 2018',
					'sortName': 'car_mechanic_simulator_2018',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'PlayWay S.A.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'PlayWay S.A.',
						},
					],
				},
				{
					'title': 'Wurm Unlimited',
					'sortName': 'wurm_unlimited',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Plug In Digital',
						},
					],
				},
				{
					'title': 'The Escapists',
					'sortName': 'escapists_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'The Escapists 2',
					'sortName': 'escapists_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Worms™ Reloaded',
					'sortName': 'worms_reloaded',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Worms™ Clan Wars',
					'sortName': 'worms:_clan_wars',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Sheltered',
					'sortName': 'sheltered',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Worms™ Armageddon',
					'sortName': 'worms:_armageddon',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Not The Robots',
					'sortName': 'not_the_robots',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'Party Hard',
					'sortName': 'party_hard',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'SpeedRunners',
					'sortName': 'speedrunners',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'The Final Station',
					'sortName': 'final_station',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'Clustertruck',
					'sortName': 'clustertruck',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'Hellpoint',
					'sortName': 'hellpoint_steam',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'tinyBuild',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'tinyBuild',
						},
					],
				},
				{
					'title': 'The Falconeer',
					'sortName': 'falconeer',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'Conan Chop Chop®',
					'sortName': 'conan_chop_chop',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Secret World Legends',
					'sortName': 'secret_world_legends',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Tales of Arise™',
					'sortName': 'tales_of_arise',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'BANDAI NAMCO Entertainment Europe S.A.S.',
						},
					],
				},
				{
					'title': "The Witcher®: Enhanced Edition Director's Cut",
					'sortName': 'witcher_1_enhanced_edition_directors_cut',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CD PROJEKT RED',
						},
					],
				},
				{
					'title': 'Midnight Ghost Hunt',
					'sortName': 'midnight_ghost_hunt',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Coffee Stain Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Coffee Stain Studios',
						},
					],
				},
				{
					'title': 'Goat Simulator',
					'sortName': 'goat_simulator',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Coffee Stain Studios',
						},
					],
				},
				{
					'title': 'Crysis Remastered',
					'sortName': 'crysis_1_remastered',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Crytek GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Crytek GmbH',
						},
					],
				},
				{
					'title': 'Syberia 3',
					'sortName': 'syberia_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microids',
						},
					],
				},
				{
					'title': "Dragon's Dogma: Dark Arisen",
					'sortName': "dragon's_dogma:_dark_arisen",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'CAPCOM Co., Ltd',
						},
					],
				},
				{
					'title': "Marvel's Midnight Suns",
					'sortName': "marvel's_midnight_suns",
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': '2K',
						},
						{
							'appStore': 'STEAM',
							'publisherName': '2K',
						},
					],
				},
				{
					'title': 'DOOM',
					'sortName': 'doom_(2016)',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'The Elder Scrolls® Online',
					'sortName': 'elder_scrolls_online',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Ylands',
					'sortName': 'ylands',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Bohemia Interactive',
						},
					],
				},
				{
					'title': 'Wargroove',
					'sortName': 'wargroove',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Chucklefish',
						},
					],
				},
				{
					'title': 'The Ascent',
					'sortName': 'ascent',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Hotshot Racing',
					'sortName': 'hotshot_racing',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Curve Games',
						},
					],
				},
				{
					'title': 'Crusader Kings III',
					'sortName': 'crusader_kings_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Steel Division: Normandy 44',
					'sortName': 'steel_division:_normandy_44',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Hearts of Iron II: Complete',
					'sortName': 'hearts_of_iron_ii:_complete',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Europa Universalis III Complete',
					'sortName': 'europa_universalis_iii_complete',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Victoria II',
					'sortName': 'victoria_ii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Darkest Hour: A Hearts of Iron Game',
					'sortName': 'darkest_hour:_a_hearts_of_iron_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Warlock: Master of the Arcane Complete Collection',
					'sortName': 'warlock:_master_of_the_arcane_complete_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Trainz: A New Era',
					'sortName': 'trainz:_a_new_era',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'N3V Games Pty Ltd',
						},
					],
				},
				{
					'title': 'Pro Cycling Manager 2017',
					'sortName': 'pro_cycling_manager_2017',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Focus Entertainment',
						},
					],
				},
				{
					'title': 'Age of Conan: Unchained',
					'sortName': 'age_of_conan:_unchained',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Hide and Shriek™',
					'sortName': 'hide_and_shriek',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Metal: Hellsinger',
					'sortName': 'metal:_hellsinger',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Funcom Oslo A/S',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Funcom Oslo A/S',
						},
					],
				},
				{
					'title': 'Cris Tales',
					'sortName': 'cris_tales',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Modus Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Modus Games',
						},
					],
				},
				{
					'title': 'Lost Words: Beyond the Page',
					'sortName': 'lost_words:_beyond_the_page',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Modus Games',
						},
					],
				},
				{
					'title': 'Yooka-Laylee and the Impossible Lair',
					'sortName': 'yooka-laylee_and_the_impossible_lair',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Team17 Digital Limited',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Team17 Digital Limited',
						},
					],
				},
				{
					'title': 'Vikings – Wolves of Midgard',
					'sortName': 'vikings_–_wolves_of_midgard',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Cube World',
					'sortName': 'cube_world',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Picroma',
						},
					],
				},
				{
					'title': 'TUNIC',
					'sortName': 'tunic',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Finji',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Finji',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Finji',
						},
					],
				},
				{
					'title': 'The Fisherman - Fishing Planet',
					'sortName': 'fisherman_fishing_planet',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Nacon',
						},
					],
				},
				{
					'title': 'Automation - The Car Company Tycoon Game',
					'sortName': 'automation_-_the_car_company_tycoon_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Camshaft Software',
						},
					],
				},
				{
					'title': 'Little Big Workshop',
					'sortName': 'little_big_workshop',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'HandyGames',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'HandyGames',
						},
					],
				},
				{
					'title': 'Cyber Hook',
					'sortName': 'cyber_hook',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Graffiti Games',
						},
					],
				},
				{
					'title': 'Days of War: Definitive Edition',
					'sortName': 'days_of_war',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Graffiti Games',
						},
					],
				},
				{
					'title': 'REZ PLZ',
					'sortName': 'rez_plz',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Graffiti Games',
						},
					],
				},
				{
					'title': 'Gears Tactics',
					'sortName': 'gears_tactics',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Minecraft Dungeons',
					'sortName': 'minecraft_dungeons',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Xbox Game Studios',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Xbox Game Studios',
						},
					],
				},
				{
					'title': 'Disco Elysium',
					'sortName': 'disco_elysium',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'ZA/UM Studio',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'ZA/UM Studio',
						},
					],
				},
				{
					'title': 'Port Royale 4',
					'sortName': 'port_royale_4',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Spacebase Startopia',
					'sortName': 'spacebase_startopia',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Kalypso Media Group GmbH',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Door Kickers: Action Squad',
					'sortName': 'door_kickers:_action_squad',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'KillHouse Games SRL',
						},
					],
				},
				{
					'title': 'Surviving The Aftermath',
					'sortName': 'surviving_the_aftermath',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Paradox Interactive AB',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Paradox Interactive AB',
						},
					],
				},
				{
					'title': 'Overwatch® 2',
					'sortName': 'overwatch_2',
					'variants': [
						{
							'appStore': 'BATTLENET',
							'publisherName': 'Blizzard Entertainment, Inc.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Blizzard Entertainment, Inc.',
						},
					],
				},
				{
					'title': 'Still There',
					'sortName': 'still_there',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Terminator: Resistance',
					'sortName': 'terminator:_resistance',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Reef Entertainment',
						},
					],
				},
				{
					'title': 'Curious Expedition 2',
					'sortName': 'curious_expedition_2',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Thunderful Publishing',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Thunderful Publishing',
						},
					],
				},
				{
					'title': 'Trine Enchanted Edition',
					'sortName': 'trine_1',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frozenbyte Inc',
						},
					],
				},
				{
					'title': 'Trine 2: Complete Story',
					'sortName': 'trine_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Frozenbyte Inc',
						},
					],
				},
				{
					'title': 'Garfield Kart - Furious Racing',
					'sortName': 'garfield_kart_-_furious_racing',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microids',
						},
					],
				},
				{
					'title': 'Asterix & Obelix XXL 3 - The Crystal Menhir',
					'sortName': 'asterix_&_obelix_xxl_3__-_the_crystal_menhir',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microids',
						},
					],
				},
				{
					'title': 'SpellForce - Platinum Edition',
					'sortName': 'spellforce_-_platinum_edition',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Knights of Honor II: Sovereign',
					'sortName': 'knights_of_honor_ii:_sovereign',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'This Is the Police',
					'sortName': 'this_is_the_police',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Gothic® 3',
					'sortName': 'gothic_3',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Jagged Alliance - Back in Action',
					'sortName': 'jagged_alliance_2_e',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Jagged Alliance: Rage!',
					'sortName': 'jagged_alliance:_rage!',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'HandyGames',
						},
					],
				},
				{
					'title': 'The Guild II: Renaissance',
					'sortName': 'guild_2',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'BLACKSAD: Under the Skin',
					'sortName': 'blacksad:_under_the_skin',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microids',
						},
					],
				},
				{
					'title': 'Destroy All Humans!',
					'sortName': 'destroy_all_humans!',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'Destroy All Humans! 2 - Reprobed',
					'sortName': 'destroy_all_humans!_2_-_reprobed',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'The Guild 3',
					'sortName': 'guild_3',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'THQ Nordic',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'THQ Nordic',
						},
					],
				},
				{
					'title': 'XIII',
					'sortName': 'xiii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Microids',
						},
					],
				},
				{
					'title': 'Tropico 4',
					'sortName': 'tropico_4',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'Praetorians - HD Remaster',
					'sortName': 'praetorians_-_hd_remaster',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Kalypso Media Group GmbH',
						},
					],
				},
				{
					'title': 'The Riftbreaker™',
					'sortName': 'riftbreaker',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'EXOR Studios',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'EXOR Studios',
						},
					],
				},
				{
					'title': 'Earth 2160',
					'sortName': 'earth_2160',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Enclave',
					'sortName': 'enclave',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Iron Sky: Invasion',
					'sortName': 'iron_sky:_invasion',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Jagged Alliance 2 - Wildfire',
					'sortName': 'jagged_alliance_2_c',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Knights and Merchants',
					'sortName': 'knights_and_merchants',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': "Jack Orlando: Director's Cut",
					'sortName': "jack_orlando:_director's_cut",
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Planets Under Attack',
					'sortName': 'planets_under_attack',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'TopWare Interactive',
						},
					],
				},
				{
					'title': 'Conception PLUS: Maidens of the Twelve Stars',
					'sortName': 'conception_plus:_maidens_of_the_twelve_stars',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Spike Chunsoft Co., Ltd.',
						},
					],
				},
				{
					'title': 'Mosaic',
					'sortName': 'mosaic',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Raw Fury Games',
						},
					],
				},
				{
					'title': 'Deadliest Catch: The Game',
					'sortName': 'deadliest_catch:_the_game',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'PlayWay S.A.',
						},
					],
				},
				{
					'title': 'Medieval Engineers',
					'sortName': 'medieval_engineers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Keen Software House s. r. o.',
						},
					],
				},
				{
					'title': 'DEATHLOOP®',
					'sortName': 'deathloop',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Bethesda Softworks',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Bethesda Softworks',
						},
					],
				},
				{
					'title': 'Battlestar Galactica Deadlock™',
					'sortName': 'battlestar_galactica_deadlock',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Slitherine Ltd.',
						},
					],
				},
				{
					'title': 'Order of Battle: World War II',
					'sortName': 'order_of_battle:_world_war_ii',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Slitherine Ltd.',
						},
					],
				},
				{
					'title': 'Warhammer 40,000: Gladius - Relics of War',
					'sortName': 'warhammer_40,000:_gladius_-_relics_of_war',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Slitherine Ltd.',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Slitherine Ltd.',
						},
					],
				},
				{
					'title': 'AVICII Invector',
					'sortName': 'avicii_invector',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Wired Productions',
						},
					],
				},
				{
					'title': 'Townsmen - A Kingdom Rebuilt',
					'sortName': 'townsmen_-_a_kingdom_rebuilt',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'HandyGames',
						},
					],
				},
				{
					'title': 'X3: Reunion',
					'sortName': 'x3:_reunion',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EGOSOFT GmbH',
						},
					],
				},
				{
					'title': 'X3: Terran Conflict',
					'sortName': 'x3:_terran_conflict',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EGOSOFT GmbH',
						},
					],
				},
				{
					'title': 'One Hand Clapping',
					'sortName': 'one_hand_clapping',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'HandyGames',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'HandyGames',
						},
					],
				},
				{
					'title': 'X3: Albion Prelude',
					'sortName': 'x3:_albion_prelude',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'EGOSOFT GmbH',
						},
					],
				},
				{
					'title': 'Amnesia: Rebirth',
					'sortName': 'amnesia:_rebirth',
					'variants': [
						{
							'appStore': 'EPIC',
							'publisherName': 'Frictional Games',
						},
						{
							'appStore': 'STEAM',
							'publisherName': 'Frictional Games',
						},
						{
							'appStore': 'XBOX',
							'publisherName': 'Frictional Games',
						},
					],
				},
				{
					'title': 'Headsnatchers',
					'sortName': 'headsnatchers',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Lord of Rigel',
					'sortName': 'lord_of_rigel',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Oriental Empires',
					'sortName': 'oriental_empires',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Iceberg Interactive',
						},
					],
				},
				{
					'title': 'Bright Memory',
					'sortName': 'bright_memory',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'Playism',
						},
					],
				},
				{
					'title': 'Hitman 2: Silent Assassin',
					'sortName': 'hitman_2_silent_assassin',
					'variants': [
						{
							'appStore': 'STEAM',
							'publisherName': 'IO Interactive A/S',
						},
					],
				},
			],
		},
	},
};
