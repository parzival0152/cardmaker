<template>
	<div class="container">
		<div class="row align-items-start">
			<div id="general" class="col">
				{{CompList}}
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
				<select v-model="TopIcon" placeholder="Back-Icon" style="width: 100%;">
					<option v-for="(cls,i) in classOptions" :value="cls" :key="i">{{cls}}</option>
				</select><br/>
				<select v-model="BackIcon" placeholder="Back-Icon" style="width: 100%;">
					<option v-for="(cls,i) in classOptions" :value="cls" :key="i">{{cls}}</option>
				</select><br/>
				<input type="text" v-model="card_title"><br>
				<textarea cols="30" rows="10" v-model="textIn" class="form-control"></textarea>
			</div>
			<div id="display" class="col d-flex">
				<!-- front of the card -->
				<div class="card card-normal" :style="card_style">
					<div class="card-title-inlineicon-container">
						<div :class="['card-title-inlineicon', TopIconClass]"></div>
					</div>
					<div class="card-title card-title-13">
						{{card_title}}
					</div>
					<div class="card-content-container">
						<component v-for="(comp,i) in CompList" :key="i" :is="comp.type" :content="comp.content"></component>
					</div>
				</div>

				<!-- back of the card -->
				<div class="card card-normal" :style="card_style">
					<div class="card-back" :style="back_gradient">
						<div class="card-back-inner">
							<div :class="['card-back-icon',BackIconClass]" :style="card_style">
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

import TextComp from "./components/TextComp.vue"
import ClassRuler from "./components/ClassRuler.vue"
import BulletComp from "./components/BulletComp.vue" 
import FillComp from "./components/FillComp.vue"
import SubtitleComp from "./components/SubtitleComp.vue"

import UndefComp from "./components/UndefComp.vue"

const matrix = {
	text:'TextComp',
	rule:'ClassRuler',
	bullet:'BulletComp',
	fill:'FillComp',
	subtitle:'SubtitleComp'
}

function translationMatrix(s){
	if(!(s in matrix)){
		return 'UndefComp'
	}
	return matrix[s]
}

export default {
	name: 'App',
	components:{
		TextComp,
		ClassRuler,
		BulletComp,
		FillComp,
		SubtitleComp,
		UndefComp,
	},
	data() {
		return {
			title: "Test card",
			main_color: "#4b0082",
			accent_color: "#ffffff",
			TopIcon:'',
			BackIcon:'',
			classOptions:class_icons,
			card_title:'',
			textIn:'',
			test:['hello there']
		}
	},
	computed: {
		card_style() {
			return {
				'color': this.main_color,
				'border-color': this.main_color,
				'background-color': this.main_color,
				'fill':this.main_color
			}
		},
		back_gradient() {
			return {
				background: `radial-gradient(circle, ${this.accent_color} 20%, ${this.main_color} 120%)`
			}
		},
		BackIconClass(){
			if (this.BackIcon === ''){
				return this.TopIconClass
			}
			return `icon-${this.BackIcon}`
		},
		TopIconClass(){
			if (this.TopIcon === ''){
				return ''
			}
			return `icon-${this.TopIcon}`
		},
		CompList(){
			if(this.textIn===''){return []}
			let basic = this.textIn.split('\n').map(e=>{
				return e.split('|').map(s=>{
					return s.trim()
				})
			})
			return basic.map(b=>{
				return {
					type:translationMatrix(b[0]),
					content:b.slice(1)
				}
			})
		}
	},
	created() {
	}
}
</script>

<style>
textarea{
	font-size: 10px;
}

div#display>div{
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

.card-normal {
	width: 2.5in;
	height: 3.5in;
}

.card-tarot{
	width: 2.75in;
	height: 4.75in;
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
