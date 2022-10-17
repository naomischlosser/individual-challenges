require 'gilded_rose'

class ManaCake < GildedRose
  def initialize(item)
    @item = item
  end

  def update_quality()
    @item.sell_in -= 1
    @item.quality = [@item.quality -= 2, 0].max
  end
end