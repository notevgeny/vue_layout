import Vue from 'vue'

Vue.filter('cutText', (value) => {

  return value.length > 420
    ? value.slice(0, 450)
    : value; 
})