Rails.application.routes.draw do

  resources :cjrestaurants, only: [:index]
  resources :burgers, only: [:index, :show, :create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :customers, only: [:index, :show, :create]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/me', to: 'customers#show'

  post '/signup', to: "customers#create"


  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
end
