const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Andrei Lupu - Web Developer', // Navigation and Site Title
  siteTitleAlt: 'Andrei Lupu', // Alternative Site title for SEO
  siteUrl: 'https://lupu.pro', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/avatar.jpg', // Used for SEO and manifest
  siteDescription: 'Andrei Lupu - Web developer and coffee lover.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@euthelup', // Twitter Username
  ogSiteName: 'andreilupu', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
