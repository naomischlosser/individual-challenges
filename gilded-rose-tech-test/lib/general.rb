require 'item'

class General < Item
  def initialize(item)
    @item = item
  end

  def update_quality()
    @item.sell_in -= 1

    if (@item.sell_in > 0 && @item.quality > 0) || (@item.sell_in <= 0 && @item.quality = 1)
      @item.quality -= 1
    elsif @item.sell_in <= 0 && @item.quality >= 2
      @item.quality -= 2
    end
  end
end