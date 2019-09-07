module RenderHelper
  def render_ok(data = {})
    render json: data
  end

  def head_ok
    render head: :ok
  end

  def render_unprocessable_entity(errors)
    render status: :unprocessable_entity, json: { errors: errors }
  end

  def render_not_found(errors = ['资源未找到'])
    render status: :not_found, json: { errors: errors }
  end

  def render_forbidden(errors = ['未授权'])
    render status: :forbidden, json: { errors: errors }
  end

  def render_unauthorized(errors = ['未登录'])
    render status: :unauthorized, json: { errors: errors }
  end

  def internal_server_error(errors = ['系统错误'])
    render status: :internal_server_error, json: { errors: errors }
  end
end