<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">{{ info.id }}</slot>
      <div class="time">
        <slot name="time">{{ info.created }}</slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "UserProfile",
    props: {
      info: {
        type: Object,
        default: () => {},
      },
    },
    // computed: {
    //   ...mapState([
    //     'user',
    //   ]),
    // },
  }
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>