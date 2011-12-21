require './lib/init'

require "rake/testtask"

Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList["test/*_test.rb"]
end

task :default => :test

load 'barista/tasks/barista.rake'

desc "Run the server"
task :server do
  system "rackup config.ru -p 3002"
end

desc "Environment stub for compatibility"
task :environment do
  
end

desc "Interact with code in IRB."
task :console do
  exec "irb -Ilib -rinit"
end

