<template lang="">
  <div>
    <ul class="grid md:grid-cols-4 gap-4 p-5">
      <GroupCard v-for="i in groups" :data="i" />
    </ul>
  </div>
</template>
<script setup>
import { useGroupStore } from "@/stores/groups";
const groups = useGroupStore().groups;
</script>
<style lang=""></style>
