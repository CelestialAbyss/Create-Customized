ServerEvents.recipes(event => {
    event.shaped('create:andesite_alloy', [
        'NA',
        'AN'
    ], {
        N: 'minecraft:iron_nugget',
        A: 'minecraft:andesite'
    }).id('create:crafting/materials/andesite_alloy')

    event.shaped('create:andesite_alloy', [
        'NA',
        'AN'
    ], {
        N: 'create:zinc_nugget',
        A: 'minecraft:andesite'
    }).id('create:crafting/materials/andesite_alloy_from_zinc')

    event.shapeless('create:depot', [
        'create:andesite_alloy',
        'create:andesite_casing'
    ]).id('create:crafting/kinetics/depot')

    event.shaped('8x create:shaft', [
        'A',
        'A'
    ], {
        A: 'create:andesite_alloy'
    }).id('create:crafting/kinetics/shaft')

    event.shapeless('create:cogwheel', [
        'create:shaft',
        '#minecraft:planks'
    ]).id('create:crafting/kinetics/cogwheel')

    event.shapeless('create:large_cogwheel', [
        'create:cogwheel',
        '#minecraft:planks'
    ]).id('create:crafting/kinetics/large_cogwheel_from_little')

    event.shapeless('create:large_cogwheel', [
        'create:shaft',
        '#minecraft:planks',
        '#minecraft:planks'
    ]).id('create:crafting/kinetics/large_cogwheel')

    event.shaped('create:wrench', [
        'GG',
        'GC',
        ' S'
    ], {
        G: '#forge:plates/gold',
        C: 'create:cogwheel',
        S: '#forge:rods/wooden'
    }).id('create:crafting/kinetics/wrench')

    event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
        ' AAA ',
        'AAPAA',
        'APSPA',
        'AAPAA',
        ' AAA '
    ], {
        A: 'create:andesite_alloy',
        P: '#minecraft:planks',
        S: '#forge:stone'
    }).id('create:mechanical_crafting/crushing_wheel')

    event.recipes.createSequencedAssembly([
        Item.of('create:precision_mechanism').withChance(120.0),
        Item.of('create:golden_sheet').withChance(8.0),
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('minecraft:gold_nugget').withChance(3.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_raw_gold').withChance(2.0),
        'minecraft:iron_ingot',
        'minecraft:clock'
    ], 'create:golden_sheet', [
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(3).id('create:sequenced_assembly/precision_mechanism')

    event.recipes.createCrushing([
        'create:powdered_obsidian',
        Item.of('minecraft:obsidian').withChance(0.75)
    ], 'minecraft:obsidian').processingTime(500).id('create:crushing/obsidian')

    event.recipes.createSequencedAssembly([
        'create:sturdy_sheet'
    ], 'create:powdered_obsidian', [
        event.recipes.createFilling(['create:unprocessed_obsidian_sheet'], ['create:unprocessed_obsidian_sheet', Fluid.of('minecraft:lava', 500)]),
        event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
        event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet')
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1).id('create:sequenced_assembly/sturdy_sheet')
})
