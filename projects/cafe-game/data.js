
//recipes
var recipes = {
	"recipes":[
	{
		"name":"dough",
		"ingredients":["flour","water"], 
		"actions":"mixer",
		"type":"ingredient",
		"further-actions":{
			"pot":"bagel",
			"oven":"bread",
			"pan":"fried_dough"
		}
	},
	{
		"name":"bread",
		"ingredients":["dough"], 
		"actions":"oven",
		"type":"ingredient",
		"further-actions":{
			"cutter":"sliced_bread"
		}
	},
	{
		"name":"fried_dough",
		"ingredients":["dough"], 
		"actions":"pan",
		"type":"dish",
		"further-actions":{
			
		}
	},
	{
		"name":"bagel",
		"ingredients":["dough"], 
		"actions":"oven",
		"type":"ingredient",
		"further-actions":{
		}
	},
	{
		"name":"sugar",
		"type":"baseIngredient"
	},
	{
		"name":"flour",
		"type":"baseIngredient"
	},
	{
		"name":"water",
		"type":"baseIngredient"
	},
	{
		"name":"egg",
		"type":"baseIngredient"
	},
	{
		"name":"apple",
		"type":"baseIngredient"
	},
	{
		"name":"citron",
		"type":"baseIngredient"
	}
]};


var inventory = {
	"inventory":[
	{
		"name":"flour",
		"unlimited":true,
		"qty":0
	},
	{
		"name":"water",
		"unlimited":true,
		"qty":0
	},
	{
		"name":"egg",
		"unlimited":true,
		"qty":0
	},
	{
		"name":"sugar",
		"unlimited":true,
		"qty":0
	}
]};

var appliances = [
	{
		"name":"pan",
		"tlx":227,
		"tly":100,
		"brx":320,
		"bry":139,
		"width":0,
		"height":0,
		"contents":[]
	},
	{
		"name":"mixer",
		"tlx":236,
		"tly":17,
		"brx":386,
		"bry":144,
		"width":0,
		"height":0,
		"contents":[]
	}
];