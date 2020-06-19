<template>
  <div>
    <section>
      <h1>portal-vueを使ったモーダルサンプル</h1>

      <h2>モーダルのレンダリング先(layouts/default.vue)</h2>
      <!-- code -->

      <h2>モーダルの定義(pages/modal.vue)</h2>
      <!-- code -->

      <h2>サンプル</h2>

      <v-btn @click="isMessageOpen = true">モーダルを開く</v-btn>

      <portal v-if="isMessageOpen" to="message">
        <div class="modal">
          <div class="modal__contents">
            <v-card class="modal__card">
              <p class="modal__message">メッセージ</p>

              <div class="modal__buttons">
                <v-btn @click="isMessageOpen = false">
                  OK
                </v-btn>

                <v-btn @click="isMessageOpen = false">
                  キャンセル
                </v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </portal>

    </section>

  </div>
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
  // Vuetify z-index vs Modal z-index
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  &__contents {
    display: inline-flex;
    margin: auto;
  }

  &__card {
    padding: 60px 150px;
  }

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
