<template>
	<div class="container">
		<div class="row align-items-start">
			<div id="general" class="col">
				
			</div>
			<div id="settings" class="col">
				card info
				<br />
				<input type="color" name="main" id="main_color" v-model="main_color" />
				{{ main_color }}
				<br />
				<input type="color" name="accent" id="accent_color" v-model="accent_color" />
				{{ accent_color }}
				<br />
				<select v-model="chosenClass" placeholder="Back-Icon" style="width: 100%;">
					<option v-for="(cls,i) in classOptions" :value="cls" :key="i">{{cls}}</option>
				</select><br/>
				<input type="text" v-model="card_title">
			</div>
			<div id="display" class="col d-flex">

				<!-- forint of the card -->
				<div class="card card-25-35" :style="card_style">
					<div class="card-title-inlineicon-container">
						<div class="card-title-inlineicon icon-class-bard"></div>
					</div>
					<div class="card-title card-title-13">
						{{card_title}}
					</div>
					<div class="card-content-container">

					</div>
				</div>

				<!-- back of the card -->
				<div class="card card-25-35" :style="card_style">
					<div class="card-back" :style="back_gradient">
						<div class="card-back-inner">
							<div :class="['card-back-icon',iconClass]" :style="card_style">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import class_icons from "../public/assets/scripts/classIcons"

export default {
	name: 'App',
	data() {
		return {
			title: "Test card",
			main_color: "indigo",
			accent_color: "white",
			chosenClass:'Back-Icon',
			classOptions:class_icons,
			card_title:''
		}
	},
	computed: {
		card_style() {
			return {
				'color': this.main_color,
				'border-color': this.main_color,
				'background-color': this.main_color
			}
		},
		back_gradient() {
			return {
				background: `radial-gradient(circle, ${this.accent_color} 20%, ${this.main_color} 120%)`
			}
		},
		iconClass(){
			if (this.chosenClass === 'Back-Icon'){
				return ''
			}
			return `icon-${this.chosenClass}`
		}
	},
	created() {
	}
}
</script>

<style>
* {
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

.card-25-35 {
	width: 2.5in;
	height: 3.5in;
}

.card-50-35 {
	width: 5in;
	height: 3.5in;
}

.card-back {
	border-radius: 4mm;
	border-color: inherit;
	margin: 3mm;
	flex: 1;
	display: flex;
}

.card-back-inner {
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

.card-back-icon {
	width: 1in;
	height: 1in;
	border: 4mm solid;
	border-color: inherit;
	border-radius: 4mm;
	background-repeat: no-repeat;
	background-size: contain;
}

.card-title-inlineicon-container {
	position: absolute;
	right: -1mm;
	top: -1mm;
	border: 1mm solid;
	border-radius: 1mm;
	background-color: inherit;
	border-color: inherit;
}

.card-title-inlineicon {
	width: 7mm;
	height: 7mm;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: inherit;
	border-color: inherit;
}

.card-content-container {
	padding: 2mm;
	padding-top: 1mm;
	border-radius: 2mm;
	margin-top: 0px;
	background-color: white;
	border-color: inherit;
	display: flex;
	flex-direction: column;
	flex: 1;
	font-size: inherit;
}

.card-title {
	height: 8mm;
	padding-left: 2mm;
	font-family: Lora, 'Calisto MT', 'Bookman Old Style', Bookman, 'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;
	font-variant: small-caps;
	font-weight: bold;
	background-color: inherit;
	color: white;
}

.card-title-13 {
	font-size: 13pt;
	line-height: 7mm;
}
</style>
