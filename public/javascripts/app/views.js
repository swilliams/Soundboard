/* DO NOT MODIFY. This file was compiled Wed, 21 Dec 2011 04:26:32 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app/views.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var SoundBytesView, _ref;
    SoundBytesView = (function(_super) {

      __extends(SoundBytesView, _super);

      function SoundBytesView() {
        SoundBytesView.__super__.constructor.apply(this, arguments);
      }

      SoundBytesView.prototype.el = '#soundbytes';

      SoundBytesView.prototype.template = Handlebars.compile($('#soundbyte_template').html());

      SoundBytesView.prototype.initialize = function() {};

      SoundBytesView.prototype.events = {
        'click .play': 'play'
      };

      SoundBytesView.prototype.render = function() {
        var soundbyte, _i, _len, _ref;
        $(this.el).html('');
        _ref = this.collection.models;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          soundbyte = _ref[_i];
          $(this.el).append(this.template(soundbyte.toJSON()));
          if (soundbyte.attributes.filename !== '') soundbyte.createPlayer();
        }
        return this;
      };

      SoundBytesView.prototype.play = function(event) {
        var byte, elem;
        elem = $(event.target).parents('div.soundbyte');
        byte = elem.attr('data-file');
        $("#player-" + byte).jPlayer('play');
        return event.preventDefault();
      };

      return SoundBytesView;

    })(Backbone.View);
    this.app = (_ref = window.app) != null ? _ref : {};
    return this.app.SoundBytesView = SoundBytesView;
  });

}).call(this);
