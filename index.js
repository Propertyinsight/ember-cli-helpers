/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-helpers',

    included: function (app) {
        this._super.included(app);

        app.import(app.bowerDirectory + '/moment/moment.js');
    }

};
