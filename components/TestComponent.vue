<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface User {
  firstName: string
  lastName: number
}

type Data = {
  message: string
}
type Methods = {}
type Computed = {
  fullName: string
}
type Props = {
  user: User
}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      message: 'This is a message'
    }
  },
  computed: {
    fullName () {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
}
export default Vue.extend(options)
</script>
