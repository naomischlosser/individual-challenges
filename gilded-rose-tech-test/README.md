# Project description
This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is a refactoring excercise. The original Ruby code can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/ruby/gilded_rose.rb).

### User story
_Our inn buys and sells only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. After a good few years of using the system an update is required. Changes to the original `UpdateQuality` method and adding any new code is allowed as long as everything still works correctly. However, **do not alter the Item class**._

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a `Quality` value which denotes how valuable the item is. At the end of each day our system updates both values for every item.

General requirements (refer to gilded_rose.rb):

- The Quality of an item is never negative
- The Quality of an item is never more than 50
- Once the sell by date has passed, Quality degrades twice as fast

Special items:

- “Aged Brie” actually increases in Quality the older it gets 
- “Backstage passes” increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
- “Sulfuras” never has to be sold or decreases in Quality.

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

An update is required that includes conjured items:

- “Conjured” items degrade in Quality twice as fast as normal items

### Code structure
The GildedRose class is the parent class and the special items inherit from this class. For example, to ensure DRY code, the `check_quality` method can be used in all the childeren that have the same quality range. Only the Sulfuras class overrides this method as the quality should always be 80. In addition, the GildedRose class method `update_quality` covers all the items that are not a special item. Although the current list of childeren override this method, it can be useful if another child is added that e.g. also stores the colour if that item, but wants to make use of the `update_quality` of its parent GildedRose. The Item class is a standalone class; it supports the other classes by storing the name, sell_in and quality of the products.

Parent
- GildedRose

Children
- AgedBrie
- BackstagePasses
- ManaCake
- Sulfuras

## DevDependencies
This program runs in Ruby.

Run the following commands before running tests using `rspec`:

```
bundle install
```

