<template lang="">
  <div
    class="h-[60px] md:h-[90px] md:text-[24px] py-2 border-b flex items-center border-colorPrimary"
  >
    <a
      class="p-3 md:p-5 border-r border-colorPrimary hover:bg-hoverColor duration-300"
      href="/"
      >LOGO</a
    >
    <NuxtLink
      class="tracking-[3px] flex gap-3 items-center hover:bg-hoverColor duration-300 p-3 md:p-5"
      to="/groups"
      ><i class="bx bxs-data text-[20px]"></i>
      <h1 class="hidden md:block">Guruhlar</h1></NuxtLink
    ><NuxtLink
      class="tracking-[3px] flex gap-3 items-center hover:bg-hoverColor duration-300 p-3 md:p-5"
      to="/students"
      ><i class="bx bx-group text-[20px]"></i>
      <h1 class="hidden md:block">O'quvchilar</h1></NuxtLink
    >
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-active {
  color: #f8ac8c;
}
</style>
