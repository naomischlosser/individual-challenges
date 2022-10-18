require 'item'
require 'general'

describe General do

  describe "#update_quality" do
    context "for any other item" do
      it "does not change the name" do
        item = Item.new("foo", 0, 0)
        General.new(item).update_quality()
        expect(item.name).to eq "foo"
      end

      it "decreases the sell_in and quality when 0 < quality < 50" do
        item = Item.new("foo", 10, 6)
        General.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 5
      end

      it "decreases only the sell_in when quality = 0" do
        item = Item.new("foo", 10, 0)
        General.new(item).update_quality()
        expect(item.sell_in).to eq 9
        expect(item.quality).to eq 0
      end

      it "decreases the sell_in and quality (-2) when sell_in < 0" do
        item = Item.new("foo", 0, 2)
        General.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end

      it "decreases the sell_in and quality (-1) when sell_in < 0" do
        item = Item.new("foo", 0, 1)
        General.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end

      it "decreases only the sell_in when sell_in < 0 and quality = 0" do
        item = Item.new("foo", 0, 0)
        General.new(item).update_quality()
        expect(item.sell_in).to eq -1
        expect(item.quality).to eq 0
      end
    end
  end
end