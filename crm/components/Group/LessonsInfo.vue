<template lang="">
  <div
    class="relative w-[90%] mt-10 px-5 py-10 rounded-md bg-hoverColor mx-auto"
  >
    <div
      class="absolute font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 -top-[20px] left-5 bg-colorPrimary border border-colorPrimary rounded-md"
    >
      <span class="hidden md:block">
        Darslar soni:
        {{ Object.keys(getGroup().lessons).length }}
        ta </span
      ><span class="md:hidden">
        📚: {{ getGroup().lessons?.length || 0 }} ta
      </span>
    </div>
    <div class="flex gap-[10px] absolute -top-[20px] right-5">
      <!-- guruh malumotlarini o'zgarish tugmasi -->
      <button
        @click="() => (useGeneralStore().showGroupAdd = true)"
        class="font-bold px-3 z-[3] text-[16px] text-colorPrimary hover:text-red hover:border-red py-1 duration-300 bg-red hover:bg-colorPrimary border border-colorPrimary rounded-md"
      >
        <span>
          ⚙️ <span class="hidden md:inline">Guruhni o'zgartish</span>
        </span>
      </button>
      <!-- davomat qilish tugmasi -->
      <button
        @click="() => (useGeneralStore().showAttendance = true)"
        class="font-bold px-3 z-[3] text-[16px] text-colorPrimary hover:text-blue hover:border-blue py-1 duration-300 bg-blue hover:bg-colorPrimary border border-colorPrimary rounded-md"
      >
        <!-- {{ useGroupStore().getLessonToday() }} -->
        <span v-if="!useGroupStore().getLessonToday()">
          + 📋 <span class="hidden md:inline">Davomat qilish</span>
        </span>
        <span @click="() => (useGeneralStore().showAttendance = true)" v-else>
          📝
          <span class="hidden md:inline">Davomatni o'zgartirish</span></span
        >
      </button>
    </div>
    <ul
      class="flex flex-wrap text-[20px] font-bold gap-y-4 gap-x-2 items-center"
    >
      <li
        v-for="i in Object.keys(getGroup().lessons).sort(
          (a, b) => new Date(a) - new Date(b)
        )"
        class="px-2 py-2 bg-green text-colorPrimary rounded-md"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useGeneralStore } from "@/stores/general";
function getGroup() {
  return useGroupStore().groups.findLast((el) => el.id == useRoute().params.id);
}
</script>
<style lang=""></style>
