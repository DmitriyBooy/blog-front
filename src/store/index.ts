import { defineStore } from 'pinia'

export const UserStore = defineStore('user', {
  state: () => ({
    name: 'White dice',
    login: '@White_dice',
    id: 1,
    avatar: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
    posts: 4,
    comments: 12,
    likes: 33,
  })
})

export default UserStore