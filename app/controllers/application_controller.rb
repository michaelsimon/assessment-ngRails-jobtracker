class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # before_action :configure_permitted_parameters, if: :devise_controller?
  skip_before_action :verify_authenticity_token, if: :json_request?
  protect_from_forgery
  respond_to :json

  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
  end

  protected
  def json_request?
    request.format.json?
  end

  private
  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.for(:sign_up) << :username
  # end
end
