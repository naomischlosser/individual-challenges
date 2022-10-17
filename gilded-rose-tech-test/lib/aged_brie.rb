require 'gilded_rose'

class AgedBrie < GildedRose
  def initialize(item)
    @item = item
  end

  def update_quality()
    check_quality()
    
    @item.sell_in -= 1
    @item.quality = [@item.quality += 1, 50].min
  end
end