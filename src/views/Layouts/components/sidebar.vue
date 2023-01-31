<template>
  <div class="py-2 px-4">
    <div class="sidebar">
      <div class="sidebar-header border-2 border-white flex items-center justify-between w-full mb-2">
        <div class="flex flex-grow px-8 justify-around">
          <div class="flex flex-col items-center">
            <pushpin-outlined />

            <span>
              {{ user.posts }}
            </span>
          </div>

          <div class="flex flex-col items-center">
            <edit-outlined />

            <span>
              {{ user.comments }}
            </span>
          </div>

          <div class="flex flex-col items-center">
            <heart-outlined />

            <span>
              {{ user.likes }}
            </span>
          </div>
        </div>

        <div class="sidebar-header-user bg-white w-1/2 flex items-center justify-end py-1 px-2">
          <div class="sidebar-header-user-info flex flex-col mr-2 text-right">
            <span style="line-height: 16px;">
              {{ user.name }}
            </span>
            <span>
              {{ user.login }}
            </span>
            <small>
              -{{ user.id }}
            </small>
          </div>

          <a-avatar
            :src="user.avatar"
            class="border-2 border-gray-600"
            :size="50"
            alt="avatar"
          />
        </div>
      </div>

      <div class="sidebar-buttons flex flex-col items-center">
        <div
          v-for="(button, index) in buttons"
          :key="index"
          class="sidebar-button flex w-full justify-between px-2 cursor-pointer"
        >
          <span class="text-4xl">
            &lt;
          </span>

          <span class="text-3xl">
            {{ button.name }}
          </span>

          <span class="text-4xl">
            &gt;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PushpinOutlined, EditOutlined, HeartOutlined } from '@ant-design/icons-vue'
import UserStore from '../../../store/index'

const buttons = [
  {
    name: 'Профиль',
    pathName: 'Профиль',
  },
  {
    name: 'Лента',
    pathName: 'Лента',
  },
  {
    name: 'Мои посты',
    pathName: 'Мои посты',
  }
]

const user = UserStore()
</script>

<style lang="scss">
.sidebar {
  &-header {
    border-radius: 18px;
    &-user {
      border-radius: 14px;

      &-info {
        span {
          color: black;
          line-height: 16px;
        }

        small {
          color: rgba(0, 0, 0, 0.4);
          line-height: 12px;
        }
      }
    }
   }

  .sidebar-button {
    transition: .3s cubic-bezier(.4,.4,0,1);
  }

  .sidebar-button:hover {
      transform: scale(1.1);
  }
}
</style>