Rails.application.routes.draw do
  get 'game/index'

   # Formward root to HomeController#index
   root "home#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
