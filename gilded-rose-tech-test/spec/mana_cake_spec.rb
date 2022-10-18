require 'mana_cake'

describe ManaCake do
  
  describe "#update_quality" do
    it "decreases the sell_in and quality when 0 < quality < 50" do
      item = ManaCake.new(10, 5)
      item.update_quality()
      expect(item.sell_in).to eq 9
      expect(item.quality).to eq 3
    end

    it "decreases only the sell_in when quality = 0" do
      item = ManaCake.new(0, 0)
      item.update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 0
    end

    it "decreases the sell_in and quality when quality = 1" do
      item = ManaCake.new(0, 0)
      item.update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 0
    end
  end
end