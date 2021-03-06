# To-Do Demo [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http:/appcelerator.com/alloy/)

By [Steven House](https://www.linkedin.com/profile/view?id=4522122).

[![Code Climate](https://codeclimate.com/github/shouse/To-Do-Demo/badges/gpa.svg)](https://codeclimate.com/github/shouse/To-Do-Demo)
[![Stories in Ready](https://badge.waffle.io/shouse/To-Do-Demo.png?label=ready&title=Ready)](https://waffle.io/shouse/To-Do-Demo)

## Description
**To-Do-Demo** is a To-Do app for Titanium showcasing many best practices and some reusable components.

## Installation
Clone or download this and build using standard Titanium build practices.  The project is written using Alloy... because if you are still using Titanium classic you are just wrong.

```console
ti build -p ios -F iphone
```
OR

```console
ti build -p android -T device
```

## Usage

Should be self-explanatory!  Ask about the usage of any of the components and I'll expand on that part.

## Configuration
The configuration at this moment is for the logger

```javascript
"logger": {
  "enabled": true,         // Enabled or not?  Disable at runtime for more capabilities
  "remoteProvider": "acs", // Want to store your logs to a remote provider?  Plugins needed and slight re-arch
  "remoteLevel": "E",      // What threshold level should logs be sent?
  "fileLevel": "D",        // What threshold level should logs be sent to filesytem? 
  "crittercism": false,    // Use Crittercism?  Why not?  Configure crittercism integration here
  "crittercismIOSAppId": "[YOUR-IOS-APP-ID]",
  "crittercismAndroidAppId": "[YOUR-ANDROID-APP-ID]"
}
```

## Information
Here's a link to the [documentation generated by JSDuck](http://shouse.github.io/docs).  If you don't quack your JS yet it's time to consider.

Here's a link to a [complexity analysis report generated by PlatoJS] (http://shouse.github.io/report)

Screenshots of **To-Do-Demo** below:

![Screenshot 1](https://raw.githubusercontent.com/shouse/To-Do-Demo/master/screenshots/screen-shot-1.png)
![Screenshot 2](https://raw.githubusercontent.com/shouse/To-Do-Demo/master/screenshots/screen-shot-2.png)
![Screenshot 3](https://raw.githubusercontent.com/shouse/To-Do-Demo/master/screenshots/screen-shot-3.png)
![Screenshot 4](https://raw.githubusercontent.com/shouse/To-Do-Demo/master/screenshots/screen-shot-4.png)
![Screenshot 5](https://raw.githubusercontent.com/shouse/To-Do-Demo/master/screenshots/screen-shot-5.png)

### Known Issues
* The checkbox for Android on the Task Detail page is not vertically centered

If you discover any bugs, feel free to create an issue on GitHub fork and send me a pull request.  I'll be adding to this as I can.

[Issues List](https://github.com/shouse/To-Do-Demo/issues).

### Enhancements to make the app
* Make task deletable from the detail page and not just the List page
* Allow swiping from task to task
* Allow swiping from gallery photo detail to next
* Allow user to DL predefined task lists for common tasks
* Implement tagging for categorical sorting
* List View: have sort-by enhancements
* ... what else can you think of? 

## Authors

Steven House (https://github.com/shouse)
* I'm using a lot of components from all over the net and I haven't always remembered where I pulled the bits and pieces. 
* I'd like to give proper attribution so also feel free to create an issue for attribution 
* I've learned from the legends and they are either authors of some of the sub components or directly influenced my Titanium knowledge and thus indirect authors

[Fokke Zandbergen] (https://github.com/FokkeZB)
[Olivier Morandi] (https://github.com/omorandi)
[Jeff Haynie] (https://github.com/jhaynie)
[Ben Bahrenburg] (https://github.com/benbahrenburg)

... and many more.

CodeStrong!

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
This project is licensed under the OSI approved Apache Public License (version 2). For details please see the license associated with each project.
