/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Feed',
        'FeedItem'
    ],
    stores: [
        'FeedStore',
        'FeedItemStore'
    ],
    views: [
        'MyNavigationView',
        'AddSheet',
        'FeedDetails',
        'FeedItem'
    ],
    name: 'MyApp',
    controllers: [
        'FeedController'
    ],

    launch: function() {
        // Might be nice to create a RSS URL for documentation and updates
        Ext.create('MyApp.view.MyNavigationView', {fullscreen: true});
    }

});
