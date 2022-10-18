# Project description
This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is a refactoring excercise. The original Ruby code can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/ruby/gilded_rose.rb).

### User story
_Our inn buys and sells only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. After a good few years of using the system an update is required. Changes to the original `update_quality` method and adding any new code is allowed as long as everything still works correctly. However, **do not alter the Item class**._

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
The `Item` class is the parent class and all the other items inherit from this class to store the name, sell_in and quality. Each child has its own `update_quality` method that corresponds to that particular item. The `GildedRose` class takes an array of items, loops through each item and updates the sell_in and quality when the `update_quality` method is called.

Parent
- Item

Children
- AgedBrie
- BackstagePasses
- General
- ManaCake
- Sulfuras

## DevDependencies
This program runs in Ruby.

Run the following commands before running tests using `rspec`:

```
bundle install
```

