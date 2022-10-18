require 'item'

class Sulfuras < Item
  def initialize(sell_in, quality)
    super('Sulfuras, Hand of Ragnaros', sell_in, quality)
  end

  def update_quality()
    # never has to be sold or decrease in quality
  end

end