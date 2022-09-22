require 'gilded_rose'

describe GildedRose do

  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("foo", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end

    context "for any general item" do
      it "decreases the sell_in and quality when 0 < quality < 50" do
        items = [Item.new("foo", 10, 6)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq 9
        expect(items[0].quality).to eq 5
      end

      it "decreases only the sell_in when quality = 0" do
        items = [Item.new("foo", 10, 0)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq 9
        expect(items[0].quality).to eq 0
      end

      it "decreases the sell_in and quality (-2) when sell_in < 0" do
        items = [Item.new("foo", 0, 2)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq -1
        expect(items[0].quality).to eq 0
      end

      it "decreases the sell_in and quality (-1) when sell_in < 0" do
        items = [Item.new("foo", 0, 1)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq -1
        expect(items[0].quality).to eq 0
      end


      it "decreases only the sell_in when sell_in < 0 and quality = 0" do
        items = [Item.new("foo", 0, 0)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq -1
        expect(items[0].quality).to eq 0
      end
    end

    context "for special item - Aged Brie" do
      it "decreases the sell_in and increases the quality when 0 < quality < 50" do
        items = [Item.new("Aged Brie", 10, 5)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq 9
        expect(items[0].quality).to eq 6
      end

      it "decreases only the sell_in when quality > 50" do
        items = [Item.new("Aged Brie", 10, 50)]
        GildedRose.new(items).update_quality()
        expect(items[0].sell_in).to eq 9
        expect(items[0].quality).to eq 50
      end
    end
  end
end