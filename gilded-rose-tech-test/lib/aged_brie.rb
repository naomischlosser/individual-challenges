require 'item'

class AgedBrie < Item
  def initialize(sell_in, quality)
    super('Aged Brie', sell_in, quality)
  end

  def update_quality()
    @sell_in -= 1
    @quality = [@quality += 1, 50].min
  end
end