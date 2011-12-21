@app = window.app ? {}

jQuery ->

    bytes = [
        new app.SoundByte {
            title: 'Gruber Eating'
            filename: 'gruber-eating'
            show: 'The Talk Show #71'
            url: 'http://5by5.tv/talkshow/71'
            speaker: 'Gruber'
        }
        new app.SoundByte {
            title: "Hi I'm Merlin Mann!"
            filename: ''
            show: 'Back to Work #46'
            url: 'http://5by5.tv/b2w/46'
            speaker: 'Dan'
        }
        new app.SoundByte {
            title: 'Bulk Bag'
            filename: ''
            show: 'Back to Work #45'
            url: 'http://5by5.tv/b2w/45'
            speaker: 'Dan'
        }
        new app.SoundByte {
            title: 'Terp-stra'
            filename: ''
            show: 'Back to Work #44'
            url: 'http://5by5.tv/b2w/44'
            speaker: 'Dan'
        }
        new app.SoundByte {
            title: 'Hi!'
            filename: ''
            show: 'Back to Work #44'
            url: 'http://5by5.tv/b2w/44'
            speaker: 'Merlin'
        }
    ]

    window.bytes = bytes

    @app.router = new app.AppRouter()
    if Modernizr.history
        Backbone.history.start({pushState: true})
    else
        Backbone.history.start()
    
    @app.SoundBytes.add bytes

