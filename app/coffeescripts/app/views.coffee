jQuery ->
    class SoundBytesView extends Backbone.View
        el: '#soundbytes'
        template: Handlebars.compile $('#soundbyte_template').html()
        initialize: ->

        events:
            'click .play': 'play'

        render: ->
            $(@el).html('')
            for soundbyte in @collection.models
                $(@el).append(@template(soundbyte.toJSON()))
                soundbyte.createPlayer() unless soundbyte.attributes.filename == ''
            @

        play: (event) ->
            elem = $(event.target).parents('div.soundbyte')
            byte = elem.attr('data-file')
            $("#player-#{byte}").jPlayer('play')
            event.preventDefault()


    class HelpView extends Backbone.View
        el: '#need_help'
        isExpanded: false

        initialize: ->

        events:
            'click h2' : 'toggleExpando'

        # DOM interaction
        contract: ->
            @$('p').slideUp('fast')

        expand: ->
            @$('p').slideDown('fast')
        # end DOM interaction

        toggleExpando: ->
            if @isExpanded then @contract() else @expand()
            @isExpanded = not @isExpanded

        
    @app = window.app ? {}
    @app.SoundBytesView = SoundBytesView
    @app.HelpView = HelpView
