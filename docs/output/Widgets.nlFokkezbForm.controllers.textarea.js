Ext.data.JsonP.Widgets_nlFokkezbForm_controllers_textarea({"tagname":"class","name":"Widgets.nlFokkezbForm.controllers.textarea","autodetected":{},"files":[{"filename":"textarea.js","href":"textarea.html#Widgets-nlFokkezbForm-controllers-textarea"}],"extends":"Widgets.nlFokkezbForm.controllers.field","aliases":{"widget":["text"]},"members":[{"name":"form","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-form","meta":{}},{"name":"name","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-name","meta":{}},{"name":"required","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-required","meta":{}},{"name":"validator","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-validator","meta":{}},{"name":"Controller","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.textarea","id":"method-Controller","meta":{}},{"name":"blur","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-blur","meta":{}},{"name":"change","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-change","meta":{"private":true}},{"name":"focus","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-focus","meta":{"private":true}},{"name":"getValue","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-getValue","meta":{}},{"name":"isValid","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-isValid","meta":{}},{"name":"next","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-next","meta":{}},{"name":"setInput","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-setInput","meta":{"private":true}},{"name":"setValue","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-setValue","meta":{}},{"name":"showError","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-showError","meta":{"private":true}},{"name":"change","tagname":"event","owner":"Widgets.nlFokkezbForm.controllers.field","id":"event-change","meta":{}}],"alternateClassNames":[],"id":"class-Widgets.nlFokkezbForm.controllers.textarea","short_doc":"Controller for the textarea field type. ...","component":false,"superclasses":["Widgets.nlFokkezbForm.controllers.field"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='docClass'>Widgets.nlFokkezbForm.controllers.field</a><div class='subclass '><strong>Widgets.nlFokkezbForm.controllers.textarea</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/textarea.html#Widgets-nlFokkezbForm-controllers-textarea' target='_blank'>textarea.js</a></div></pre><div class='doc-contents'><p>Controller for the textarea field type.</p>\n\n<p>This type exposes a <code>Ti.UI.TextArea</code>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-form' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-form' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-form' class='name expandable'>form</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the form.</p>\n</div><div class='long'><p>Reference to the form.</p>\n</div></div></div><div id='property-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Field name.</p>\n</div><div class='long'><p>Field name.</p>\n</div></div></div><div id='property-required' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-required' class='name expandable'>required</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the field is required. ...</div><div class='long'><p>Whether the field is required.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-validator' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-validator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-validator' class='name expandable'>validator</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Function to use as validator, e.g.:\n\nfunction(value) {\n  return form.validator.isEmail(value) &amp;&amp; !value.index...</div><div class='long'><p>Function to use as validator, e.g.:</p>\n\n<pre><code>function(value) {\n  return form.validator.isEmail(value) &amp;&amp; !value.indexOf('hotmail.com');\n}\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-Controller' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.textarea'>Widgets.nlFokkezbForm.controllers.textarea</span><br/><a href='source/textarea.html#Widgets-nlFokkezbForm-controllers-textarea-method-Controller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.textarea-method-Controller' class='name expandable'>Controller</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments which will also be used to call <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.field-method-Controller\" rel=\"Widgets.nlFokkezbForm.controllers.field-method-Controller\" class=\"docClass\">Widgets.nlFokkezbForm.controllers.field.Controller</a>.</p>\n<ul><li><span class='pre'>input</span> : Object (optional)<div class='sub-desc'><p>Properties to apply to the <code>Ti.UI.TextArea</code>, e.g. keyboard type and toolbar.</p>\n</div></li><li><span class='pre'>next</span> : Boolean (optional)<div class='sub-desc'><p>Set to false to disable the 'next' returnKeyType.</p>\n</div></li></ul></div></li></ul><p>Overrides: <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.field-method-Controller\" rel=\"Widgets.nlFokkezbForm.controllers.field-method-Controller\" class=\"docClass\">Widgets.nlFokkezbForm.controllers.field.Controller</a></p></div></div></div><div id='method-blur' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-blur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-blur' class='name expandable'>blur</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes the focus from the input ...</div><div class='long'><p>Removes the focus from the input</p>\n</div></div></div><div id='method-change' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-change' class='name expandable'>change</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Fires the change event if it has changed. ...</div><div class='long'><p>Fires the <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.field-event-change\" rel=\"Widgets.nlFokkezbForm.controllers.field-event-change\" class=\"docClass\">change</a> event if it has changed.</p>\n</div></div></div><div id='method-focus' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets the focus on the input. ...</div><div class='long'><p>Sets the focus on the input.</p>\n\n<p>This method is called by <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget\" rel=\"Widgets.nlFokkezbForm.controllers.widget\" class=\"docClass\">Widgets.nlFokkezbForm.controllers.widget</a> when the user clicks on the row.</p>\n</div></div></div><div id='method-getValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the value of the field. ...</div><div class='long'><p>Get the value of the field.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Value of the field.</p>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> ) : Boolean|String<span class=\"signature\"></span></div><div class='description'><div class='short'>Validates the current value. ...</div><div class='long'><p>Validates the current value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean|String</span><div class='sub-desc'><p>Returns <code>true</code> if valid or an error message if not.</p>\n</div></li></ul></div></div></div><div id='method-next' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-next' class='name expandable'>next</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set focus on the next field and blur this one ...</div><div class='long'><p>Set focus on the next field and blur this one</p>\n</div></div></div><div id='method-setInput' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-setInput' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-setInput' class='name expandable'>setInput</a>( <span class='pre'>input</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Set the input view in the control wrapper ...</div><div class='long'><p>Set the input view in the control wrapper</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>input</span> : Object<div class='sub-desc'><p>Some kind of input, e.g. <code>Ti.UI.TextField</code>.</p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>[value]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the value of the field. ...</div><div class='long'><p>Set the value of the field.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed (optional)<div class='sub-desc'><p>Value to set.</p>\n</div></li></ul></div></div></div><div id='method-showError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-showError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-showError' class='name expandable'>showError</a>( <span class='pre'>show</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Visually mark the row as having an error. ...</div><div class='long'><p>Visually mark the row as having an error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>show</span> : Boolean<div class='sub-desc'><p>Show or hide the mark.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Widgets.nlFokkezbForm.controllers.field' rel='Widgets.nlFokkezbForm.controllers.field' class='defined-in docClass'>Widgets.nlFokkezbForm.controllers.field</a><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-event-change' class='name expandable'>change</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the value of the field changes. ...</div><div class='long'><p>Fired when the value of the field changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>Event</p>\n<ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});