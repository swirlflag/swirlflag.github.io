import { getAppData } from '../api/index.js';

async function trySettingAllData(commit,state,finishLoadFuncton){
  const response = await getAppData();
  commit('SET_appData', response.data);
  await finishLoadFuncton(response, state.spy.subscriberList);
};

export default {
  async settingAllData({commit, state},finishLoadFuncton){
    try{
      trySettingAllData(commit,state,finishLoadFuncton);
    }catch(error){
      console.log(error, 'settingAllData');
      setTimeout(()=>{
        trySettingAllData(commit,state,finishLoadFuncton);
      },1000);
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