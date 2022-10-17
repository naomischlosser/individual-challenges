require 'gilded_rose'

class Sulfuras < GildedRose
  def initialize(item)
    @item = item
  end

  def update_quality()
    # never has to be sold or decrease in quality
  end

end