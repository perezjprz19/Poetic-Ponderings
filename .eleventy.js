const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    //11ty by default does not pull images and css - so anything within my assets folder would not be pulled through, unless I tell it to.
    eleventyConfig.addPassthroughCopy('Poetic-Ponderings/src/assets');
    eleventyConfig.addPassthroughCopy('Poetic-Ponderings/src/main.css');

    //uses luxon to format date
    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });


    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: 'Poetic-Ponderings/src',
            includes: '_includes',
            output: 'Poetic-Ponderings/public',
        },
    };

}