<template>
  <div id="overview">
    <day-select v-bind:selected="day"></day-select>
    <div class="add">         
      <router-link
        v-bind:to="{ name: 'add'}"
      > Add Movie
    </div>
    <button class="log" v-on:click="log">Log Message</button>
    <div class="main">
      <movie-list
        v-bind:genre="genre"
        v-bind:time="time"
        v-bind:movies="movies"
        v-bind:day="day"
      ></movie-list>
      <movie-filter></movie-filter>
    </div>
  </div>
</template>

<script>
  import MovieList from "./MovieList.vue";
  import MovieFilter from "./MovieFilter.vue";
  import DaySelect from "./DaySelect.vue";
  import myMixin from "../components/Mixins/myMixin"

  export default {
    props: ["genre", "time", "movies", "day"],
    components: {
      MovieList,
      MovieFilter,
      DaySelect
    },
    mixins: [myMixin]
  };
</script>

<style scoped>
  .add {
    margin: 1rem;
    margin-left: 0;
    padding: 1rem;
    border-radius: 2px;
    background-color: #6e6e6e;
    display: inline-block;
  }

  .add a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
  }

   .log {
    margin: 1rem;
    margin-left: 0;
    padding: 1rem;
    border: none;
    border-radius: 2px;
    background-color: #6e6e6e;
    color: white;
    font-size: 1.25rem;
 
  }

</style>