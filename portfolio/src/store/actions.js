import { getAppData } from '../api/index.js';

export default {
  async settingAllData({commit, state},finishLoadFuncton){
    try{
      const response = await getAppData();
      commit('SET_appData', response.data);
      await finishLoadFuncton(response, state.spy.subscriberList);
    }catch(error){console.log(error)};
  }, 

  // setAdminData(state,t){
  //   getAppData()
  //     .then((res)=>{
  //       console.log(res);
  //     })
  //     .catch(error => console.log(error))
  //   ;
  // },
}