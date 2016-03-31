require 'data_mapper'
require 'dm-postgres-adapter'


class Temp
  include DataMapper::Resource

  roperty :id, Serial
  property :temp, Integer


end

connection_string = "postgres://localhost/temperature"
DataMapper::Logger.new($stdout, :debug)
DataMapper.setup(:default, ENV['DATABASE_URL'] || connection_string)
DataMapper.finalize.auto_upgrade!
