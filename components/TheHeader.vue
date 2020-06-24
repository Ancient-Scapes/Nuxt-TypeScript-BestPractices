<template>
  <div>
    <v-app-bar app clipped-left color="primary" class="header">
      <nuxt-link to="/">
        <v-toolbar-title class="white--text header__title">
          <v-icon color="white" class="header__title-icon">mdi-silverware</v-icon>
          <span>Nuxt-TypeScript-Boilerplaete</span>
        </v-toolbar-title>
      </nuxt-link>

      <div class="header__items">
        <a target="_blank" noopener noreferrer href="https://github.com/Ancient-Scapes/Nuxt-TypeScript-BestPractices">
          <v-avatar color="white" size="40">
            <v-icon color="black" class="header__items-icon">mdi-github</v-icon>
          </v-avatar>
        </a>

        <a target="_blank" noopener noreferrer href="https://twitter.com/_Ancient_Scapes">
          <v-avatar color="white" size="40">
            <v-icon color="#00acee" class="header__items-icon">mdi-twitter</v-icon>
          </v-avatar>
        </a>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

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
  data () {
    return {}
  }
}
export default Vue.extend(options)
</script>

<style lang="scss">
.header {
  position: relative;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    &-icon {
      // 本当に嫌だ
      font-size: 20px !important;
      margin-right: 5px;
    }
  }

  &__items {
    position: absolute;
    right: 15px;

    a + a {
      margin-left: 10px;
    }

    &-icon {
      // なんということでしょう
      font-size: 32px !important;
    }
  }
}
</style>
