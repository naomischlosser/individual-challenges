require 'item'
require 'aged_brie'

describe AgedBrie do

  describe "#update_quality" do
    context "for special item - Aged Brie" do
      it "decreases the sell_in and increases the quality when 0 < quality < 50 (capitalised)" do
        item = Item.new("Aged Brie", 10, 5)
        AgedBrie.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 6
      end

      it "decreases the sell_in and increases the quality when 0 < quality < 50 (lower case)" do
        item = Item.new("aged brie", 10, 5)
        AgedBrie.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 6
      end

      it "decreases only the sell_in when quality > 50" do
        item = Item.new("Aged Brie", 0, 50)
        AgedBrie.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 50
      end
    end
  end
end