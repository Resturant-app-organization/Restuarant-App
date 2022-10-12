Rails.application.routes.draw do
  resources :cjrestaurants
  resources :burgers
  resources :reviews
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
end
