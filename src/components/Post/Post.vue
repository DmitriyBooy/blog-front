<template>
  <a-card>
    <template #cover>
      <div class="w-full p-2">
        <div class="flex items-start">
          <a-avatar
            class="w-8 h-8 mr-2"
            alt="photo"
            :src="post.creator.avatar"
            style="border: 2px solid rgba(0,0,0,0.4)"
          />

          <span class="font-bold text-xl">
            {{ post.creator.name }}
          </span>
        </div>

      </div>
    </template>

    <p
      class="text-lg hover:text-gray-600 text-gray-400 cursor-pointer"
      style="transition: all 0.3s ease"
    >
      {{ post.content.length > 400 ? `${post.content.slice(0, 397)}...` : post.content }}
    </p>

    <template #actions>
      <dislike-outlined />
      <like-outlined />
      <eye-outlined />
    </template>
  </a-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { PostType } from '@/components/Post/types'
import { LikeOutlined, DislikeOutlined, EyeOutlined } from '@ant-design/icons-vue'

defineProps<{ post: PostType }>()
</script>
