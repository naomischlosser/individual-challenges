require 'gilded_rose'
require 'general'
require 'aged_brie'

describe GildedRose do

  describe "#update_quality" do
    it "updates all items" do
      general = General.new("hoover", 40, 5)
      brie = AgedBrie.new(5, 1)
      GildedRose.new([general, brie]).update_quality
      expect(general.sell_in).to eq 39
      expect(general.quality).to eq 4
      expect(brie.sell_in).to eq 4
      expect(brie.quality).to eq 2
    end
  end
end