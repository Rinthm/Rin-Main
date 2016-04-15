Rails.application.routes.draw do
 
  root 'landing#index'

  get '/landing/test', to: 'landing#test'

end
