<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-toolbar-title>
					<q-img src="src/assets/logo-itb-latam.svg" width="100px" />
				</q-toolbar-title>
				<div class="text-weight-bold">
					Quasar v{{ $q.version }}
					<q-img
						src="src/assets/logo-quasar.png"
						width="30px"
						class="q-ml-md"
					/>
				</div>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "MainLayout",

	setup() {
		return {};
	},
});
</script>
