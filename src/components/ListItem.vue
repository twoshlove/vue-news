<template>
  <div>
    <ul class="item-list">
      <li
          :key="item.id"
          v-for="item in items"
          class="post"
      >
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{item.title}}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
            <a v-else :href="item.domain">{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ListItem",
    data(){
      return {
        name: '',
      }
    },
    /*props: {
      category: {
        type: String,
        default: '',
      },
      items: {
        type: Array,
        default: () => [],
      },
      actions: {
        type: String,
        default: '',
      },
    },*/
    computed: {
      items(){
        // return this.$store.state[this.name];
        return this.$store.state.list;
      },
    },
    created(){
      this.name = this.$route.name;
      // let actionname = '';
      //
      // if(this.name === 'news'){
      //   actionname = 'FETCH_NEWS';
      // }else if(this.name === 'ask'){
      //   actionname = 'FETCH_ASK';
      // }else if(this.name === 'jobs'){
      //   actionname = 'FETCH_JOBS';
      // }
      // this.$store.dispatch(actionname);
    }
  }
</script>

<style scoped>
  .item-list {
    padding: 0;
    margin: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .item-title {
    margin: 0;
  }
  .link-text {
    color: gray;
  }
</style>