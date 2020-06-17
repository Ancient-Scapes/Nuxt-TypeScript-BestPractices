<template>
  <div>
    <v-app>
      <TheHeader/>
      <TheSidebar/>
      <v-main>
        <v-card elevation="3" class="body">
          <Nuxt />
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import TheHeader from '~/components/TheHeader.vue'
import TheSidebar from '~/components/TheSidebar.vue'

type Data = {}
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
    TheHeader,
    TheSidebar
  },
  data () {}
}
export default Vue.extend(options)
</script>

<style lang="scss">
.body {
  width: 768px;
  margin: 50px 0 0 50px;
  padding: 30px;
}
</style>
