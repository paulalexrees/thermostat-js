require 'sinatra/base'
require 'dm-postgres-adapter'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  # get "/" do
  #   send_file "src/thermostat.html"
  # end
  post '/temperature', provides: :json do
    response['Access-Control-Allow-Origin'] = '*'
    p session[:temp] = params[:temp]
    # p request.body.read
    redirect "/temperature"
  end

  get '/temperature' do
    response['Access-Control-Allow-Origin'] = '*'
    p session[:temp]
    # if session[:temp]
    #   JSON.generate({ temp: session[:temp] })
    # else
    #   JSON.generate({ temp: 20 })
    # end
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
