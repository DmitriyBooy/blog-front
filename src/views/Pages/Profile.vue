<template>
  <div class="pt-2 px-8">
    <div class="flex gap-2">
      <a-avatar
        :src="user.avatar"
        alt="user-profile"
        :size="150"
      />

      <div class="flex flex-col">
        <span class="text-3xl">
          {{ user.name }}
        </span>

        <span class="text-xl">
          ({{ user.id }})
        </span>
      </div>
    </div>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { UserStore } from '../../store/index'

const user = UserStore()
</script>
