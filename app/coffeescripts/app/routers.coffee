jQuery ->
    class AppRouter extends Backbone.Router
        routes:
            '': 'root'

        initialize: ->
            @view = new app.SoundBytesView collection: app.SoundBytes
            @view.render()
        root: ->
            helper = new app.HelpView
            helper.render()


    @app = window.app ? {}
    @app.AppRouter = AppRouter
