import {fetchAskItem, fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchList} from "../api";

export default {
  /*FETCH_NEWS(context){
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        console.log(response)
        return response;
      })
      .catch(error => console.log(error));
  },*/
  async FETCH_NEWS(context){
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK({ commit }){
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;

    /*fetchAskList()
      .then(response => {
        commit('SET_ASK', response.data);
        console.log(response)
        return response;
      })
      .catch(error => console.log(error));*/
  },
  async FETCH_JOBS({ commit }){
    const response = await fetchJobsList();
    commit('SET_JOBS', response.data);
    return response;

    /*fetchJobsList()
      .then(response => {
        commit('SET_JOBS', response.data)
        console.log(response)
      })
      .catch();*/
  },
  async FETCH_USER({ commit }, username){
    const response = await fetchUserInfo(username);
    commit('SET_USER', response.data);
    return response;

    /*fetchUserInfo(username)
      .then(response => {
        console.log(response);
        commit('SET_USER', response.data);
        return response;
      })
      .catch();*/
  },
  async FETCH_ASK_ITEM({ commit }, askid){
    try{
      const response = await fetchAskItem(askid);
      commit('SET_ASK_ITEM', response.data);
      return response;
    }catch(error){
      console.log(error);
    }
    /*fetchAskItem(askid)
      .then(response => {
        console.log(response);
        commit('SET_ASK_ITEM', response.data);
      })
      .catch(error => console.log(error));*/
  },
  async FETCH_LIST({ commit }, pageName){
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;

    /*return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(error => console.log(error));*/
  },
}