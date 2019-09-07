module ErrorHandler
  extend ActiveSupport::Concern


  included do
    rescue_from Exception do |ex|
      Rails.logger.error(ex.message)
      internal_server_error
    end

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveModel::ValidationError do |ex|
      render_unprocessable_entity(ex.model.errors.full_messages)
    end
    rescue_from ActiveRecord::RecordInvalid do |ex|
      render_unprocessable_entity(ex.record.errors.full_messages)
    end
  end
end