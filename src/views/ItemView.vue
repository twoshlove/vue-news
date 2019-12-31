<template>
  <div>
    <section>
      <user-profile :info="askItem">
        <template #username>
          <router-link :to="`/user/${askItem.user}`">{{ askItem.user }}</router-link>
        </template>
        <template slot="time">Posted {{ askItem.time_ago }}</template>
        <template #time>Posted {{ askItem.time_ago }}</template>
        <template v-slot:time>Posted {{ askItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ askItem.title }}</h2>
    </section>
    <section>
      <div v-html="askItem.content"></div>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import UserProfile from "../components/UserProfile";

  export default {
    components: {
      UserProfile,
    },
    computed: {
      ...mapState([
        'askItem',
      ]),
    },
    created(){
      const askid = this.$route.params.id;
      this.$store.dispatch('FETCH_ASK_ITEM', askid);
    },
  }
</script>

<style scoped>

</style>