require "./lib/init"

class SoundBoardApp < Sinatra::Base

    register Barista::Integration::Sinatra

    disable :logging
    set :root, File.dirname(__FILE__) + "/../"
    enable :sessions

    RETURN_HTTP_ERRORS_FOR_CLIENT_DEBUGGING = false

    get "/" do
        send_file "public/index.html", :type => 'text/html', :disposition => 'inline'
    end

    get "/favicon.ico" do
        ""
    end

    # Resources

end

