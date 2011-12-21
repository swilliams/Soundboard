/* DO NOT MODIFY. This file was compiled Wed, 21 Dec 2011 03:24:17 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app.coffee
 */

(function() {
  var _ref;

  this.app = (_ref = window.app) != null ? _ref : {};

  jQuery(function() {
    var bytes;
    bytes = [
      new app.SoundByte({
        title: 'Gruber Eating',
        filename: 'gruber-eating',
        show: 'The Talk Show #71',
        url: 'http://5by5.tv/talkshow/71',
        speaker: 'Gruber'
      }), new app.SoundByte({
        title: "Hi I'm Merlin Mann!",
        filename: '',
        show: 'Back to Work #46',
        url: 'http://5by5.tv/b2w/46',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Bulk Bag',
        filename: '',
        show: 'Back to Work #45',
        url: 'http://5by5.tv/b2w/45',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Terp-stra',
        filename: '',
        show: 'Back to Work #44',
        url: 'http://5by5.tv/b2w/44',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Hi!',
        filename: '',
        show: 'Back to Work #44',
        url: 'http://5by5.tv/b2w/44',
        speaker: 'Merlin'
      })
    ];
    window.bytes = bytes;
    this.app.router = new app.AppRouter();
    if (Modernizr.history) {
      Backbone.history.start({
        pushState: true
      });
    } else {
      Backbone.history.start();
    }
    return this.app.SoundBytes.add(bytes);
  });

}).call(this);
