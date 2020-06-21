<template>
  <section>
    <h1>Modal Sample(portal-vue)</h1>

    <v-btn @click="isMessageOpen = true">Open Modal</v-btn>

    <portal v-if="isMessageOpen" to="message">
      <v-dialog v-model="isMessageOpen">
        <v-card class="modal">
          <p class="modal__message">Message here</p>

          <div class="modal__buttons">
            <v-btn @click="isMessageOpen = false">
              OK
            </v-btn>

            <v-btn color="error" @click="isMessageOpen = false">
              Cancel
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </portal>

    <h2>
      <a href="https://github.com/LinusBorg/portal-vue">
        Link
      </a>
      <v-icon>mdi-link</v-icon>
    </h2>
  </section>

</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  isMessageOpen: boolean
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
  data () {
    return {
      isMessageOpen: false
    }
  }
}
export default Vue.extend(options)
</script>

<style lang="scss" scoped>
.modal {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__message {
    margin-bottom: 50px;
  }

  &__buttons {
    button + button {
      margin-left: 30px;
    }
  }
}
</style>
