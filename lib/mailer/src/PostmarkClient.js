/**
 * Created by alexandermann on 2017-04-14.
 */
import postmark from 'postmark'

// export the postmark client
export default new postmark.Client(process.env.POSTMARK_API_KEY)
