class GildedRose
  def initialize(items)
    @items = items
  end

  # def check_quality()
  #   fail "Quality is outside the range of 0-50" if !@item.quality.between?(0,50)
  #   "Quality is within the range of 0-50"
  # end

  def update_quality()
    @items.map do |item|
      item.update_quality() 
    end
  end

end
