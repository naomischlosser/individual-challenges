require 'item'
require 'gilded_rose'

describe GildedRose do

  describe "#update_quality" do
    context "for any other item" do
      it "does not change the name" do
        item = Item.new("foo", 0, 0)
        GildedRose.new(item).update_quality()
        expect(item.name).to eq "foo"
      end

      it "decreases the sell_in and quality when 0 < quality < 50" do
        item = Item.new("foo", 10, 6)
        GildedRose.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 5
      end

      it "decreases only the sell_in when quality = 0" do
        item = Item.new("foo", 10, 0)
        GildedRose.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 0
      end

      it "decreases the sell_in and quality (-2) when sell_in < 0" do
        item = Item.new("foo", 0, 2)
        GildedRose.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end

      it "decreases the sell_in and quality (-1) when sell_in < 0" do
        item = Item.new("foo", 0, 1)
        GildedRose.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end


      it "decreases only the sell_in when sell_in < 0 and quality = 0" do
        item = Item.new("foo", 0, 0)
        GildedRose.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end
    end

    context "checking the quality" do
      it "returns an error when given quality < 0 or quality > 50" do
        item = Item.new("foo", 0, -5)
        expect{GildedRose.new(item).check_quality()}.to raise_error "Quality is outside the range of 0-50"
      end

      it "returns a string saying the quality is within the range" do
        item = Item.new("foo", 0, 5)
        expect(GildedRose.new(item).check_quality()).to eq "Quality is within the range of 0-50"
      end
    end
  end
end