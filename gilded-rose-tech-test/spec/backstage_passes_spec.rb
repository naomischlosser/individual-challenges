require 'backstage_passes'

describe BackstagePasses do

  describe "#update_quality" do
    it "decreases the sell_in and increases the quality when 0 < quality < 50" do
      item = BackstagePasses.new(15, 5)
      item.update_quality()
      expect(item.sell_in).to eq 14
      expect(item.quality).to eq 6
    end

    it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and 0 < quality < 50" do
      item = BackstagePasses.new(11, 5)
      item.update_quality()
      expect(item.sell_in).to eq 10
      expect(item.quality).to eq 7
    end

    it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and 0 < quality < 50" do
      item = BackstagePasses.new(6, 5)
      item.update_quality()
      expect(item.sell_in).to eq 5
      expect(item.quality).to eq 8
    end

    it "decreases the sell_in and sets quality to 0 when sell_in < 0" do
      item = BackstagePasses.new(0, 5)
      item.update_quality()
      expect(item.sell_in).to eq -1
      expect(item.quality).to eq 0
    end

    it "decreases only the sell_in when quality = 50" do
      item = BackstagePasses.new(15, 50)
      item.update_quality()
      expect(item.sell_in).to eq 14
      expect(item.quality).to eq 50
    end

    it "decreases the sell_in and increases the quality when 5 < sell_in < 11 and quality = 49" do
      item = BackstagePasses.new(10, 49)
      item.update_quality()
      expect(item.sell_in).to eq 9
      expect(item.quality).to eq 50
    end

    it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 49" do
      item = BackstagePasses.new(5, 49)
      item.update_quality()
      expect(item.sell_in).to eq 4
      expect(item.quality).to eq 50
    end

    it "decreases the sell_in and increases the quality when 0 < sell_in < 5 and quality = 48" do
      item = BackstagePasses.new(5, 48)
      item.update_quality()
      expect(item.sell_in).to eq 4
      expect(item.quality).to eq 50
    end
  end
end