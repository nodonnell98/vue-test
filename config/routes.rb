Rails.application.routes.draw do
  root to: 'static_pages#landing'
  get 'static_pages/landing'
  get '/spreadsheet', to: 'static_pages#spreadsheet'

  resources :films, only: :index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
