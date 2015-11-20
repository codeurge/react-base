Rails.application.routes.draw do
  root to: 'counters#index'
  resources :counters
end
