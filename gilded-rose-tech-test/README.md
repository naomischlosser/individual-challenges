# Project description
_Our inn buys and sells only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us._

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a `Quality` value which denotes how valuable the item is. At the end of each day our system updates both values for every item.

General requirements:

- The Quality of an item is never negative
- The Quality of an item is never more than 50
- Once the sell by date has passed, Quality degrades twice as fast

Special items:

- “Sulfuras” never has to be sold or decreases in Quality
- “Aged Brie” actually increases in Quality the older it gets 
- “Backstage passes” increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

An update is required that includes conjured items:

- “Conjured” items degrade in Quality twice as fast as normal items

Changes to the `UpdateQuality` method and adding any new code is allowed as long as everything still works correctly. However, **do not alter the Item class**.

### Special item list
- Sulfuras, Hand of Ragnaros
- Aged Brie
- Backstage passes to a TAFKAL80ETC concert
- Conjured items

## DevDependencies
This program runs in Ruby.

Run the following commands before running tests using `rspec`:

```
bundle install
```

