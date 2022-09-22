class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.each do |item|
      case item.name.downcase
      when "aged brie"
        item.sell_in -= 1
        item.quality += 1 if item.quality < 50
      when "Backstage passes to a TAFKAL80ETC concert"
        
      when "sulfuras, hand of ragnaros"
        
      else
        if (item.sell_in > 0 && item.quality > 0) || (item.sell_in <= 0 && item.quality = 1)
          item.quality -= 1
        elsif item.sell_in <= 0 && item.quality >= 2
          item.quality -= 2
        end

        item.sell_in -= 1
      end
    end
  end
end

class Item
  attr_accessor :name, :sell_in, :quality

  def initialize(name, sell_in, quality)
    @name = name
    @sell_in = sell_in
    @quality = quality
  end

  def to_s()
    "#{@name}, #{@sell_in}, #{@quality}"
  end
end
