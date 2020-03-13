Rails.application.routes.draw do
  namespace :v1, defaults: { format: "json" } do
    get "game", to: "game#index"
    get "game/evaluate", to: "game#evaluateInput"
  end

   # Formward root to HomeController#index
   root "home#index"

   get "*page", to: "home#index", constraints: ->(req) do
   !req.xhr? && req.format.html?
 end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
