Ext.data.JsonP.Util_Camera({"tagname":"class","name":"Util.Camera","autodetected":{},"files":[{"filename":"Camera.js","href":"Camera.html#Util-Camera"}],"author":[{"tagname":"author","name":"Steven House","email":"steven.m.house@gmail.com"}],"members":[{"name":"videoUri","tagname":"property","owner":"Util.Camera","id":"property-videoUri","meta":{}},{"name":"captureImage","tagname":"method","owner":"Util.Camera","id":"method-captureImage","meta":{}},{"name":"captureVideo","tagname":"method","owner":"Util.Camera","id":"method-captureVideo","meta":{}},{"name":"compressVideo","tagname":"method","owner":"Util.Camera","id":"method-compressVideo","meta":{}},{"name":"fromGallery","tagname":"method","owner":"Util.Camera","id":"method-fromGallery","meta":{}},{"name":"init","tagname":"method","owner":"Util.Camera","id":"method-init","meta":{}},{"name":"promptGalleryOrCamera","tagname":"method","owner":"Util.Camera","id":"method-promptGalleryOrCamera","meta":{}},{"name":"recordVideoAndroid","tagname":"method","owner":"Util.Camera","id":"method-recordVideoAndroid","meta":{}},{"name":"savePhoto","tagname":"method","owner":"Util.Camera","id":"method-savePhoto","meta":{}},{"name":"saveVideoAndroid","tagname":"method","owner":"Util.Camera","id":"method-saveVideoAndroid","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Util.Camera","short_doc":"This handles the camera and related functions. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Camera.html#Util-Camera' target='_blank'>Camera.js</a></div></pre><div class='doc-contents'><p>This handles the camera and related functions.  It handles video as well\nThis goal of this library is to provide a pretty comprehensive and reusable utility library\nfor dealing with the camera for photos and videos and persisting them to the filesystem</p>\n\n<p>@TODO Make it work :D  It's close to fully functional but it still needs to have a few bugs run out\n@TODO  Submit a pull request!</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-videoUri' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-property-videoUri' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-property-videoUri' class='name expandable'>videoUri</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>We'll use the following variable to keep track of the result of our recording action.</p>\n</div><div class='long'><p>We'll use the following variable to keep track of the result of our recording action.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-captureImage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-captureImage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-captureImage' class='name expandable'>captureImage</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This invokes the camera ...</div><div class='long'><p>This invokes the camera</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : args<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-captureVideo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-captureVideo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-captureVideo' class='name expandable'>captureVideo</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Capture video ...</div><div class='long'><p>Capture video</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compressVideo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-compressVideo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-compressVideo' class='name expandable'>compressVideo</a>( <span class='pre'>pathToVideoFile</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathToVideoFile</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fromGallery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-fromGallery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-fromGallery' class='name expandable'>fromGallery</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get images from Gallery ...</div><div class='long'><p>Get images from Gallery</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize the Bluetooth library. ...</div><div class='long'><p>Initialize the Bluetooth library.  Ensure it's only Android that's calling</p>\n</div></div></div><div id='method-promptGalleryOrCamera' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-promptGalleryOrCamera' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-promptGalleryOrCamera' class='name expandable'>promptGalleryOrCamera</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Ask user if they want supply media from gallery or camera ...</div><div class='long'><p>Ask user if they want supply media from gallery or camera</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-recordVideoAndroid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-recordVideoAndroid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-recordVideoAndroid' class='name expandable'>recordVideoAndroid</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This records video in Android by opening up an intent ...</div><div class='long'><p>This records video in Android by opening up an intent</p>\n</div></div></div><div id='method-savePhoto' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-savePhoto' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-savePhoto' class='name expandable'>savePhoto</a>( <span class='pre'>image, imageName, directory</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Save a photo to the SD card ...</div><div class='long'><p>Save a photo to the SD card</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>image</span> : Blob<div class='sub-desc'>\n</div></li><li><span class='pre'>imageName</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>directory</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-saveVideoAndroid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util.Camera'>Util.Camera</span><br/><a href='source/Camera.html#Util-Camera-method-saveVideoAndroid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util.Camera-method-saveVideoAndroid' class='name expandable'>saveVideoAndroid</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>When they click this, we'll save the video to the SDCard and tell the user where to find it. ...</div><div class='long'><p>When they click this, we'll save the video to the SDCard and tell the user where to find it.</p>\n</div></div></div></div></div></div></div>","meta":{}});