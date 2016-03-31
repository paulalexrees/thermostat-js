require 'sinatra/base'
require 'dm-postgres-adapter'
require 'sinatra/flash'
require 'bcrypt'



class Thermostat < Sinatra::Base


  get "/" do
    send_file "src/thermostat.html"
  end

  get '/temperature' do
    response['Access-Control-Allow-Origin'] = '*'
    temp = Temp.last
  end

  post '/temperature' do
    response['Access-Control-Allow-Origin'] = '*'
    temp = Temp.create(temp: params[:temperature])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
