<template lang="">
  <div
    class="relative w-[90%] mt-10 px-5 py-10 rounded-md bg-hoverColor mx-auto"
  >
    <div
      class="absolute font-bold px-3 z-[3] text-[16px] text-bgPrimary py-1 -top-[20px] left-5 bg-darkYellow uppercase border border-colorPrimary rounded-md"
    >
      {{ props.student.ind }}. {{ props.student.full_name }}
    </div>

    <ul class="flex flex-wrap gap-y-4 gap-x-2 items-center">
      <!-- <li
        v-for="i in 20"
        :class="i % 5 ? 'bg-green' : 'bg-red'"
        class="px-2 py-1 rounded-md"
      >
        12.02
      </li> -->

      <li
        :class="
          getGroup().lessons[i].attendance.includes(props.student.id)
            ? 'bg-green'
            : 'bg-red'
        "
        v-for="i in Object.keys(getGroup().lessons).sort(
          (a, b) => new Date(a) - new Date(b)
        )"
        class="px-2 py-2 text-colorPrimary rounded-md"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>
<script setup>
function getGroup() {
  return useGroupStore().groups.findLast((el) => el.id == useRoute().params.id);
}
const props = defineProps(["student"]);
</script>
<style lang=""></style>
