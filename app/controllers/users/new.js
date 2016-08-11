import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addUser: function(){
      var name        = this.get('name');
      var password    = this.get('password');
      var birthdate   = this.get('birthdate');
      var description = this.get('description');

      var newUser = this.store.createRecord('user',{
        name: name,
        password: password,
        birthdate: birthdate,
        description: description,
      });

      // save to firebase
      newUser.save();

      // clear form
      this.setProperties({
        name: '',
        password: '',
        birthdate: '',
        description: ''
      });
    }
  }
});
