import bus from "../utils/bus";
import {store} from "../store";

export default (to, from, next) => {
  bus.$emit('start:spinner');
  store.dispatch('FETCH_LIST', to.name)
    .then(() => {
      // bus.$emit('end:spinner');
      next();
    })
    .catch();
}