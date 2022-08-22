<template>
	<div class="container">
		<div class="row align-items-start">
			<div id="general" class="col">
				general settings
			</div>
			<div id="settings" class="col">
				card info
				<br />
				<input type="color" name="main" id="main_color" v-model="main_color"/>
				{{ main_color }}
				<br />
				<input type="color" name="accent" id="accent_color" v-model="accent_color" />
				{{ accent_color }}
				<br />
			</div>
			<div id="display" class="col d-flex">
				<div class="card card-25-35" :style="card_style">front of card</div>
				<div class="card card-25-35" :style="card_style">
					<div class="card-back" :style="back_gradient"><div class="card-back-inner">
						
							<div class="card-back-icon" :style="card_style"></div>
						
					</div></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//const style = `radial-gradient(ellipse at center, ${this.accent_color} 0%, ${this.main_color} 120%);`

export default {
	name: 'App',
	data() {
		return {
			title: "Test card",
			main_color: "indigo",
			accent_color: "white",

		}
	},
	computed: {
		card_style(){
			return{
				'border-color':this.main_color,
				'background-color':this.main_color
			}
		},
		back_gradient() {
			return {
				background: `radial-gradient(circle, ${this.accent_color} 20%, ${this.main_color} 120%)`
			}
		}
	},
	created() {
		console.log(this.style)
	}
}
</script>

<style>
*{
	margin: 5px;
}

.card {
	border: 2mm solid;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	font-size: 8pt;
	overflow: hidden;
	border-radius: 8px;
}

.card-25-35{
	width: 2.5in;
	height: 3.5in;
}

.card-50-35{
	width: 5in;
	height: 3.5in;
}

.card-back{
	border-radius: 4mm;
	border-color: inherit;
	margin: 3mm;
	flex:1;
	display: flex;
}

.card-back-inner{
	margin: 3mm;
	border: 1mm solid;
	border-color: inherit;
	border-radius: 4mm;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.card-back-icon{
	width: 1in;
	height: 1in;
	border: 4mm solid;
	border-color: inherit;
	border-radius: 4mm;
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
