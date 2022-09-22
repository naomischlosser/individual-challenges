class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality()

    @items.each do |item|
      fail "Quality is outside of the 0-50 range" if !item.quality.between?(0,50)

      case item.name.downcase
      when "aged brie"
        item.sell_in -= 1
        item.quality = [item.quality += 1, 50].min
      
      when "backstage passes to a tafkal80etc concert"
        item.sell_in -= 1
        if item.sell_in.between?(6,10)
          item.quality = [item.quality += 2, 50].min
        elsif item.sell_in.between?(0,5)
          item.quality = [item.quality += 3, 50].min
        elsif item.sell_in < 0
          item.quality = 0
        else
          item.quality = [item.quality += 1, 50].min
        end
     
      when "conjured mana cake"
        item.sell_in -= 1
        item.quality = [item.quality -= 2, 0].max

      when "sulfuras, hand of ragnaros"
        # never has to be sold or decrease in quality
      
      else
        item.sell_in -= 1
        if (item.sell_in > 0 && item.quality > 0) || (item.sell_in <= 0 && item.quality = 1)
          item.quality -= 1
        elsif item.sell_in <= 0 && item.quality >= 2
          item.quality -= 2
        end
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
