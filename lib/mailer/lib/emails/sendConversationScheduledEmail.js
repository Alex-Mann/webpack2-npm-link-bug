'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostmarkClient = require('../PostmarkClient');

var _PostmarkClient2 = _interopRequireDefault(_PostmarkClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (email, conversationTime) {
  // TODO:
  // should include some checks here to determine what form the time is in, but the job of this
  // function should only be to send the email and nothing more
  _PostmarkClient2.default.sendEmailWithTemplate({
    From: 'info@shiftwith.us',
    To: email,
    TemplateId: 1501821,
    TemplateModel: {
      conversation_time: conversationTime
    }
  });
}; /**
    * Created by alexandermann on 2017-04-14.
    */