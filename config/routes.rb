Rails.application.routes.draw do
  namespace :v1, defaults: { format: "json" } do
    get "game", to: "games#index"
  end

   # Formward root to HomeController#index
   root "home#index"

   get "*page", to: "home#index", constraints: ->(req) do
   !req.xhr? && req.format.html?
 end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
