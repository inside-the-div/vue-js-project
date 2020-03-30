<template>
	<div class="mt-2">
		<div class="jumbotron">
		  <h1 class="display-4 text-center">{{title}}</h1>
		</div>

		<div class="row">
			<div class="col-12 col-lg-6 mb-4" v-for="n in 10">
				<div class="border p-3" >
					<h1>This is title</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolorem cupiditate voluptate accusantium aliquid iure harum ratione sunt nostrum soluta ea, architecto molestiae molestias perferendis commodi quasi repellat consequatur atque totam culpa! Sint aliquid natus hic voluptate asperiores magni, tempora atque officia eveniet, velit est commodi pariatur assumenda voluptatibus.</p>
					<div class="text-right">
						<a href="" class="btn btn-info rounded-0">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
  name:'blogComponent',
  data() {
  	return {
  		title: 'My Blog Page'
  	}
  }
}
</script>
