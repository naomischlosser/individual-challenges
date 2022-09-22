require 'gilded_rose_original'

describe GildedRose do

  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("Sulfuras, Hand of Ragnaros", 100, 100)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq 100
      expect(items[0].quality).to eq 100
    end
  end
end