<template>


</template>


<template>
  <div class="item-wrapper d-flex flex-column mb-4" @click="onEmmit(card.id)">
    <img 
      :src="require(`@/assets/img/${card.image}`)" class="mb-3"
      :alt="card.image" 
    />
    <h3 class="">{{card.title}}</h3>
    <div class="description">{{ card.description | cutText }} <div><strong>Читать далее ...</strong></div></div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
  },
  methods: {
    onEmmit(id){
      this.$emit('onNavigate', id)
    }
  }
}
</script>
