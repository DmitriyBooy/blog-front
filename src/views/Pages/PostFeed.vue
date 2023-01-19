<template>
  <div class="flex flex-col px-4 gap-y-2">
    <post
      v-for="post in feedNews"
      :key="post.id"
      :post="post"
      :header-icon="EyeOutlined"
      header-text="Смотреть"
    />
  </div>
</template>

<script lang="ts" setup>
import { PostType } from '@/components/Post/types'
import Post from '../../components/Post/Post.vue'
import { EyeOutlined } from'@ant-design/icons-vue'

const feedNews: Array<PostType> = [
  {
    title: 'Title-1',
    content: `Что такое Lorem Ipsum?\n Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
    previewImg: 'https://cdn.discordapp.com/attachments/639978815895896093/1065740381989392444/617fd6830ac1dfb48b4e95a3e1e230d9.jpg',
    creator: {
      avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg',
      name: 'Name-1'
    },
    id: 1,
    views: 1,
  },
  {
    title: 'Title-2',
    content: `Почему он используется?\n Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).`,
    creator: {
      avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg',
      name: 'Name-2'
    },
    previewImg: 'https://cdn.discordapp.com/attachments/639978815895896093/1065740382224257085/1655235885170387376.jpg',
    id: 2,
    views: 4,
  }
]
</script>
