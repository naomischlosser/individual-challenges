require 'item'

class BackstagePasses < Item
  def initialize(sell_in, quality)
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  end

  def update_quality()
    @sell_in -= 1

    if @sell_in.between?(6,10)
      @quality = [@quality += 2, 50].min
    elsif @sell_in.between?(0,5)
      @quality = [@quality += 3, 50].min
    elsif @sell_in < 0
      @quality = 0
    else
      @quality = [@quality += 1, 50].min
    end
  end
end