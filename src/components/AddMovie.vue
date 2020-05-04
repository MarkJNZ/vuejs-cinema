<template>
  <div>
    <form
      id="add-movie"
      @submit.prevent="handleSubmit"
    >
      <h2 class="title">Add Movie</h2>
      <div class="field" v-for="field in fields" v-bind:key="field.id">      
        <label v-bind:for="field.label">{{ field.desc }}</label>
        <input
          type="text"
          v-bind:id="field.id"
          v-bind:name="field.label"
          v-model="field.value"  
          placeholder="edit me"
        >
        <p v-if="field.value">Value of field: {{ field.label}} is {{ field.value }}</p>    
      </div>
      <button class="add" type="submit">Submit</button>                
    </form>

    <div class="home">    
        <router-link
        v-bind:to="{ name: 'home'}"
        > Back to results
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            id: 1,
            label: "name",
            desc: "Name",
            value: null
          },
          {
            id: 2,
            label: "releasedDate",
            desc: "Released date",
            value: null
          },
          {
            id: 3,
            label: "director",
            desc: "Director",
            value: null
          },
          {
            id: 4,
            label: "cast",
            desc: "Cast",
            value: null
          }
        ]
      };
    },
    methods: {
      handleSubmit() {
        console.log("Added Movie");
      }
    }
  };
</script>

<style scoped>
  .title {
    margin-left: 1rem;
  }

  .field {
    margin: 1rem; 
    margin-bottom: 2rem;
  }

  .field label {
    display: block;
    margin-bottom: 0.25rem;
  }

  .add {
    border: none;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2px;
    color: white;
    background-color: #6e6e6e;
    font-size: 1rem;
  }

  .home {
    margin: 1rem;
    padding: 1rem 0;
  }

  .home a {
    border-top: 2px solid white;
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0.5rem 0;
  }
</style>
