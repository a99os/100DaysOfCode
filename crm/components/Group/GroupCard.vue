<template lang="">
  <NuxtLink
    :to="`/groups/${props.data.id}`"
    class="w-full h-[200px] flex group items-center relative rounded-lg bg-cover bg-hoverColor overflow-hidden"
  >
    <img
      src="/groups/default.jpeg"
      alt=""
      class="absolute w-full h-full group-hover:scale-125 duration-300"
    />
    <div class="absolute px-3 z-[3] text-[20px] py-1 top-0 bg-green rounded-md">
      {{ props.data.name }}
    </div>

    <div
      class="relative text-[13px] group-hover:pt-[50px] items-center group-hover:text-[20px] z-[2] w-full px-5 bg-opcBlack grid grid-cols-2 h-[120px] group-hover:h-full duration-300"
    >
      <div class="flex col-span-2 items-center gap-[5px]">
        <i class="bx bx-user-circle"></i>
        <p class="uppercase leading-[20px]">
          {{ props.data.mainTeacher?.full_name }}
        </p>
      </div>
      <div class="flex items-center gap-[5px]">
        <i class="bx bxs-group"></i>
        <p class="">{{ props.data.students?.length }}</p>
      </div>
      <div class="flex items-center gap-[5px]">
        <i class="bx bx-building-house"></i>
        <p class="">{{ props.data.room }}</p>
      </div>
      <div class="flex items-center gap-[5px]">
        <i class="bx bx-time"></i>
        <p class="">{{ props.data.startTime }}</p>
      </div>
      <div class="flex items-center gap-[5px]">
        <i class="bx bx-calendar"></i>
        <p class="">
          {{ props.data?.weekDays?.map((el) => el.name.slice(0, 2)).join(",") }}
        </p>
      </div>
      <div class="flex items-center col-span-2 gap-[5px]">
        <i class="bx bxs-book"></i>
        <p class="uppercase">{{ props.data.direction?.name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps(["data"]);
</script>
<style lang=""></style>
