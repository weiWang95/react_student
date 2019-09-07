Rails.application.routes.draw do
  resource :home, only: [:show]

  root 'homes#show'

  defaults format: :json do
    scope :api do
      resource :sessions, only: %i[create show destroy]

      match '*path', to: 'api#render_not_found', via: :all
    end
  end

  match '*path', to: 'homes#show', via: :all
end
