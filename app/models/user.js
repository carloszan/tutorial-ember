import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  password: DS.attr('string'),
  birthdate: DS.attr('string'),
  description: DS.attr('string'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
