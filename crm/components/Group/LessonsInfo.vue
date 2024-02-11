<template lang="">
  <div
    class="relative w-[90%] mt-10 px-5 py-10 rounded-md bg-hoverColor mx-auto"
  >
    <div
      class="absolute font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 -top-[20px] left-5 bg-colorPrimary border border-colorPrimary rounded-md"
    >
      Darslar soni: {{ 20 }} ta
    </div>
    <div class="flex gap-[10px] absolute -top-[20px] right-5">
      <!-- guruh malumotlarini o'zgarish tugmasi -->
      <button
        @click="() => (useGeneralStore().showGroupAdd = true)"
        class="font-bold px-3 z-[3] text-[16px] text-colorPrimary hover:text-opcBlack py-1 duration-300 bg-red hover:bg-colorPrimary border border-colorPrimary rounded-md"
      >
        <span> ⚙️ <span class="hidden md:inline">O'zgartish</span> </span>
      </button>
      <!-- davomat qilish tugmasi -->
      <button
        @click="() => (useGeneralStore().showAttendance = true)"
        class="font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 duration-300 bg-darkYellow hover:bg-colorPrimary border border-colorPrimary rounded-md"
      >
        <span v-if="true">
          + 📋 <span class="hidden md:inline">Davomat qilish</span>
        </span>
        <span @click="() => (useGeneralStore().showAttendance = true)" v-else>
          📝
          <span class="hidden md:inline">Davomatni o'zgartirish</span></span
        >
      </button>
    </div>
    <ul class="flex flex-wrap gap-y-4 gap-x-2 items-center">
      <li v-for="i in 20" class="px-2 py-1 bg-green rounded-md">12.02</li>
    </ul>
  </div>
</template>
<script setup>
import { useGeneralStore } from "@/stores/general";
</script>
<style lang=""></style>
