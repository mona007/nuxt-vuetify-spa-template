import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule], // copies rule configuration
    message: `${messages[rule]}.`, // assign message
  });
});

extend('equal', {
  params: ['amount'],
  validate(value, { amount }) {
    return value === amount;
  },
  message: 'The {_field_} must be equal to {amount}.',
});

extend('lower', {
  params: ['number'],
  validate(value, { number }) {
    return value < number;
  },
  message: 'The {_field_} must be lower than {number}.',
});

extend('greater', {
  params: ['number'],
  validate(value, { number }) {
    return value > number;
  },
  message: 'The {_field_} must be greater than {number}.',
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('VeeObserver', ValidationObserver);
Vue.component('VeeOb', ValidationObserver);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('VeeProvider', ValidationProvider);
Vue.component('VeePro', ValidationProvider);
