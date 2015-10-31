class User < ActiveRecord::Base
  validates :auth_token, uniqueness: true
  # validates :email, uniqueness: true
  validates :fname, presence: true
  validates :lname, presence: true, length: { minimum: 3 }
  # validates :password, length: { in: 8..20 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_create :generate_authentication_token!

  # associations
  belongs_to :small_group, inverse_of: :users

  has_many :assigned_routes, inverse_of: :user
  has_many :comments, inverse_of: :user
  has_many :maintenance_requests, inverse_of: :user
  has_many :ratings, inverse_of: :user
  has_many :routes, inverse_of: :user
  has_many :support_tickets, inverse_of: :user

  def generate_authentication_token!
    begin
      self.auth_token = Devise.friendly_token
    end while self.class.exists?(auth_token: auth_token)
  end

  def self.with_first_name(first_name)
    where("users.fname LIKE ?", "%#{first_name}%")
  end

  def self.with_last_name(last_name)
    where("users.lname LIKE ?", "%#{last_name}%")
  end

  def self.with_email(email)
    where("users.email LIKE ?", "%#{email}%")
  end
end
