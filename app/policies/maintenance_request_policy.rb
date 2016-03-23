class MaintenanceRequestPolicy < ApplicationPolicy
  attr_reader :route, :record

  def initialize(current_user, request)
    @current_user = current_user
    @request = request
  end

  def new?
    @current_user.role != "Public"
  end

  def create?
    @current_user.role != "Public"
  end

  def edit?
    # consider checking for supervisor or above?
    @current_user.id == @request.user_id
  end
end
