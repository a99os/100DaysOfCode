<template>
  <div class="h-[100vh] w-[100vw] bg-light_grey flex justify-center items-center px-[15px]">
    <div class="card w-[838px] px-[25px] md:px-[55px] py-10 min-h-[663px] bg-off_white rounded-[20px] rounded-ee-[200px]">

      <!-- inputs -->
      <div
        class="relative pb-[60px] md:pb-[30px]  pt-[30px] w-full grid grid-cols-3 md:flex gap-[15px] md:gap-[35px]  border-b-[2px] border-light_grey">
        <div>
          <label for="day"
            class="block text-[10px] md:text-[14px] uppercase cursor-pointer leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">DAY</label>
          <input type="number" placeholder="DD" v-model="day" id="day"
            class="uppercase tracking-[2px] mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border border-light_grey rounded-[7px] outline-purple">
          <p class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">This field is required</p>
        </div>
        <div>
          <label for="month"
            class="block text-[10px] md:text-[14px] uppercase cursor-pointer leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">month</label>
          <input type="number" placeholder="MM" v-model="month" id="month"
            class="uppercase tracking-[2px] mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border border-light_grey rounded-[7px] outline-purple">
          <p class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">This field is required</p>
        </div>
        <div>
          <label for="year"
            class="block text-[10px] md:text-[14px] cursor-pointer uppercase leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">year</label>
          <input type="number" placeholder="YY" v-model="year" id="year"
            class="uppercase tracking-[2px] mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border border-light_grey rounded-[7px] outline-purple">
          <p class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">This field is required</p>
        </div>

        <div class="absolute -bottom-[30px] md:-bottom-[45px] flex justify-center md:justify-end w-full ">
          <button
            class="h-[60px] w-[60px] md:w-[90px]  md:h-[90px] bg-purple flex justify-center items-center rounded-full hover:bg-off_black duration-300 ">

            <img src="@/assets/images/icon-arrow.svg" alt="icon arrow" class="scale-[0.6] md:scale-100">
          </button>
        </div>
      </div>
      <!-- results -->
      <div class="mt-[60px] flex-grow  flex flex-col md:gap-5 justify-around">
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">38</span>
          years</h1>
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">10</span>
          months</h1>
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">21</span>
          days</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
let day = ref(null)
let month = ref(null)
let year = ref(null)

useSeoMeta({
  title: 'Age calculator app',
  ogTitle: 'Age calculator app',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
