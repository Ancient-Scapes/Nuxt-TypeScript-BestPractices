<template>
  <div>
    <p>test</p>
    <TestComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TestComponent from '~/components/TestComponent.vue'


export default Vue.extend({
  components: { 
    TestComponent
  },
  data () {
    return {
      test: 'page test'
    }
  }
})

</script>

<style scoped>
</style>
