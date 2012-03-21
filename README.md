Usage
=====

Taking the following markup as an example:

```
<ul id="list-select">
	<li><input type="radio" name="select-me" value="1">Select One</li>
	<li><input type="radio" name="select-me" value="2">Select Two</li>
	<li><input type="radio" name="select-me" value="3">Select Three</li>
	<li><input type="radio" name="select-me" value="4">Select Four</li>
	<li><input type="radio" name="select-me" value="5">Select Five</li>
	<li><input type="radio" name="select-me" value="6">Select Six</li>
</ul>
```

The simplest case will add a class to the selected row ('selected' by default). If no radio button is checked, the first in the list will be automatically selected.

```
$('#list-select').listSelect();
```

You can set your own highlight class by passing it in as an option:

```
$('#list-select').listSelect({
	'highlightClass': 'picked'
});
```


Callbacks
=========

Things become more interesting (and useful) when you use the three available callbacks:

initCallback
------------

Use this to do something before the first row is selected. In this context, 'this' refers to the initially selected row.

```
$('#list-select').listSelect({
	'initCallback': function() {
		alert('The initially value selected is ' + this.val());
	}
});
```


losingRowCallback
-----------------

Use this to do something against the row that has lost selection. In this context, 'this' refers to the row that has lost selection.

```
$('#list-select').listSelect({
	'losingRowCallback': function() {
		alert('The row saying goodbye is ' + this.val());
	}
});
```


gainingRowCallback
------------------

Use this to do something against the row that has gained selection. In this context, 'this' refers to the row that has been selected.

```
$('#list-select').listSelect({
	'gainingRowCallback': function() {
		alert('The row saying hello is ' + this.val());
	}
});
```
