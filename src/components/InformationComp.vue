<template>
    <!-- Divider -->
    <div class="relative mx-14 mt-8 border-t-[0.75px] border-opacity-80 border-c-light-grey">
        <div @click="calculation"
            class="bg-c-purple w-16 h-16 rounded-full flex items-center justify-center absolute -right-4 -top-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
                <g fill="none" stroke="#FFF" stroke-width="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
            </svg>

        </div>
    </div>

    <!-- Information -->
    <div class="flex flex-col space-y-3 ml-14 text-6xl mt-14">

        <!-- Item 1 -->
        <div class="">
            <i class="font-extrabold text-c-purple">{{ calculated.cYear || "- -" }} </i>
            <i class="font-extrabold"> years</i>
        </div>

        <!-- Item 2 -->
        <div>
            <i class="font-extrabold text-c-purple">{{ calculated.cMonth || "- -" }} </i>
            <i class="font-extrabold"> months</i>
        </div>

        <!-- Item 3 -->
        <div>
            <i class="font-extrabold text-c-purple">{{ calculated.cDay || "- -" }} </i>
            <i class="font-extrabold"> days</i>
        </div>


    </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({ inputs: Object, isValidDate: Function })
const calculated = reactive({
    cDay: null,
    cMonth: null,
    cYear: null,
});

const calculation = () => {
    // Split the date string into day, month, and year
    const [day, month, year] = [props.inputs.info.day, props.inputs.info.month, props.inputs.info.year];

    // Create a new Date object with the given day, month, and year
    let dateObj = `${year}-${month}-${day}`;

    props.isValidDate(dateObj);
    // console.log(props.inputs.info.isValidDay);
    if (props.inputs.info.isValidDay && props.inputs.info.isValidMonth && props.inputs.info.isValidYear) {
        // Birthday
        const birthdate = new Date(props.inputs.info.year, props.inputs.info.month - 1, props.inputs.info.day);
        //Today
        const today = new Date();
        //Calculation
        const diffTime = today.getTime() - birthdate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);
        const days = diffDays - (years * 365) - (months * 30);
        //Assigning values to defaults
        calculated.cDay = days;
        calculated.cMonth = months;
        calculated.cYear = years;
    } else {

        calculated.cDay = null;
        calculated.cMonth = null;
        calculated.cYear = null;
    }


}










//! Watcher doğru çalışmıyor. Önceli değer ile sonraki değer aynı bunu bir kontrol et.
    // watch((props.inputs.info), (newUserDay, oldUserDay) =>{
    //     console.log(oldUserDay);
    //     console.log(newUserDay);
    // })


</script>