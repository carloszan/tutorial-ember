import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteUser: function(id){
      this.store.findRecord('user', id).then(function(user){
        user.deleteRecord();

        user.save();
      });
    }
  }
});
