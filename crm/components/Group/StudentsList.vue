<template lang="">
  <ul class="py-10 md:py-[100px] block">
    <li v-for="(item, i) in getStudents()">
      <GroupStudentInfo :student="{ ...item, ind: i + 1 }" />
    </li>
  </ul>
</template>
<script setup>
function getStudents() {
  return useGroupStore().groups.findLast((el) => el.id == route.params.id)
    .students;
}
let route = useRoute();

onMounted(() => {
  // if (route.params.id) {
  //   students.value = useGroupStore().groups.findLast(
  //     (el) => el.id == route.params.id
  //   ).students;
  // }
});
</script>
<style lang=""></style>
