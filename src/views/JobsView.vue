<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
  import ListItem from "../components/ListItem";
  import bus from "../utils/bus";
  import ListMixin from "../mixins/ListMixin";

  export default {
    name: "JobsView",
    components: {
      ListItem,
    },
    mixins: [
      ListMixin,
    ],
    // created(){
    //   bus.$emit('start:spinner');
    //   this.$store.dispatch('FETCH_JOBS')
    //     .then(() => {
    //       bus.$emit('end:spinner');
    //     })
    //     .catch();
    // },
    // mounted(){
    //   bus.$emit('end:spinner');
    // },
  }
</script>

<style scoped>

</style>