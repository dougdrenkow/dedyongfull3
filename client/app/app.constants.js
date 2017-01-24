'use strict';

import angular from 'angular';

export default angular.module('dedyongfull3App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
