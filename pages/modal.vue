<template>
  <section>
    <h1>portal-vueを使ったモーダルサンプル</h1>

    <v-btn @click="isMessageOpen = true">モーダルを開く</v-btn>

    <portal v-if="isMessageOpen" to="message">
      <v-dialog v-model="isMessageOpen">
        <v-card class="modal">
          <p class="modal__message">メッセージ</p>

          <div class="modal__buttons">
            <v-btn @click="isMessageOpen = false">
              OK
            </v-btn>

            <v-btn color="error" @click="isMessageOpen = false">
              キャンセル
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </portal>
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
.heading-link {
  display: flex;
  margin-bottom: 22px;

  i {
    margin-left: 10px;
  }
}

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
