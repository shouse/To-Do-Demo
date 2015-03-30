
Main folder for [Titanium Alloy](http://en.wikipedia.org/wiki/Titanium_alloy) MVC
=========================================

Here's how the Alloy directory is laid out.

* **models**              The base To-Do model goes here
* **controllers**         The controllers / business logic files go here
* **views**               The views go here
* **styles**              The style (.tss) files for your views go here. App.tss is the base
* **assets**              All files here will be deployed into Resources
* **lib**                 Libraries go here and use require('name') to load it
* **migrations**			    Generated model migrations go here.  If you change your model with apps in the wild, use this
* **widgets**				      Pre-built, reusable components for your Ally apps.

Also, in the root is the alloy.jmk file and config.json.  Alloy.jmk acts like a makefile and can be used to hook into the Alloy compiler to customize the build process. The config.json file is where you can declare runtime contstants, and widget dependencies.

