import { getAppData } from '../api/index.js';

export default {
  async settingAllData({commit, state},finishLoadFuncton){
    try{
      const response = await getAppData();
      commit('SET_appData', response.data);
      await finishLoadFuncton(response, state.spy.subscriberList);
    }catch(error){
      console.log(error, 'settingAllData');
      setTimeout(()=>{
        console.log('callee');
        settingAllData({commit, state},finishLoadFuncton);
      },1000)
    };
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