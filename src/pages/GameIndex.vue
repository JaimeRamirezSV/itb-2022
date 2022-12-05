<template>
	<div class="control">
		<q-btn
			@click="shuffle"
			v-if="!gather"
			outline
			icon-right="swipe_up"
			no-caps
			class="cursor-pointer"
			label="Sortear"
			color="green"
		/>

		<q-btn
			outline
			@click="startGame"
			class="cursor-pointer"
			label="Iniciar"
			no-caps
			color="primary"
			icon-right="play_arrow"
		/>
		<q-badge
			rounded
			:color="cardStore.scores >= 0 ? 'green' : 'red'"
			class="q-py-sm q-px-sm  text-center"
			:label="'Puntos: ' + cardStore.scores"
		/>
	</div>
	<div class="row col-12 q-mt-md">
		<q-badge
			rounded
			color="primary"
			class="q-py-sm q-px-sm text-h6 row justify-center col-md-4 offset-md-4 col-xs-12 text-center"
			:label="state"
		/>
	</div>

	<ul class="cards" :class="[ gather ? 'gather' : 'none' ]">
		<li
			class="card"
			v-for="card in cardStore.cards"
			:class="[ card.open ? 'open' : 'none']"
			:data-order="card.id"
			:key="card.label"
			@click="openCard( card )"
		>
			<div class="face back">
				<!-- Mostrar la parte trasera de la carta -->
			</div>

			<div class="face front">
				<!-- Muestra la parte frontal de la carta -->
				{{ cardStore.getSymbol( card.label ) }}
			</div>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";
import { useCardsStore } from "src/stores/cards";

const cardStore = useCardsStore();
const state    = ref( "¡¡ Presiona iniciar para comenzar !!" );
const gather   = ref( true );
const question = ref( null );
const mode     = ref( "" );
const count    = ref( 0 );
const scores   = ref( 0 );

function shuffle() {
	let newOrder = [
		1,
		2,
		3,
		4
	].sort( () => Math.random() - 0.5 );
	cardStore.cards.map( ( card, index ) => ( card.id = newOrder[ index ] ) );
}

function turnAllCard( state ) {
	cardStore.cards.map( ( card ) => ( card.open = state ) );
}

let startShuffle = () => {
	shuffle();
	if ( count.value++ < 6 ) {
		setTimeout( startShuffle, 300 );
	} else {
		state.value = `¡¡Selecciona ${question.value.label} ${question.value.symbol}!!`;
		mode.value = "respuesta";
	}
};

function startGame() {
	mode.value = "Iniciar";
	question.value = cardStore.symbols[ parseInt( Math.random() * 3 ) ];
	turnAllCard( false );
	gather.value = true;
	state.value = "¿Estás listo?";
	setTimeout( () => {
		gather.value = false;
		state.value = "¡¡Tú misión es...!!";
	}, 2000 );
	setTimeout( () => {
		turnAllCard( true );
		state.value = `¡¡Busca ${question.value.label} ${question.value.symbol}!!`;
	}, 2000 );
	setTimeout( () => {
		turnAllCard( false );
		state.value = "¿Estás listo?";
	}, 4000 );
	count.value = 0;
	setTimeout( () => {
		startShuffle();
	}, 6000 );
}

function openCard( card ) {

	if ( !mode.value.length ){
		startGame();
	}
	if ( mode.value !== "respuesta" ){
		return;
	}

	card.open = !card.open;

	if ( card.label === question.value.label ) {
		cardStore.scores++;
		state.value = `¡¡🤙🤙🤙🦀  Ganaste, tú tienes ${question.value.label} ${question.value.symbol}  🦀🤟🤟🤟!!`;
	} else {
		cardStore.scores--;
		state.value = "¡¡👎👎👎🐧 Perdiste 🐧 👎👎👎!!";
		setTimeout( () => ( turnAllCard( true ) ), 1000 );
	}

	setTimeout( startGame, 3000 );
}
</script>
