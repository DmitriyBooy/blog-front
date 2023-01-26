<template>
  <div class="b-button cursor-pointer overflow-hidden">
    <div class="b-button-body flex h-full items-center px-2 justify-between">
      <p class="b-button-body-text font-medium text-lg mb-0 mr-6">
        <slot />
      </p>

      <div
        class="b-button-body-icons rounded-full flex items-center justify-center relative overflow-hidden"
      >
        <right-outlined
          v-if="!icon"
          class="b-button-body-icons-left absolute"
        />

        <right-outlined
          v-if="!icon"
          class="b-button-body-icons-right absolute"
        />

        <component
          v-if="icon"
          :is="icon"
          class="b-button-body-icons-right absolute"
        />

        <component
          v-if="icon"
          :is="icon"
          class="b-button-body-icons-left absolute"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconType, { RightOutlined } from '@ant-design/icons-vue'
import { defineProps } from 'vue'

defineProps<{ icon?: typeof IconType }>()
</script>

<style lang="scss">
.b-button {
  transition: .3s cubic-bezier(.4,.4,0,1);
  border: 1px solid white;
  border-radius: 20px;
  padding: 3px;
  height: 42px;

  &-body {
    border-radius: 24px;
    border: 1px solid white;

    &-text {
      color: white
    }

    &-icons {
      background: white;
      padding: 1px;
      width: 25px;
      height: 25px;
      transition: .3s cubic-bezier(.4,.4,0,1);

      &-left {
        transition: .3s cubic-bezier(.4,.4,0,1);
        color: white !important;
        left: -100px
      }

      &-right {
        transition: .3s cubic-bezier(.4,.4,0,1);
        left: 50%;
        transform: translate(-50%, 0);

        svg {
          path {
            color: black !important;
          }
        }
      }
    }
  }

  &:hover {
    .b-button-body {
      transition: .3s cubic-bezier(.4,.4,0,1);
      background-color: white;

      &-text {
        color: black
      }

      &-icons {
        background: black;

        &-left {
          left: 50%;
          transform: translate(-50%, 0);
          position: absolute;
        }

        &-right {
          left: 100px
        }
      }
    }
  }

  span {
    color: inherit;
  }

  &-text {
    transition: .3s cubic-bezier(.4,.4,0,1);
  }

  &-icon {
    transition: .3s cubic-bezier(.4,.4,0,1);
  }
}
</style>
