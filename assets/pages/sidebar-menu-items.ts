import { ListItem } from '~/assets/interfaces/listItem'

export const listItems: Array<ListItem> = [
  {
    icon: 'mdi-arrange-bring-forward',
    text: 'Modal',
    to: '/modal'
  },
  {
    // loading iconはなんか違う
    icon: 'mdi-reload',
    text: 'Loading',
    to: '/loading'
  }
]
