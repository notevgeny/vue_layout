<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        
        <layout-item
          v-for="card in layouts"
          :key="card.id"
          :card="card"
          @onNavigate="navigate"
        />
      
      </div>
    </div>
  </div>
</template>

<script>
import LayoutItem from "@/components/LayoutItem.vue";


export default {
  components: { LayoutItem },
  computed: {
    layouts(){
      return this.$store.getters["getLayouts"]
    }
  },
  methods: {
    navigate(id){
      this.$router.push({name: 'layouts', params: {id: id}})
    }
  }
};
</script>