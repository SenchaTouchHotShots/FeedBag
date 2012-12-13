/*
 * File: app/view/FeedItem.js
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

Ext.define('MyApp.view.FeedItem', {
    extend: 'Ext.Panel',

    config: {
        layout: {
            type: 'fit'
        },
        scrollable: true,
        tpl: [
            '<article>',
            '            <header>',
            '                <h2>{title}</h2>',
            '                <tpl if="creator"><p class="creator">by {creator}</p></tpl>',
            '                <tpl if="pubDate"><time datetime="{pubDate:date("c")}">{pubDate:date("M j, Y, g:i a")}</time></tpl>',
            '            </header>',
            '            <div class="content">',
            '              <tpl if="content.length &gt; 0">',
            '              <tpl for="content">',
            '                <tpl if="xindex == 2">{.}</tpl>',
            '              </tpl>',
            '              <tpl else>',
            '                {description}',
            '              </tpl>',
            '            </div>',
            '            <footer>',
            '                <a href="{link}">Read Original Article</a>',
            '            </footer>',
            '</article>'
        ]
    }

});