<template>
  <div>
    <div class="flex justify-center w-full px-2">
      <div class="container flex items-center justify-between px-8">
        <div class="flex gap-2">
          <b-button>
            <span class="text-lg">
              Лента
            </span>
          </b-button>
        </div>

        <a-button
          class="text-white"
          type="primary"
          @mouseenter="e"
        >
          Login
          {{asd}}
        </a-button>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import BButton from '@/components/BButton.vue'

const router = useRouter()

const goTo = (target: string): void => {
  router.push({
    name: target
  })
}
</script>
