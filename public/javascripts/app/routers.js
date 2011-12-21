/* DO NOT MODIFY. This file was compiled Wed, 21 Dec 2011 03:15:31 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app/routers.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var AppRouter, _ref;
    AppRouter = (function(_super) {

      __extends(AppRouter, _super);

      function AppRouter() {
        AppRouter.__super__.constructor.apply(this, arguments);
      }

      AppRouter.prototype.routes = {
        '': 'root'
      };

      AppRouter.prototype.initialize = function() {
        return this.view = new app.SoundBytesView({
          collection: app.SoundBytes
        });
      };

      AppRouter.prototype.root = function() {};

      return AppRouter;

    })(Backbone.Router);
    this.app = (_ref = window.app) != null ? _ref : {};
    return this.app.AppRouter = AppRouter;
  });

}).call(this);
