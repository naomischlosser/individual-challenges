class GildedRose
  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.each do |item|
      fail "Quality is outside of the 0-50 range" if (!item.quality.between?(0,50) && item.name != "sulfuras, hand of ragnaros")
  
      item.sell_in -= 1

      if (item.sell_in > 0 && item.quality > 0) || (item.sell_in <= 0 && item.quality = 1)
        item.quality -= 1
      elsif item.sell_in <= 0 && item.quality >= 2
        item.quality -= 2
      end
    end
  end
end
