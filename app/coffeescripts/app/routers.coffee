jQuery ->
    class AppRouter extends Backbone.Router
        routes:
            '': 'root'

        initialize: ->
            @view = new app.SoundBytesView collection: app.SoundBytes
        root: ->


    @app = window.app ? {}
    @app.AppRouter = AppRouter
