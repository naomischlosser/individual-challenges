require 'item'

class ManaCake < Item
  def initialize(sell_in, quality)
    super('Conjured Mana Cake', sell_in, quality)
  end

  def update_quality()
    @sell_in -= 1
    @quality = [@quality -= 2, 0].max
  end
end