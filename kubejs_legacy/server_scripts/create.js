onEvent('recipes', event => {
    // Note to self: Ensure all items here are base Create and vanilla!
    // If you have create stuff and additions, this will remove and override those existing recipes.
    event.remove({id: 'create_sa:netherrack_recipe'})
    event.remove({id: 'create_sa:obsidian_haunting'})
    // compacting
    event.recipes.createCompacting(['minecraft:diamond'], [Item.of('9x minecraft:coal_block'), Fluid.of('minecraft:lava', 250)]).superheated().id('create_customized:renew_diamond')
    event.recipes.createCompacting(['minecraft:coal'], [Item.of('9x minecraft:dried_kelp_block')]).heated().id('create_customized:renew_coal')
    event.recipes.createCompacting(['minecraft:basalt'], [Item.of('minecraft:blue_ice'), Fluid.of('minecraft:lava', 500)]).id('create_customized:compacting_basalt')
    event.recipes.createCompacting(['minecraft:tuff'], [Item.of('18x minecraft:gravel'), Fluid.of('minecraft:lava', 250)]).superheated().id('create_customized:renew_tuff')
    event.recipes.createCompacting(['minecraft:tuff'], [Item.of('9x minecraft:deepslate'), Fluid.of('minecraft:lava', 250)]).heated().id('create_customized:renew_deepslate_tuff')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing(['minecraft:dirt', Item.of('minecraft:flint').withChance(0.10)], 'minecraft:gravel').processingTime(250).id('create_customized:gravel_crushing')
    event.recipes.createCrushing(['minecraft:sand', Item.of('minecraft:clay_ball').withChance(0.05)], 'minecraft:dirt').processingTime(250).id('create_customized:dirt_crushing')
    event.recipes.createCrushing(['4x minecraft:pointed_dripstone', Item.of('minecraft:clay_ball').withChance(0.50), Item.of('create:copper_nugget').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:dripstone_block').processingTime(250).id('create_customized:dripstone_crushing')
    event.recipes.createCrushing([Item.of('create:copper_nugget').withChance(0.05), Item.of('minecraft:gunpowder').withChance(0.10)], ['minecraft:basalt']).id('create_customized:basalt_crushing')
    event.recipes.createCrushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.50), Item.of('minecraft:netherite_scrap').withChance(0.002)], 'minecraft:netherrack').processingTime(250).id('create_customized:netherrack_crushing')
    // filling
    event.recipes.createFilling('minecraft:netherrack', ['minecraft:cobblestone', Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')]).id('create_customized:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('create_customized:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('create_customized:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('create_customized:soul_nametag')
    // mixing 
    event.recipes.createMixing(['minecraft:coarse_dirt'], ['minecraft:dirt', 'minecraft:gravel']).id('create_customized:coarse_dirt')
    // Be3Al2(SiO3)6
    event.recipes.createMixing(['minecraft:emerald'], ['minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget']).superheated().id('create_customized:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing(['minecraft:nether_gold_ore'], ['create:cinder_flour', '18x minecraft:gold_nugget', Fluid.of('minecraft:lava', 250)]).id('create_customized:nether_gold_ore_deco')
})