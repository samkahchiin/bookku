class AddRefToComments < ActiveRecord::Migration
  def change
    add_reference :comments, :user, index: true, foreign_key: true
    add_reference :comments, :book, index: true, foreign_key: true
  end
end