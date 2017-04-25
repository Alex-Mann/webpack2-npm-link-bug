import mailer from 'mailer'

console.log('starting function')
export default async function(e, ctx, cb) {
  await mailer.sendEmail('alexander.mann@me.com', '12:30pm')
  console.log('processing event: %j', e)
  cb(null, { hello: 'world' })
}
