<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    class="sidebar"
  >
    <v-subheader>Contents</v-subheader>
    <v-list flat>
      <v-list-item-group v-model="listStatus" color="indigo">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon class="sidebar__icon" v-text="item.icon"/>
          </v-list-item-icon>

          <v-list-item-content>
            <nuxt-link v-if="item.to" :to="item.to">
              <v-list-item-title class="sidebar__label" v-text="item.text" />
            </nuxt-link>

            <v-list-item-title v-else class="sidebar__label" v-text="item.text"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { ListItem } from '~/assets/interfaces/listItem'
import { listItems } from '~/assets/pages/sidebar-menu-items'

type Data = {
  items: Array<ListItem>
  listStatus: boolean
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
      items: listItems,
      listStatus: true
    }
  }
}
export default Vue.extend(options)
</script>

<style lang="scss">
.sidebar {
  &__icon {
    font-size: 14px;
  }

  &__label {
    font-size: 14px;
  }
}
</style>
