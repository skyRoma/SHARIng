'use strict';

import angular from 'angular';
import ProfileController from './profile.controller';

export default angular.module('sharingApp.profile', [])
  .controller('ProfieController', ProfileController)
  .name;
