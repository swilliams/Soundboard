class SoundBytes extends Backbone.Collection
    model: app.SoundByte
    url: ''

    initialize: ->

@app = window.app ? {}
@app.SoundBytes = new SoundBytes
