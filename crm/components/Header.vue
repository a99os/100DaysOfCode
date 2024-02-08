<template lang="">
  <div
    class="h-[90px] text-[24px] py-2 border-b flex items-center border-colorPrimary"
  >
    <a
      class="p-5 border-r border-colorPrimary hover:bg-hoverColor duration-300"
      href="/"
      >LOGO</a
    >
    <NuxtLink
      class="tracking-[3px] hover:bg-hoverColor duration-300 p-5"
      to="/groups"
      >Guruhlar</NuxtLink
    >
    <NuxtLink
      class="tracking-[3px] hover:bg-hoverColor duration-300 p-5"
      to="/students"
      >O'quvchilar</NuxtLink
    >
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-active {
  color: #f8ac8c;
}
</style>
