# frozen_string_literal: true

class FilmsController < ApplicationController
  def index
    @films = Film.all
  end
end
