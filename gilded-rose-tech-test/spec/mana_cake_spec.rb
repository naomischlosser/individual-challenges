require 'item'
require 'mana_cake'

describe ManaCake do
  context "for special item - Conjured Mana Cake" do
    it "decreases the sell_in and quality when 0 < quality < 50 (capitalised)" do
      items = [Item.new("Conjured Mana Cake", 10, 5)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq 9
      expect(items[0].quality).to eq 3
    end

    it "decreases only the sell_in when quality = 0" do
      items = [Item.new("Conjured Mana Cake", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq -1
      expect(items[0].quality).to eq 0
    end

    it "decreases the sell_in and quality when quality = 1" do
      items = [Item.new("Conjured Mana Cake", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq -1
      expect(items[0].quality).to eq 0
    end
  end
end