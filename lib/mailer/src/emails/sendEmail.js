/**
 * Created by alexandermann on 2017-03-26.
 */
import postmarkClient from '../PostmarkClient';

export default function sendVerificationEmail({ firstName, recipientEmail, actionUrl }) {
  return new Promise((resolve, reject) => {
    postmarkClient.sendEmailWithTemplate(
      {
        From: 'example@<YOUR_EMAIL_HERE>',
        To: recipientEmail,
        TemplateId: '<TemplateId>',
        TemplateModel: {
          name: firstName,
          action_url: actionUrl,
          login_url: 'URL',
          username: recipientEmail,
        },
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );
  });
}
