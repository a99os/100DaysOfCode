<template lang="">
  <div
    class="relative w-[90%] mt-10 px-5 py-10 rounded-md bg-hoverColor mx-auto"
  >
    <div
      class="absolute font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 -top-[20px] left-5 bg-colorPrimary border border-colorPrimary rounded-md"
    >
      Darslar soni: {{ 20 }} ta
    </div>
    <button
      @click="() => (useGeneralStore().showAttendance = true)"
      class="absolute font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 -top-[20px] right-5 duration-300 bg-darkYellow hover:bg-colorPrimary border border-colorPrimary rounded-md"
    >
      <span v-if="true">
        + 📋 <span class="hidden md:inline">Yo'qlama qilish</span>
      </span>
      <span v-else>
        📝
        <span class="hidden md:inline">O'zgartirish</span></span
      >
    </button>
    <ul class="flex flex-wrap gap-y-4 gap-x-2 items-center">
      <li v-for="i in 20" class="px-2 py-1 bg-green rounded-md">12.02</li>
    </ul>
  </div>
</template>
<script setup>
import { useGeneralStore } from "@/stores/general";
</script>
<style lang=""></style>
