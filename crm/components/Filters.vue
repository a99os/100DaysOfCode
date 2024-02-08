<template lang="">
  <div
    class="py-3 w-full border-colorPrimary px-4 border-b grid grid-cols-4 gap-[15px]"
  >
    <v-select
      :options="['Active', 'Noactive']"
      placeholder="Holati bo'yicha"
      class=""
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <v-select
      :options="['Ustoz1', 'Ustoz2']"
      placeholder="Uztozlar"
      class=""
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <v-select
      :options="['Matematika', 'Fizika', 'Ingliz tili']"
      placeholder="Fanlar"
      class=""
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <input
      type="search"
      placeholder="🔍 Qidiruv"
      class="rounded-[7px] px-2 outline-none border border-activeColor bg-transparent"
    />
  </div>
</template>
<script setup>
import vSelect from "vue-select";
</script>
<style lang=""></style>
