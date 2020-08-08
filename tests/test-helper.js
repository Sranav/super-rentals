import Application from 'ember-firstapp/app';
import config from 'ember-firstapp/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
