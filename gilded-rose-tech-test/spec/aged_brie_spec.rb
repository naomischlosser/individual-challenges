require 'aged_brie'

describe AgedBrie do

  describe "#update_quality" do
    it "decreases the sell_in and increases the quality when 0 < quality < 50" do
      item = AgedBrie.new(10, 5)
      item.update_quality()
      expect(item.sell_in).to eq 9
      expect(item.quality).to eq 6
    end

    it "decreases only the sell_in when quality > 50" do
      item = AgedBrie.new(0, 50)
      item.update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 50
    end
  end
end