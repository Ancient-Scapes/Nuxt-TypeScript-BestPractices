<template>
  <section>
    <h1>Loading Sample(epic-spinners)</h1>

    <v-btn v-if="!isLoadingComplete" @click="isLoadingComplete = true">End Loading</v-btn>
    <v-btn v-else @click="isLoadingComplete = false">Start Loading</v-btn>

    <div class="contents">
      <OrbitSpinner
        v-if="!isLoadingComplete"
        :animation-duration="1200"
        :size="55"
        color="gray"
      />

      <div v-else class="contents__load-complete">
        <p>Loading complete...display something contents here</p>
      </div>
    </div>

    <h2>
      <a href="https://github.com/epicmaxco/epic-spinners">
        Link
      </a>
      <v-icon>mdi-link</v-icon>
    </h2>

  </section>

</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { OrbitSpinner } from 'epic-spinners'

type Data = {
  isLoadingComplete: boolean
}
type Methods = {}
type Computed = {}
type Props = {}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: {
    OrbitSpinner
  },
  data () {
    return {
      isLoadingComplete: false
    }
  }
}
export default Vue.extend(options)
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 15px 0;
}
</style>
