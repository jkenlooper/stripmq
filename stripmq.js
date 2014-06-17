'use strict';

var css = require('css'),
    mediaQuery = require('css-mediaquery');


function stripMediaQueries (ast, options) {
   ast.stylesheet.rules = ast.stylesheet.rules.reduce(function (rules, rule) {
        if (rule.type === 'media') {
            if (mediaQuery.match(rule.media, options)) {
                rules.push.apply(rules, rule.rules);
            }
        }
        else {
            rules.push(rule);
        }
        return rules;
    }, []);
    return ast;
}

/**
 * strip media queries
 * @param   {string} input
 * @param   {object} options
 * @param   {object} formatOptions
 * @returns {string} output
 */
function StripMQ(input, options, formatOptions) {
    options || (options = {});
    formatOptions || (formatOptions = {});

    options = {
        type:            options.type || 'screen',
        width:           options.width || 1024,
        'device-width':  options['device-width'] || options.width || 1024,
        height:          options.height || 768,
        'device-height': options['device-height'] || options.height || 768,
        resolution:      options.resolution || '1dppx',
        orientation:     options.orientation || 'landscape',
        'aspect-ratio':  options['aspect-ratio'] || options.width/options.height || 1024/768,
        color:           options.color || 3
    };

    var tree = css.parse(input);
    tree = stripMediaQueries(tree, options);
    return css.stringify(tree, formatOptions);
}

module.exports = StripMQ;
