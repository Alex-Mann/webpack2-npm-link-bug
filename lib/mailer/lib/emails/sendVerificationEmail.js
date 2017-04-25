'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendVerificationEmail;

var _PostmarkClient = require('../PostmarkClient');

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendVerificationEmail(_ref) {
  var firstName = _ref.firstName,
      recipientEmail = _ref.recipientEmail,
      actionUrl = _ref.actionUrl;

  return new Promise(function (resolve, reject) {
    _PostmarkClient2.default.sendEmailWithTemplate({
      From: 'info@shiftwith.us',
      To: recipientEmail,
      TemplateId: 1446421,
      TemplateModel: {
        name: firstName,
        action_url: actionUrl,
        login_url: 'https://www.shiftwith.us/login',
        username: recipientEmail
      }
    }, function (error, result) {
      if (error) reject(error);else resolve(result);
    });
  });
} /**
   * Created by alexandermann on 2017-03-26.
   */