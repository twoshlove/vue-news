<template>
  <div id="app">
    <button @click="loginUser">login</button>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner";
import bus from './utils/bus';
import axios from 'axios';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data(){
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    },
    getUserId(){
      return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data.id)
        .catch();
    },
    getTodos(){
      return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          console.log('endd');
          return response.data;
        })
        .catch();
    },
    async loginUser(){
      // const id = await this.getUserId();
      // if(id === 1){
      //   const todos = await this.getTodos();
      //   console.log(todos);
      // }
      try{
        const response = await axios.get('https://2jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1){
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          console.log(response.data);
        }
      }catch(error){
        // handleException(error);
        console.log(error);
      }

    },
    // loginUser(){
    //   axios.get('https://jsonplaceholder.typicode.com/users/1')
    //     .then(response => {
    //       if(response.data.id === 1){
    //         axios.get('https://jsonplaceholder.typicode.com/todos')
    //           .then(response => console.log(response))
    //           .catch(error => console.log(error));
    //       }
    //     })
    //     .catch(error => console.log(error));
    // },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #34495e;
  }
  a:hover {
    text-decoration: underline;
    color: #42b883;
  }
  a.router-link-exact-active {
    text-decoration: underline;
  }
  /*.page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to !* .page-leave-active below version 2.1.8 *! {
    opacity: 0;
  }*/
</style>
