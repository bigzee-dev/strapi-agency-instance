// Path: src/admin/app.js

export default {
    config: {
      // Replace the Strapi logo on the auth screen
      // auth: {
      //   logo: YourCustomLogo,
      // },
      // Replace the favicon
      // head: {
      //   favicon: YourCustomFavicon,
      // },
      // Add a new locale, other than 'en'
      // locales: ['fr', 'de'],
      // Replace Strapi tutorials links
      // tutorials: false,
      // Disable notifications about new Strapi releases
      notifications: { releases: false },
      // Override or add translations
      translations: {
        en: {
          // Key for the welcome title specific to the auth page
          'Auth.form.welcome.title': 'Welcome to BigZee CMS!',
          // You can also override the subtitle underneath the title
          'Auth.form.welcome.subtitle': 'Log in to manage your content',
          // Example of changing another common string
          // 'app.components.LeftMenu.navbrand.title': 'BigZee Dashboard',
        },
        // You could add overrides for other languages here too
        // fr: {
        //   'Auth.form.welcome.title': 'Bienvenue chez BigZee CMS !',
        // }
      },
    },
  
    bootstrap(app) {
      // You can run custom logic here when the admin panel starts
      console.log('Custom admin bootstrap loaded for BigZee CMS.');
    },
  };