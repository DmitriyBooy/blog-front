<template>
  <div>
    <div class="flex justify-center w-full px-2">
      <div class="container py-1 flex items-center justify-between px-8">
        <div class="flex gap-2">
          <b-button>
            <span class="text-lg mr-16">
              Лента
            </span>
          </b-button>
        </div>

        <div class="flex gap-2">
          <b-button :icon="LoginOutlined">
            Войти
          </b-button>

          <b-button :icon="UserAddOutlined">
            Регистрация
          </b-button>
        </div>
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
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons-vue'
import BButton from '@/components/BButton.vue'

const router = useRouter()

const goTo = (target: string): void => {
  router.push({
    name: target
  })
}
</script>
