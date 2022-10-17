require 'gilded_rose'

class ManaCake < GildedRose
  def initialize(item)
    @item = item
  end

  def update_quality()
<<<<<<< HEAD
    @item.sell_in -= 1
    @item.quality = [@item.quality -= 2, 0].max
  end
=======

  end

>>>>>>> c3fb65470ddc54455b90d29643a9abc2bf1d7eed
end