<template>
  <div class="app-body bg-black h-screen">
    <router-view/>
  </div>
</template>

<style lang="scss">
*::-webkit-scrollbar {
  cursor: pointer;
  width: 6px;               /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.05);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
</style>
