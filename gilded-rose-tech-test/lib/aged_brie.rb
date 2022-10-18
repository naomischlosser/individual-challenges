require 'item'

class AgedBrie < Item
  def initialize(item)
    @item = item
  end

  def update_quality()
    @item.sell_in -= 1
    @item.quality = [@item.quality += 1, 50].min
  end
end