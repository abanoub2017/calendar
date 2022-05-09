<template>
  <div class="calender-day">
        <div v-for="(employee, index) in dayInfo" :key="index">
          <div
            v-if="employee.arrive > 9 && employee.arrive < 17"
            class="arrive-late"
          >
            <span class="name">{{ employee.name }}</span>
            <span>Arrive at</span> {{ employee.arrive }}:00
          </div>
          <div
            v-if="employee.leave < 17 && employee.leave > 9"
            class="leave-early"
          >
            <span class="name">{{ employee.name }}</span> <span>Leave at</span>
            {{ employee.leave }}:00
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Day",
  props: ["dayInfo"],
};
</script>

<style  lang="scss">

</style>