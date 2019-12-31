import ListView from "./ListView";
import bus from "../utils/bus";

export default function createListView(name){
  return {
    name,
    // name: name,
    // name: 'HOC Component',
    created(){
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('endend')
          bus.$emit('end:spinner');
        })
        .catch();
    },
    render(createElement){
      return createElement(ListView);
    },
  };
}