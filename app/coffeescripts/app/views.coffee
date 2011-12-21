jQuery ->
    class SoundBytesView extends Backbone.View
        el: '#soundbytes'
        template: Handlebars.compile $('#soundbyte_template').html()
        initialize: ->
            @collection.bind 'add', @render, @

        render: ->
            $(@el).html('')
            for soundbyte in @collection.toJSON()
                $(@el).append(@template(soundbyte))
            @
        
    @app = window.app ? {}
    @app.SoundBytesView = SoundBytesView
