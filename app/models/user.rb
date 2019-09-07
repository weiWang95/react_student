class User < ApplicationRecord
  has_many :posts
  has_many :comments

  has_secure_password
  has_one_attached :image

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
end