<template lang="">
  <div
    id="windowWrapper"
    class="fixed w-[100vw] flex justify-center items-center px-2 top-0 z-[100] h-[100vh] bg-[#fffefe88] backdrop-blur-[2px]"
  >
    <div class="rounded-md w-[90%] bg-hoverColor py-5 md:py-10 px-5 md:px-14">
      <h1 class="text-center text-[25px] font-medium">
        {{ props.text }}
      </h1>

      <div class="flex text-[24px] mt-10 gap-10 justify-center">
        <button
          @click="$emit('funcYes')"
          class="px-3 py-1 bg-green w-[150px] rounded-md opacity-90 hover:opacity-100 duration-300"
        >
          👍 Xa</button
        ><button
          @click="$emit('funcNo')"
          class="px-3 py-1 bg-red w-[150px] rounded-md opacity-90 hover:opacity-100 duration-300"
        >
          🙅‍♂️ Yo'q
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
  },
});
// import { useGeneralStore } from "@/stores/general";
</script>
<style scoped></style>
