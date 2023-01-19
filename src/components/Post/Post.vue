<template>
  <div class="post">
    <div class="post-header flex justify-between mb-2">
      <p class="post-header-text text-white px-4 mb-0">
        <span class="text-inherit post-header-text-span">
          <slot name="header-text text-lg"/>
          {{ headerText }}
        </span>
      </p>

      <div class="post-header-icon flex items-center relative overflow-hidden rounded-full">
        <component
          v-if="headerIcon"
          :is="headerIcon"
          class="post-header-icon-left absolute"
        />

        <component
          v-if="headerIcon"
          :is="headerIcon"
          class="post-header-icon-right absolute"
        />
      </div>
    </div>

    <div class="post-body">
      <div class="max-h-[150px] overflow-hidden rounded-[16px]">
        <img
          class="mb-2"
          :src="post.previewImg"
          alt="photo"
          style="width: 100%"
        >
      </div>

      <div class="px-2">
        <div
          class="flex justify-between"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.4)"
        >
          <span class="text-4xl pt-4 text-white">
            {{ post.title }}
          </span>

          <span class="text-4xl pt-4 text-white">
            {{ `${post.views} просмотров` }}
          </span>
        </div>

        <p
          class="text-white"
          style="font-size: 18px"
        >
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { PostType } from '@/components/Post/types'
import IconType, { LikeOutlined, DislikeOutlined, EyeOutlined } from '@ant-design/icons-vue'

defineProps<{
  post: PostType,
  headerText: string,
  headerIcon: typeof IconType,
}>()
</script>

<style lang="scss">
.post {
  padding: 30px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);

  &-header {
    &-text {
      border: 1px solid white;
      border-radius: 16px;
      font-size: 18px;
      overflow: hidden;

      &-span {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1em;
          background-color: white;
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
          transition: opacity 300ms, transform 300ms;
        }
      }
    }

    &-icon {
      background: white;
      height: 25px;
      width: 25px;
      transition: .3s cubic-bezier(.4,.4,0,1);
      padding: 1px;

      &-left{
        color: white;
        transition: .3s cubic-bezier(.4,.4,0,1);
        left: -100px
      }

      &-right{
        color: black;
        transition: .3s cubic-bezier(.4,.4,0,1);
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }

  &:hover {
    .post-header {
      &-text {
        &-span {
          position: relative;

          &::after {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      }

      &-icon {
        border: 1px solid white;
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
}
</style>
