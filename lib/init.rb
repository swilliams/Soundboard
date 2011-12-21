Dir['./lib/isolate*/lib'].each do |dir|
  $: << dir
end

require "rubygems"
require "isolate/now"

require "sinatra/base"
require "sass/plugin/rack"
require "barista"
require "json"


