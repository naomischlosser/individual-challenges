require 'gilded_rose'

class Sulfuras < GildedRose
  def initialize(item)
    @item = item
  end

  def check_quality()
    fail "Sulfuras, Hand of Ragnaros quality should be 80" if @item.quality != 80
  end

  def update_quality()
    # never has to be sold or decrease in quality
  end

end