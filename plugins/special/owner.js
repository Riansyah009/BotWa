exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner'
      }], m, {
         org: 'Remy Network',
         website: 'https://remy-bot.my.id',
         email: 'remyalwi5790@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}