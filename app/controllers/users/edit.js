import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editUser: function(id){
      var self        = this;
      var name        = this.get('model.name');
      var password    = this.get('model.password');
      var birthdate   = this.get('model.birthdate');
      var description = this.get('model.description');

      //update user
      this.store.findRecord('user', id).then(function(user) {
        user.set('name', name);
        user.set('password', password);
        user.set('birthdate', birthdate);
        user.set('description', description);

        // save to firebase
        user.save();

        self.transitionToRoute('users');
      });

    }
  }
});
