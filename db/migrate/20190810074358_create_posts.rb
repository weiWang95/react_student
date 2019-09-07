class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, comment: '作者'
      t.string :title, comment: '标题'

      t.text :content, comment: '内容'
      t.text :convert_content, comment: '转化后的内容'

      t.integer :comments_count, default: 0, comment: '评论数量'

      t.datetime :deleted_at, comment: '删除时间'
      t.timestamps

      t.index :updated_at
    end
  end
end
