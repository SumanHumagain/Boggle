class V1::GameController < ApplicationController
  def index
  end

  def evaluateInput
     word = params[:word]
    #  puts word;

    app_id = 'b0d3c2de'
    app_key = '4f15f3a8d5425fc7ca492e9cc4e5edb8'
    lang = 'en-gb'
    word_id = word
    fields = 'definitions'
    strict_match = 'false'

    url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/'
    url += lang + '/' + word_id + '?fields=' + fields + '&strictMatch=' + strict_match
    headers = {
      app_id: app_id,
      app_key: app_key
    }
    request = HTTParty.get(url, headers: headers)

    render json: {
              data: request.success?
            }
   
 end

end