<template>
  <div
    class="b-button cursor-pointer overflow-hidden"
    @mouseenter="mouseEnter = true"
    @mouseleave="mouseEnter = false"
    style="padding: 3px; height: 42px"
  >
    <div
      class="flex h-full items-center px-2 justify-between"
      :class="mouseEnter ? 'bg-white' : 'bg-black'"
      style="border-radius: 24px; border: 1px solid white"
    >
      <p
        class="b-button-text font-medium mb-0 mr-2"
        :class="mouseEnter ? 'text-black' : 'text-white'"
      >
        <slot />
      </p>

      <div
        class="rounded-full flex items-center justify-center relative overflow-hidden"
        :class="mouseEnter ? 'bg-black' : 'bg-white'"
        style="padding: 1px; width: 25px; height: 25px; transition: .3s cubic-bezier(.4,.4,0,1)"
      >
        <right-outlined
          class="b-button-icon text-black absolute"
          style="transition: .3s cubic-bezier(.4,.4,0,1)"
          :style="{
            transform: `translate(${ mouseEnter ? '100px' : 0 },0)`
          }"
        />

        <right-outlined
          class="b-button-icon text-white absolute"
          style="transition: .3s cubic-bezier(.4,.4,0,1)"
          :style="{
            transform: `translate(${ mouseEnter ? 0 : '-100px' },0)`
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RightOutlined } from '@ant-design/icons-vue'
import { ref, Ref } from 'vue'

let mouseEnter: Ref<boolean> = ref(false)

</script>

<style lang="scss">
.b-button {
  transition: .3s cubic-bezier(.4,.4,0,1);
  border: 1px solid white;
  border-radius: 20px;

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
