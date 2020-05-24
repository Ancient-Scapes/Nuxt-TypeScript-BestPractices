<template>
  <div class="top">
    <TestComponent :user="user" class="top__test" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import TestComponent from '~/components/TestComponent.vue'
import { User } from '~/assets/interfaces/user'

type Data = {
  user: User
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
    TestComponent
  },
  data () {
    return {
      user: {
        firstName: 'kari',
        lastName: 'pori'
      }
    }
  }
}
export default Vue.extend(options)
</script>

<style scoped lang="scss">
.top {
  padding: 80px;

  &__test {
    border: solid 1px red;
  }
}
</style>
