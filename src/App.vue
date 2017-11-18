<template>
	<div class="id">
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/todo"><div class="svgbtn todobtn"></div></router-link>
			</div>
			<div class="tab-item">
				<router-link to="/fit"><div class="svgbtn fitbtn"></div></router-link>
			</div>
			<div class="tab-item">
				<router-link tab="/div" to="music"><div class="svgbtn musicbtn"></div></router-link>
			</div>
		</div>
		<!-- 保存被切换的组件状态，避免重新渲染 -->
		<keep-alive>
			<router-view ></router-view>
		</keep-alive>
	</div>
</template>

<script type="ecmascript-6">
export default {
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl'

html, body
	height:100%
	width:100%
	font-family: Avenir,Helvetica,Arial,sans-serif;
	.tab
		display: flex
		width: 100%
		height: 45px
		border_1px(rgba(7, 17, 27, 0.1))
		.tab-item
			flex: 1
			text-align: center
			.svgbtn
				display: block
				width:100%
				height:45px
				line-height:45px
			& > a
				display: block
				height: 45px
			.todobtn
				background: url("../static/icon/todo.svg") no-repeat center center
			.router-link-active > .todobtn
				background: url("../static/icon/todo-a.svg") no-repeat center center
			.fitbtn
				background: url("../static/icon/weight.svg") no-repeat center center
			.router-link-active > .fitbtn
				background: url("../static/icon/weight-a.svg") no-repeat center center
			.musicbtn
				background: url("../static/icon/music.svg") no-repeat center center
			.router-link-active > .musicbtn
				background: url("../static/icon/music-a.svg") no-repeat center center
</style>
