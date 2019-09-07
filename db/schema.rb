# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_10_082635) do

  create_table "comments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.bigint "user_id", comment: "作者"
    t.bigint "post_id", comment: "帖子"
    t.bigint "parent_id", comment: "父级评论"
    t.text "content", comment: "内容"
    t.text "convert_content", comment: "转化后的内容"
    t.datetime "deleted_at", comment: "删除时间"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_comments_on_created_at"
    t.index ["parent_id"], name: "index_comments_on_parent_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "posts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.bigint "user_id", comment: "作者"
    t.string "title", comment: "标题"
    t.text "content", comment: "内容"
    t.text "convert_content", comment: "转化后的内容"
    t.integer "comments_count", default: 0, comment: "评论数量"
    t.datetime "deleted_at", comment: "删除时间"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["updated_at"], name: "index_posts_on_updated_at"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "username", limit: 60, comment: "用户名"
    t.string "password_digest", comment: "密码签名"
    t.string "state", comment: "状态"
    t.string "description", comment: "描述"
    t.integer "posts_count", default: 0, comment: "帖子数量"
    t.integer "comments_count", default: 0, comment: "评论数量"
    t.datetime "last_login_at", comment: "最后登录时间"
    t.datetime "deleted_at", comment: "删除时间"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "posts", "users"
end
