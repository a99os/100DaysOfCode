<template>
  <div class="h-[100vh] w-[100vw] bg-light_grey flex justify-center items-center px-[15px]">
    <div class="card w-[838px] px-[25px] md:px-[55px] py-10 min-h-[663px] bg-off_white rounded-[20px] rounded-ee-[200px]">

      <!-- inputs -->
      <form
        class="relative pb-[60px] md:pb-[30px]  pt-[30px] w-full grid grid-cols-3 md:flex gap-[15px] md:gap-[35px]  border-b-[2px] border-light_grey">
        <div>
          <label for="day" :class="invalidValue ? 'text-light_red ' : 'text-smokey_grey '"
            class="block text-[10px] duration-300 md:text-[14px] uppercase cursor-pointer leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">DAY</label>
          <input type="number" placeholder="DD" v-model="day" id="day"
            :class="invalidValue ? 'outline-light_red border-light_red' : 'outline-purple border-light_grey'"
            class="uppercase tracking-[2px] duration-300 mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border  rounded-[7px] ">
          <p v-if="dayErrorMessage" class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">
            {{ dayErrorMessage }}</p>
        </div>
        <div>
          <label for="month" :class="invalidValue ? 'text-light_red ' : 'text-smokey_grey '"
            class="block text-[10px] duration-300 md:text-[14px] uppercase cursor-pointer leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">month</label>
          <input type="number" placeholder="MM" v-model="month" id="month"
            :class="invalidValue ? 'outline-light_red border-light_red' : 'outline-purple border-light_grey'"
            class="uppercase tracking-[2px] duration-300 mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border  rounded-[7px] ">
          <p v-if="monthErrorMessage" class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">
            {{ monthErrorMessage }}</p>
        </div>
        <div>
          <label for="year" :class="invalidValue ? 'text-light_red ' : 'text-smokey_grey '"
            class="block text-[10px] duration-300 md:text-[14px] uppercase cursor-pointer leading-[20px] tracking-[2px] font-['Poppins'] font-bold  text-smokey_grey">year</label>
          <input type="number" placeholder="YY" v-model="year" id="year"
            :class="invalidValue ? 'outline-light_red border-light_red' : 'outline-purple border-light_grey'"
            class="uppercase tracking-[2px] duration-300 mt-1 md:mt-3 placeholder:text-smokey_grey  font-bold  font-['Poppins'] w-full  md:w-[160px] p-[10px] md:p-5 text-[18px] md:text-[32px] bg-transparent border  rounded-[7px] ">
          <p v-if="yearErrorMessage" class="text-light_red mt-1 md:mt-3 text-[10px] md:text-[14px] font-['Poppins']">
            {{ yearErrorMessage }}</p>
        </div>


        <div class="absolute -bottom-[30px] md:-bottom-[45px] flex justify-center md:justify-end w-full ">
          <button type="submit" @click="clickBtn"
            class="h-[60px] w-[60px] md:w-[90px]  md:h-[90px] bg-purple flex justify-center items-center rounded-full hover:bg-off_black duration-300 ">

            <img src="@/assets/images/icon-arrow.svg" alt="icon arrow" class="scale-[0.6] md:scale-100">
          </button>
        </div>
      </form>
      <!-- results -->
      <div class="mt-[60px] flex-grow  flex flex-col md:gap-5 justify-around">
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">{{ yearResult ? yearResult : '--' }}</span>
          years</h1>
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">{{ monthResult ? monthResult : '--' }}</span>
          months</h1>
        <h1 class="text-[60px] md:text-[100px] leading-[70px] text-off_black italic font-extrabold"><span
            class="text-purple">{{ dayResult ? dayResult : '--' }}</span>
          days</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
let day = ref(null)
let month = ref(null)
let year = ref(null)
let dayResult = ref(null)
let monthResult = ref(null)
let yearResult = ref(null)
let dayErrorMessage = ref(null)
let monthErrorMessage = ref(null)
let yearErrorMessage = ref(null)
let invalidValue = ref(false)
function invalid() {
  if (dayErrorMessage.value ||
    monthErrorMessage.value ||
    yearErrorMessage.value) {
    invalidValue.value = true
  } else {
    invalidValue.value = false
  }
}
function clickBtn(e) {
  e.preventDefault()
  clearErrorMessage()
  if (!day.value ||
    !month.value ||
    !year.value) {

    if (!day.value) {
      dayErrorMessage.value = 'This field is required'
    } if (!month.value) {
      monthErrorMessage.value = 'This field is required'
    } if (!year.value) {
      yearErrorMessage.value = 'This field is required'
    }
  } else {
    yearCheck()
    monthCheck()
    dayCheck()
  }
  invalid()
  if (!invalidValue.value) {
    getAge()
  }

}
function getAge() {
  console.log('sss');
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentmonth = currentDate.getMonth();
  var currentday = currentDate.getDate();

  yearResult.value = currentYear - year.value - 1;
  monthResult.value = 12 - (month.value - currentmonth);
  dayResult.value = 31 - (day.value - currentday);
  if (dayResult.value > 31) {
    dayResult.value -= 31
    monthResult.value++
  }
}
function yearCheck() {
  if (year.value > new Date().getFullYear()) {
    yearErrorMessage.value = "Must be in the past"
  } else {
    monthCheck()
    dayCheck()
    if (!dayErrorMessage.value && !monthErrorMessage.value) {
      if (new Date(`${year.value}/${+month.value - 1}/${day.value}`) - new Date() > 0) {
        yearErrorMessage.value = "Must be in the past"
      }
    }
  }
}
function monthCheck() {
  if (month.value < 1 || month.value > 12) {
    monthErrorMessage.value = "Must be a valid month"
  }
}
function dayCheck() {
  if (day.value < 1 || day.value > 31) {
    dayErrorMessage.value = "Must be a valid day"

  }
  else {
    if (!monthErrorMessage.value && new Date(`${year.value}-${+month.value}-${day.value}`).getMonth() + 1 != month.value) {
      dayErrorMessage.value = "Must be a valid day"
    }
  }
}



function clearErrorMessage() {
  dayErrorMessage.value = null
  monthErrorMessage.value = null
  yearErrorMessage.value = null
}

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
