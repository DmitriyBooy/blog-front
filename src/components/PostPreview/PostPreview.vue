<template>
  <div class="post cursor-pointer">
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
      <div class="max-h-[150px] overflow-hidden rounded-[16px] flex justify-center relative">
        <img
          class="mb-2 post-body-img-blur absolute"
          :src="post.previewImg"
          alt="photo"
        >
        
        <img
          class="mb-2 post-body-img"
          :src="post.previewImg"
          alt="photo"
        >
      </div>

      <div class="px-2 post-body-content">
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

        <p style="font-size: 18px">
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { PostType } from '@/components/PostPreview/types'
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
        transition: .3s cubic-bezier(.4,.4,0,1);
        left: 50%;
        transform: translate(-50%, 0);

        svg {
          path {
            color: black;
          }
        }
      }
    }
  }

  &-body {
    &-img {
      height: 150px;
      transform: scale(2);
      transition: .3s cubic-bezier(.4,.4,0,1);

      &-blur {
        width: 100%;
        top: -50%;
        filter: blur(4px);
        transition: .3s cubic-bezier(.4,.4,0,1);
      }
    }

    &-content {
      p {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  &:hover {
    .post {
      &-header {
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

      &-body {
        &-img {
          transform: scale(2.3);
          &-blur {
            transform: scale(1.05);
          }
        }

        &-content {
          p {
            color: white !important;
            transition: .3s cubic-bezier(.4,.4,0,1);
          }
        }
      }
    }
  }
}
</style>
