<template>
  <!-- White Card -->
  <div id="white-card" class="my-auto w-[38rem] h-[28rem] content-center bg-c-white rounded-2xl rounded-br-[20%]">
    <!-- Input Area -->
    <div class="container flex space-x-6 pt-12 pl-14">

      <!-- DAY -->
      <div>
        <p class="tracking-widest text-xs text-c-smoke-grey pb-1 font-bold">DAY</p>
        <input type="text" v-model="inputs.info.day"
          class="text-lg pl-4 text-c-off-black font-bold basis-1/4 bg-transparent w-28 h-10 outline-none border border-c-light-grey rounded-md placeholder:text-c-smoke-grey placeholder:font-extrabold placeholder:py-8 placeholder:text-lg"
          placeholder="DD">
        <p v-show="!inputs.info.isValidDay" class="mt-1 text-xs text-c-red italic ">Must be a valid day</p>
      </div>

      <!-- MONTH -->
      <div>
        <p class="tracking-widest text-xs text-c-smoke-grey pb-1 font-bold">MONTH</p>
        <input type="text" v-model="inputs.info.month"
          class="text-lg pl-4 text-c-off-black font-bold basis-1/4 bg-transparent w-28 h-10 outline-none border border-c-light-grey rounded-md placeholder:text-c-smoke-grey placeholder:font-extrabold placeholder:py-8 placeholder:text-lg"
          placeholder="MM">
        <p v-show="!inputs.info.isValidMonth" class="mt-1 text-xs text-c-red italic ">Must be a valid month</p>
      </div>

      <!-- YEAR -->
      <div>
        <p class="tracking-widest text-xs text-c-smoke-grey pb-1 font-bold">YEAR</p>
        <input type="text" v-model="inputs.info.year"
          class="text-lg pl-4 text-c-off-black font-bold basis-1/4 bg-transparent w-28 h-10 outline-none border border-c-light-grey rounded-md placeholder:text-c-smoke-grey placeholder:font-extrabold placeholder:py-8 placeholder:text-lg"
          placeholder="YYYY">
        <p v-show="!inputs.info.isValidYear" class="mt-1 text-xs text-c-red italic ">Must be in the past</p>
      </div>

    </div>

    <Information :inputs="inputs" :isValidDate="isValidDate" />
  </div>
</template>

<script setup>
import Information from "./components/InformationComp.vue";
import { reactive } from 'vue';


const inputs = reactive({
  info: {
    day: null,
    month: null,
    year: null,
    isValidDay: true,
    isValidMonth: true,
    isValidYear: true,
    currentYear: new Date().getFullYear(),

  }
});

const isValidDate = (dateString) => {

  // Parse the date parts to integers
  let parts = dateString.split("-");
  let day = parseInt(parts[2], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[0], 10);

  // Adjust for leap years
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }

  inputs.info.isValidYear = year <= inputs.info.currentYear ? true : false;

  if (month > 0 && month < 13) {
    inputs.info.isValidDay = day > 0 && day <= monthLength[month - 1] ? true : false;
    inputs.info.isValidMonth = true;
  } else {
    inputs.info.isValidMonth = false;
    inputs.info.isValidDay = day > 0 && day < 32;
  }

}




</script>

