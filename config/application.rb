require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Reactly
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.browserify_rails.commandline_options = "-t babelify --extension '.jsx' --plugin [ css-modulesify --output #{Rails.root.to_s}/public/stylesheets/bundle.css --rootDir #{Rails.root.to_s}/app/assets/javascripts ]"
    config.browserify_rails.use_browserifyinc = false
  end
end
