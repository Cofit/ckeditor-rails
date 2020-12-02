/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
    config.language = "zh";
    config.format_tags = 'p;h1;h2';
    config.height = '1000';
    config.extraPlugins = 'html5video,youtube,html5audio';
    return config.toolbar = [
        {
            name: 'links',
            items: ['Link', 'Unlink']
        }, {
            name: 'insert',
            items: ['Image', 'Html5video', 'Youtube', 'Iframe', 'Html5audio']
        }, {
            name: 'basicstyles',
            groups: ['basicstyles', 'cleanup'],
            items: ['Bold', 'Strike', 'Italic', 'Underline']
        }, {
            name: 'paragraph',
            groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
            items: ['NumberedList', 'BulletedList', 'Blockquote']
        }, {
            name: 'styles',
            items: ['Format']
        }, {
            name: 'document',
            groups: ['mode', 'document', 'doctools'],
            items: ['Source']
        }
    ];
};

