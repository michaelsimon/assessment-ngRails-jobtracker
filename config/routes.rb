Rails.application.routes.draw do
  devise_for :users
  root 'application#index'

  get 'jobs' => 'jobs#index'
  get 'jobs/:id' => 'jobs#show'
  post 'jobs' => 'jobs#create'
  patch 'jobs/:id' => 'jobs#update'

  get 'jobs/:id/notes' => 'notes#index'
  post 'jobs/:id/notes' => 'notes#create'
end
