class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, limit: 60, comment: '用户名'
      t.string :password_digest, comment: '密码签名'

      t.string :state, comment: '状态'

      t.string :description, comment: '描述'
      t.integer :posts_count, default: 0, comment: '帖子数量'
      t.integer :comments_count, default: 0, comment: '评论数量'

      t.datetime :last_login_at, comment: '最后登录时间'
      t.datetime :deleted_at, comment: '删除时间'
      t.timestamps

      t.index :username, unique: true
    end
  end
end
