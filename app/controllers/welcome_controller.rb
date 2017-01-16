class WelcomeController < ApplicationController
  def index
    render 'index', locals: {name: 'Scott'}
  end
end
