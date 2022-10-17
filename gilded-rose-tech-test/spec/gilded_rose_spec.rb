require 'item'
require 'aged_brie'
require 'gilded_rose'

describe GildedRose do

  describe "#update_quality" do
    # it "does not change the name" do
    #   items = [Item.new("foo", 0, 0)]
    #   GildedRose.new(items).update_quality()
    #   expect(items[0].name).to eq "foo"
    # end

    # context "for any normal item" do
    #   it "decreases the sell_in and quality when 0 < quality < 50" do
    #     items = [Item.new("foo", 10, 6)]
    #     GildedRose.new(items).update_quality()
    #     expect(items[0].sell_in).to eq 9
    #     expect(items[0].quality).to eq 5
    #   end

    #   it "decreases only the sell_in when quality = 0" do
    #     items = [Item.new("foo", 10, 0)]
    #     GildedRose.new(items).update_quality()
    #     expect(items[0].sell_in).to eq 9
    #     expect(items[0].quality).to eq 0
    #   end

    #   it "decreases the sell_in and quality (-2) when sell_in < 0" do
    #     items = [Item.new("foo", 0, 2)]
    #     GildedRose.new(items).update_quality()
    #     expect(items[0].sell_in).to eq -1
    #     expect(items[0].quality).to eq 0
    #   end

    #   it "decreases the sell_in and quality (-1) when sell_in < 0" do
    #     items = [Item.new("foo", 0, 1)]
    #     GildedRose.new(items).update_quality()
    #     expect(items[0].sell_in).to eq -1
    #     expect(items[0].quality).to eq 0
    #   end


    #   it "decreases only the sell_in when sell_in < 0 and quality = 0" do
    #     items = [Item.new("foo", 0, 0)]
    #     GildedRose.new(items).update_quality()
    #     expect(items[0].sell_in).to eq -1
    #     expect(items[0].quality).to eq 0
    #   end
    # end

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

  #   context "for special item - Backstage passes to a TAFKAL80ETC concert" do
  #     it "decreases the sell_in and increases the quality when 0 < quality < 50" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 15, 5)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 14
  #       expect(items[0].quality).to eq 6
  #     end

  #     it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and 0 < quality < 50" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 11, 5)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 10
  #       expect(items[0].quality).to eq 7
  #     end

  #     it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and 0 < quality < 50" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 6, 5)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 5
  #       expect(items[0].quality).to eq 8
  #     end

  #     it "decreases the sell_in and sets quality to 0 when sell_in < 0" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 0, 5)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq -1
  #       expect(items[0].quality).to eq 0
  #     end

  #     it "decreases only the sell_in when quality = 50" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 15, 50)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 14
  #       expect(items[0].quality).to eq 50
  #     end

  #     it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and quality = 49" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 10, 49)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 9
  #       expect(items[0].quality).to eq 50
  #     end

  #     it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 49" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 49)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 4
  #       expect(items[0].quality).to eq 50
  #     end

  #     it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 48" do
  #       items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 48)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 4
  #       expect(items[0].quality).to eq 50
  #     end
  #   end

  #   context "for special item - Sulfuras, Hand of Ragnaros" do
  #     it "never increases or decreases sell_in or quality" do
  #       items = [Item.new("Sulfuras, Hand of Ragnaros", 10, 50)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 10
  #       expect(items[0].quality).to eq 50
  #     end
  #   end

  #   context "for special item - Conjured Mana Cake" do
  #     it "decreases the sell_in and quality when 0 < quality < 50 (capitalised)" do
  #       items = [Item.new("Conjured Mana Cake", 10, 5)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq 9
  #       expect(items[0].quality).to eq 3
  #     end

  #     it "decreases only the sell_in when quality = 0" do
  #       items = [Item.new("Conjured Mana Cake", 0, 0)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq -1
  #       expect(items[0].quality).to eq 0
  #     end

  #     it "decreases the sell_in and quality when quality = 1" do
  #       items = [Item.new("Conjured Mana Cake", 0, 0)]
  #       GildedRose.new(items).update_quality()
  #       expect(items[0].sell_in).to eq -1
  #       expect(items[0].quality).to eq 0
  #     end
  #   end

  #   context "when given quality < 0 or quality > 50" do
  #     it "returns an error" do
  #       items = [Item.new("foo", 0, -5)]
  #       expect{GildedRose.new(items).update_quality()}.to raise_error "Quality is outside of the 0-50 range"
  #     end
  #   end
  end
end