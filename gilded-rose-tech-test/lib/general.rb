require 'item'

class General < Item
  def initialize(name, sell_in, quality)
    super(name, sell_in, quality)
  end

  def update_quality()
    @sell_in -= 1

    if (@sell_in > 0 && @quality > 0) || (@sell_in <= 0 && @quality = 1)
      @quality -= 1
    elsif @sell_in <= 0 && @quality >= 2
      @quality -= 2
    end
  end
end