require 'item'
require 'sulfuras'

describe Sulfuras do

  describe "#update_quality" do
    it "never increases or decreases sell_in or quality" do
      item = Item.new("Sulfuras, Hand of Ragnaros", 10, 80)
      Sulfuras.new(item).update_quality()
      expect(item.sell_in).to eq 10
      expect(item.quality).to eq 80
    end

    context "checking quality" do
      xit "returns an error when given quality is anything but 80" do
        item = Item.new("Sulfuras, Hand of Ragnaros", 10, -5)
        expect{Sulfuras.new(item).check_quality()}.to raise_error "Sulfuras, Hand of Ragnaros quality should be 80"
      end

      xit "returns a string saying the quality is within the range" do
        item = Item.new("Sulfuras, Hand of Ragnaros", 10, 80)
        expect(Sulfuras.new(item).check_quality()).to eq "Sulfuras, Hand of Ragnaros quality is 80"
      end
    end
  end
end