class GildedRose
  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.map do |item|
      item.update_quality() 
    end
  end
end