'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendPasswordResetEmail;

var _PostmarkClient = require('../PostmarkClient');

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendPasswordResetEmail(_ref) {
  var firstName = _ref.firstName,
      recipientEmail = _ref.recipientEmail,
      actionUrl = _ref.actionUrl,
      operatingSystem = _ref.operatingSystem,
      browserName = _ref.browserName;

  return new Promise(function (resolve, reject) {
    _PostmarkClient2.default.sendEmailWithTemplate({
      From: 'info@shiftwith.us',
      To: recipientEmail,
      TemplateId: 1448201,
      TemplateModel: {
        name: firstName,
        action_url: actionUrl,
        operating_system: operatingSystem,
        browser_name: browserName,
        support_url: 'mailto:info@shiftwith.us'
      }
    }, function (error, result) {
      if (error) reject(error);else resolve(result);
    });
  });
} /**
   * Created by alexandermann on 2017-03-27.
   */