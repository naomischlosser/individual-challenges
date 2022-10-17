require 'item'
require 'sulfuras'

describe Sulfuras do
  context "for special item - Sulfuras, Hand of Ragnaros" do
    it "never increases or decreases sell_in or quality" do
      item = Item.new("Sulfuras, Hand of Ragnaros", 10, 50)
      Sulfuras.new(item).update_quality()
      expect(item.sell_in).to eq 10
      expect(item.quality).to eq 50
    end
  end
end