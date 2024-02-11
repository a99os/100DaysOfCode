<template lang="">
  <ul
    class="relative w-full min-h-[50px] flex-col md:flex-row bg-opcBlack border-b border-colorPrimary flex md:gap-3 items-start py-2 px-3 md:items-center text-[16px] justify-center h-full"
  >
    <button
      @click="useRouter().go(-1)"
      class="bg-red py-1 px-2 flex items-center text-[40px] md:absolute left-1 rounded-md hover:opacity-100 opacity-65 text-colorPrimary"
    >
      <i class="bx bx-arrow-back"></i>
    </button>
    <b class="text-colorPrimary mt-2 md:mt-0 py-1 px-2 rounded-md bg-green">{{
      group.name
    }}</b>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>

    <p class="text-activeColor">
      Ustoz:
      <b class="text-lightGreen"
        >{{ group.teachers.map((el) => el.full_name).join(", ") }}
      </b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      Fan:
      <b class="text-lightGreen">{{ group.direction.name }}</b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      O'quvchilar soni:
      <b class="text-lightGreen"> {{ group.students?.length }} ta </b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      Bo'ladigan kunlar:
      <b class="text-lightGreen">
        {{ group?.weekDays?.map((el) => el.name.slice(0, 2)).join(",") }}</b
      >
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      Soat:
      <b class="text-lightGreen"> {{ group.startTime }}</b>
    </p>
  </ul>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useGroupStore } from "@/stores/groups";
const id = useRoute().params.id;
const group = useGroupStore().getGroup(id);
</script>
<style lang=""></style>
