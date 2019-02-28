<template>
  <div id="app">
    <h1>{{title}}</h1>
    <form @submit.prevent="formSubmitted()">
        <label for="searchTerm">Search Term</label>
        <input v-model="searchTerm" class="u-full-width" type="text" name="searchTerm" id="searchTerm">
        <button type="submit">Search</button>
    </form>
    <img v-if="loading" src="./loading.gif" alt="loading gif">
    <section class="images">
      <img v-for="image in images" :key="image.id" :src="image.urls.small" :alt="image.description">
    </section>
  </div>
</template>

<script> 

import API from './API';

export default {
  name: 'app',
  data(){
    return{
      title: 'ⓋVue image searchⓋ',
      searchTerm:'',
      images:[],
      loading:false,
    };
  },
  methods:{
    formSubmitted(){
      this.images=[];
      this.loading=true;
      console.log(this.searchTerm)
      API.search(this.searchTerm)
        .then(images => {
          console.log(images);
          this.images=images;
          this.loading=false;
          images.forEach(image =>{
            console.log(image.urls.small)
          })
        })
    }
  }
};
</script>

<style>
  body{
      width: 80%;
      margin: 2em auto 0 auto;
  }
  img{
    width: 100%;
  }
  .images{
    column-count: 3;
  }
</style>
