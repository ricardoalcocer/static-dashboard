Quick and Dirty Static Dashboard
================================

 

I build this some time ago and never used it. The idea was to have a static
analytics dashboard that could be updated by simply overwriting a JSON file.

 

Charts engine
=============

The site uses [Chartist](https://gionkunz.github.io/chartist-js/) as the Charting Engine, and has a wrapper module to feed the charts to it in a single JSON object with the following format:

```javascript
var dataSources = {
  headers : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dec"],
  traffic : [0,0,2763,5312,749,4961,20124,17727],
  questionsAsked : [0, 0, 7,9,0,1,16,23],
  uniqueUsers : [0,0,9, 63,7,22,85,73]
};
```
 

 

Basic Screenshot
================

![](http://drops.ricardoalcocer.com/contentful_drops/Screen%20Shot%202017-04-24%20at%2012.37.23%20PM.png)

License
=======

Released under the terms of the MIT License - https://alco.mit-license.org/
