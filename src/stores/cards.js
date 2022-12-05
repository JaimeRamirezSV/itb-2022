import { defineStore } from "pinia";

export const useCardsStore = defineStore( "cards", {
	state : () => ( {
		cards : [
			{
				id    : 1,
				label : "espadas",
				open  : false,
			},
			{
				id    : 2,
				label : "corazones",
				open  : false,
			},
			{
				id    : 3,
				label : "diamantes",
				open  : false,
			},
			{
				id    : 4,
				label : "trebols",
				open  : false,
			},
		],
		symbols : [
			{ label: "espadas", symbol: "♠" },
			{ label: "corazones", symbol: "♥" },
			{ label: "diamantes", symbol: "♦" },
			{ label: "trebols", symbol: "♣" },
		],
		scores : 0
	} ),

	getters : {
		getSymbol : ( state ) => ( label ) => {
			return state.symbols.find( ( symbol ) => symbol.label === label )?.symbol;
		}
	},

	actions : {}
} );
