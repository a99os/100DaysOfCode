<template lang="">
  <div
    class="py-3 w-full border-colorPrimary px-4 border-b grid md:grid-cols-5 gap-[15px]"
  >
    <v-select
      :options="['Active', 'Noactive']"
      placeholder="Holati bo'yicha"
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <v-select
      :options="['Ustoz1', 'Ustoz2']"
      placeholder="Uztozlar"
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <v-select
      :options="['Matematika', 'Fizika', 'Ingliz tili']"
      placeholder="Fanlar"
      :closeOnSelect="false"
      :multiple="true"
    ></v-select>
    <input
      type="search"
      placeholder="🔍 Qidiruv"
      class="rounded-[7px] px-2 outline-none border border-activeColor bg-transparent"
    />
    <button
      @click="useGeneralStore().showGroupAdd = true"
      class="bg-green rounded-md font-bold text-[20px] opacity-90 hover:opacity-100 duration-300"
    >
      + Guruh qo'shish
    </button>
  </div>
</template>
<script setup>
import vSelect from "vue-select";
</script>
<style lang=""></style>
