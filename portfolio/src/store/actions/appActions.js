import { getAppData } from '../../api/index.js';


export default {
  setAllData(state,finishLoadFuncton){
    getAppData()
      .then(({data}) => {
        state.contentsData = data['contents-data']; 
        state.adminData = data['admin-data'];
        finishLoadFuncton();
      })
      .catch(error => console.log(error))
    ;
  }, 

  setAdminData(state,t){
    getAppData()
      .then((res)=>{
        console.log(res);
      })
      .catch(error => console.log(error))
    ;
  },
}