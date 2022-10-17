require 'item'
require 'backstage_passes'

describe BackstagePasses do

  describe "#update_quality" do
    context "for special item - Backstage passes to a TAFKAL80ETC concert" do
      it "decreases the sell_in and increases the quality when 0 < quality < 50" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 15, 5)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 14
        expect(item.quality).to eq 6
      end

      it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and 0 < quality < 50" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 11, 5)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 10
        expect(item.quality).to eq 7
      end

      it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and 0 < quality < 50" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 6, 5)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 5
        expect(item.quality).to eq 8
      end

      it "decreases the sell_in and sets quality to 0 when sell_in < 0" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 0, 5)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end

      it "decreases only the sell_in when quality = 50" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 15, 50)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 14
        expect(item.quality).to eq 50
      end

      it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and quality = 49" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 10, 49)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 50
      end

      it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 49" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 49)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 4
        expect(item.quality).to eq 50
      end

      it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 48" do
        item = Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 48)
        BackstagePasses.new(item).update_quality()
        expect(item.sell_in).to eq 4
        expect(item.quality).to eq 50
      end
    end
  end
end