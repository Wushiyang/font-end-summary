<template>
	<transition-group name="flip" tag="div" class="zoom-carousel">
		<img v-for="(item, ind) in imgs" :src="item.url" :alt="item.alt" :key="item.id">
	</transition-group>
</template>

<script>
export default {
	name: 'ZoomCarousel',
	data(){
		return {
			imgs: [],
			timer: null
		}
	},
	created(){
		this.imgs = Object.assign([], this.data)
		this.timer = setInterval(this.rotate, 1000)
	},
	methods: {
		rotate(){
			let arr = this.imgs
			arr.push(arr.splice(0, 1)[0])
			this.imgs = arr
		}
	},
	props: {
		data: {
			required: true,
			type: Array
		},
		curDisplay: {
			type: Number,
			default: 0
		},
		autoPlay: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 3000
		}
	}
}
</script>

<style lang="stylus" scoped>
.flip-move{
	transition: transform 1s
}
.zoom-carousel
	display flex
	justify-content space-between
	width 1200px
	img
		width 25%

</style>
