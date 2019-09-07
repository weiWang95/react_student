class SessionsController < ApiController
  before_action :require_login, except: [:create, :show]

  def create
    user = User.find_by(username: params[:username])
    return render_unprocessable_entity('该用户不存在') if user.blank?
    return render_unprocessable_entity('用户名或密码不正确') unless user.authenticate(params[:password])

    session[:user_id] = user.id
    user.touch(:last_login_at)
    render_ok
  end

  def show
  end

  def destroy
    session[:user_id] = nil
    render_ok
  end
end