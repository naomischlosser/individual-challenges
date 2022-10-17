require 'item'
require 'mana_cake'

describe ManaCake do
  
  describe "#update_quality" do
    it "decreases the sell_in and quality when 0 < quality < 50" do
      item = Item.new("Conjured Mana Cake", 10, 5)
      ManaCake.new(item).update_quality()
      expect(item.sell_in).to eq 9
      expect(item.quality).to eq 3
    end

    it "decreases only the sell_in when quality = 0" do
      item = Item.new("Conjured Mana Cake", 0, 0)
      ManaCake.new(item).update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 0
    end

    it "decreases the sell_in and quality when quality = 1" do
      item = Item.new("Conjured Mana Cake", 0, 0)
      ManaCake.new(item).update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 0
    end

    context "checking the quality" do
      it "returns an error when given quality < 0 or quality > 50" do
        item = Item.new("Conjured Mana Cake", 0, -5)
        expect{ManaCake.new(item).check_quality()}.to raise_error "Quality is outside the range of 0-50"
      end

      it "returns a string saying the quality is within the range" do
        item = Item.new("Conjured Mana Cake", 0, 5)
        expect(ManaCake.new(item).check_quality()).to eq "Quality is within the range of 0-50"
      end
    end
  end
end