// import bus from '../utils/bus.js';
import { store } from '../store/store.js';

// var pageDelay = () => {
//   store.commit('SET_isPaging', true);
//   setTimeout(() => {
//     store.commit('SET_isPaging', false);
//   }, 1200);
// };

export const checkIsPaging = function (to, from, next) {
  if(!store.getters.GET_isPaging){
    // console.log(store.getters.GET_isPaging);
    // console.log('이동');
    next();
  };

  // bus.$emit('start:spinner');

  // return store.dispatch('FETCH_LIST', to.name)
  //   .then(() => {
  //     console.log('hi');
  //     next();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

};
