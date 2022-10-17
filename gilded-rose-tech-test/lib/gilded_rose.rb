class GildedRose
  def initialize(item)
    @item = item
  end

  def check_quality()
    fail "Quality is outside of the 0-50 range" if !@item.quality.between?(0,50)
    "Quality is within the range of 0-50"
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
