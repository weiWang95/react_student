class Comment < ApplicationRecord
  belongs_to :user, counter_cache: true
  belongs_to :post, counter_cache: true
  belongs_to :parent, class_name: 'Comment'

  has_many :children, foreign_key: :parent_id, class_name: 'Comment'
end