class WelcomeController < ApplicationController
  def index
    render component: 'Home', props: { name: 'Scott' }
  end
end
