import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("creative_worldshaper", {
  "type": "create:mechanical_crafting",
  "pattern": [
    "CPUSSS",
    "II    "
  ],
  "key": {
    "C": {
      "item": "extendedcrafting:the_ultimate_catalyst"
    },
    "S": {
      "item": "create:sturdy_sheet"
    },
    "U": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "I": {
      "item": "extendedcrafting:the_ultimate_ingot"
    }
  },
"result": {
    "item": "create:handheld_worldshaper",
    "count": 1
  },
  "acceptMirrored": true
}
);