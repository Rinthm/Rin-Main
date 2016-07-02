Rails.application.routes.draw do
 
  root 'landing#index'

  get '/home', to: 'home#index'

end
