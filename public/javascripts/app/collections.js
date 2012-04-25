/* DO NOT MODIFY. This file was compiled Wed, 25 Apr 2012 18:00:03 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app/collections.coffee
 */

(function() {
  var SoundBytes, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  SoundBytes = (function(_super) {

    __extends(SoundBytes, _super);

    function SoundBytes() {
      SoundBytes.__super__.constructor.apply(this, arguments);
    }

    SoundBytes.prototype.model = app.SoundByte;

    SoundBytes.prototype.url = '';

    SoundBytes.prototype.initialize = function() {};

    return SoundBytes;

  })(Backbone.Collection);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.SoundBytes = new SoundBytes;

}).call(this);
