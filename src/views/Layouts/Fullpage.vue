<template>
  <div class="h-screen">
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

    <div class="flex justify-center py-2">
      <div
        class="page-body relative container"
        style="max-height: 100%"
      >
        <div class="h-full overflow-y-scroll">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
