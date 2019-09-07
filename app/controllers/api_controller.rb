class ApiController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  include RenderHelper
  include ErrorHandler

  after_action :set_csrf_cookie

  helper_method :current_user

  def current_user
    @_current_user ||= User.find_by(id: session_user_id)
  end

  def require_login
    return if current_user

    render_unauthorized
  end

  private

  def session_user_id
    session[:user_id]
  end

  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end
end