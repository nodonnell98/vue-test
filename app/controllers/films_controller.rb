# frozen_string_literal: true

# Controller for film model
class FilmsController < ApplicationController
  before_action :fetch_film, except: :index

  def index
    @films = Film.all.order(:id)
  end

  def update
    @film.update(film_params)
  end

  private

  def fetch_film
    @film = Film.find(film_params[:id])
  end

  def film_params
    params.require(:film).permit(:id, :name, :year)
  end
end
