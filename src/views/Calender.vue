<template>
  <div class="calender">
    <header>
      <h1>Calender</h1>
    </header>
    <div class="calender-day">
      <ul>
        <li v-for="day in listAllCalenderInfo" :key="day.id">
          <p class="day">{{ day.date }}</p>
          <Day :dayInfo="day.employees" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Day from "@/components/calender/Day.vue";
import getAllCalendar from "../services/calendar.js";

export default {
  name: "Calender",
  components: {
    Day,
  },
  data() {
    return {
      listAllCalenderInfo: [],
    };
  },
  methods: {
    getAllGuestBook() {
      getAllCalendar
        .getAllCalendar()
        .then((res) => {
          this.listAllCalenderInfo = res.data;
          console.log(this.listAllCalenderInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllGuestBook();
  },
};
</script>

<style  lang="scss">
.calender {
  header {
    display: flex;
    align-items: center;
    font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
    justify-content: center;
    margin-bottom: 2em;
    background: #000;
    color: #fff;
    min-height: 10vh;
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    li {
      margin: 0 15px;
      padding: 15px 15px 23px;
      min-height: 115px;
      border: 1px solid #ccc;
      border-radius: 15px;
      min-width: 170px;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
      .day {
        text-align: center;
        margin-top: 0;
        background: #ccc;
        font-size: 18px;
        padding: 6px;
      }
      .arrive-late,
      .leave-early {
        font-size: 15px;
        padding-top: 15px;
        span {
          padding: 0 3px;
        }
        .name {
          font-weight: 700;
        }
      }
      .arrive-late {
        span:nth-child(2) {
          color: #e0536b;
        }
      }
      .leave-early {
        span:nth-child(2) {
          color: #3c918b;
        }
      }
    }
  }
}
</style>