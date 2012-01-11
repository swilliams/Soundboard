/* DO NOT MODIFY. This file was compiled Thu, 29 Dec 2011 22:00:03 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app/models.coffee
 */

(function() {
  var SoundByte, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  SoundByte = (function(_super) {

    __extends(SoundByte, _super);

    function SoundByte() {
      SoundByte.__super__.constructor.apply(this, arguments);
    }

    SoundByte.prototype.initialize = function(attributes, options) {};

    SoundByte.prototype.createPlayer = function() {
      var self;
      self = this;
      return $("#player-" + this.attributes.filename).jPlayer({
        ready: function(event) {
          return $(this).jPlayer('setMedia', {
            mp3: "/audio/" + self.attributes.filename + ".mp3",
            oga: "/audio/" + self.attributes.filename + ".ogg"
          });
        },
        swfPath: "/javascripts/Vendor",
        supplied: "mp3, oga"
      });
    };

    return SoundByte;

  })(Backbone.Model);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.SoundByte = SoundByte;

}).call(this);
