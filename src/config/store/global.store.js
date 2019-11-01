import mutations from '../mutations/global.mutations';
import actions from '../actions/global.actions';

export default {
  namespaced: true,
  state: {
    // key: value
    stateOne: 'this is state one',
    stateTwo: 'this.is state two'
  },
  mutations: mutations,
  actions: actions,
};
