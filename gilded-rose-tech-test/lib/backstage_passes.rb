require 'gilded_rose'

class BackstagePasses < GildedRose
  def initialize(item)
    @item = item
  end

  def update_quality()
    check_quality()
    
    @item.sell_in -= 1

    if @item.sell_in.between?(6,10)
      @item.quality = [@item.quality += 2, 50].min
    elsif @item.sell_in.between?(0,5)
      @item.quality = [@item.quality += 3, 50].min
    elsif @item.sell_in < 0
      @item.quality = 0
    else
      @item.quality = [@item.quality += 1, 50].min
    end
  end
end