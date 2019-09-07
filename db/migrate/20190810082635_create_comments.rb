class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :user, foreign_key: true, comment: '作者'
      t.references :post, foreign_key: true,comment: '帖子'

      t.references :parent, null: true, comment: '父级评论'

      t.text :content, comment: '内容'
      t.text :convert_content, comment: '转化后的内容'

      t.datetime :deleted_at, comment: '删除时间'
      t.timestamps

      t.index :created_at
    end
  end
end
