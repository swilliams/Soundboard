class SoundByte extends Backbone.Model
    initialize: (attributes, options) ->

    createPlayer: ->
        self = @
        $("#player-#{@attributes.filename}").jPlayer(
            ready: (event) ->
                $(@).jPlayer('setMedia',
                    m4a: "/audio/#{self.attributes.filename}.m4a"
                    oga: "/audio/#{self.attributes.filename}.ogg"
                )
            swfPath: "/javascripts/Vendor"
            supplied: "m4a, oga"
        )

@app = window.app ? {}
@app.SoundByte = SoundByte

