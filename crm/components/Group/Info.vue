<template lang="">
  <ul
    class="w-full min-h-[50px] flex-col md:flex-row bg-opcBlack border-b border-colorPrimary flex md:gap-3 items-start py-2 px-3 md:items-center text-[16px] justify-center h-full"
  >
    <b class="text-colorPrimary py-1 px-2 rounded-md bg-green">{{
      group.name
    }}</b>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>

    <p class="text-activeColor">
      Ustoz:
      <b class="text-lightGreen">{{ group.teacher }} </b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      Fan:
      <b class="text-lightGreen">{{ group.direction }}</b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      O'quvchilar soni:
      <b class="text-lightGreen"> {{ group.studentCount }} ta </b>
    </p>
    <div class="h-[60%] w-[1px] bg-colorPrimary"></div>
    <p class="text-activeColor">
      Bo'ladigan kunlar:
      <b class="text-lightGreen"> {{ group.weekDays }}</b>
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
