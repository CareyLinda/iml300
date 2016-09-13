<!-- $theme: gaia -->

<!-- page_number: true -->
<!-- *page_number: false -->
<!-- *template: invert -->

IML 300 Reading and Writing the Web
====
## HTML & Intro to CSS
### Meeting 3:    09.08.16

---

## Agenda
1. Lecture
	* Review reading
	* Introduction to HTML
	* Introduction to DOM

2. Workshop
	* Loading files onto Storm
	* Organizing files on Storm
	* The Good, Bad & Ugly example

---

<!-- *template: invert -->
## The Reading

---


---

<!-- *template: invert -->
## HTML Glossary


---

## Tags we know

1.```<html>,<head>,<body>```  
2.  ```<p>, <br>```  
3. ```<a href="">```  
4. ```<h1>...<h6>```  
5. ```<ul>, <ol>```  
6. ```<li>```  
7. ```<div>, <span>```  
8. ```<img src="">```  
 
---

## DOM Review

Recall, HTML tags are organized in a tree fashion much like our file directories:
```html
<div>
  <h2> section </h2>
  <p> Zombie ipsum reversus ab viral inferno,  
  nam rick grimes malum cerebro.  De carne  
  lumbering animata corpora quaeritis.  
  Summus brains sitâ€‹â€‹, morbo vel maleficia?
  </p>
</div>
```

---

## Introducing CSS

**HTML** is concerned with the content of a web page.  
 
**Cascading Stylesheets (CSS)** are concerned with the presentation of a web page.  

Cascading refers to the fact that children inherit the styles of their parent


---

## Introducing CSS

```html
<p style="color: red">
  This text will be red...
  <span>
    My parent is red, so I will be too
  </span>
</p>
```
Children can override their parents...
```html
<p style="color: red">
  This text will be red...
  <span style="color: salmon">
    Red is sooo 2000
  </span>
</p>
```

---

## Introducing CSS

There are 3 ways to define styles:

1. Inline (within an HTML tag)
2. Internally (within an HTML document)
3. Externally (in a separate file that is included with your HTML)

---

## Introducing CSS

### Inline
```html
<p style="color: red">
	I will be red
</p>
```

use the style attribute of an html tag to specify the style for all children of that element (see example of above)

---

## Introducing CSS
### Internal Stylesheets
```html
<html>
  <head>
    <style> 
      p { color: red; }
    </style>
  </head>
  <body>
	  <p> I will be red </p> 
  </body>
</html>
```

---

## Introducing CSS
### Externally

```html
<html>
 <head>
	<link rel="stylesheet" type="text/css"
	      href="mystylesheet.css"/> 
  </head>
</html>
```

in a separate file called, mystylesheet.css:
```css
  p { color: red; }
```

---

## Which style of CSS

In general using external stylesheets gives you the most flexibility. 
* you can reuse styles between pages
* you can change styles for all pages using that CSS in one location.

---

## Anatomy of Style Declaration

```css
selector {
  styleProperty: styleValue;
  styleProperty: styleValue;
  /* you can have as many property: value as needed; */
}
```
**selector** defines which tag(s) the style should be applied to.  

**styleProperty** is the name of the style attribute that you wish to set.  

**styleValue** is the value to assign to the property.

---
## Dissection of a CSS style

```css
p { 
  color: red;
}
```

**selector**; select all ```<p>``` elements

**styleProperty**; we want to set the ```color``` property. (Color is short for text color).  

**styleValue**; make the text color red.

---

## Selectors!!! are key  

One of the keys to CSS the power of the selectors. Using selectors you can "dial into" specific tags.

In the example above **all** ```<p>``` tags will have a text color of red.  

But what if you only want to change 1 ```<p>``` tag?

---

## Selector Example

For demonstration purposes let's see 2 ways to dial into specific elements.  
*<small>(Don't panic you will get more detail on this in the homework)</small>*

#### 1. Use classes

Classes let you define a "style classification" that you can apply to tags.

##### 2. Use advanced selectors
Remember HTML docs are trees. Selectors let you navigate this structure to identify specific tags.

---
## Selector Example
#### 1. Use classes

```css
.hot {
  color: deeppink
}
```

```html
<p class="hot"> I am sooo hot</p>
<p> I'm not :-( </p>
<ul>
  <li class="hot">I'm hot too!!</li>
  <li>I'm not, but I'm still sexy!</li>
</ul>
```

---
## Selector Example
##### 2. Use advanced selectors

```css
p:first-child {
 color:red
}
p:nth-child(2) {
 color:white
}
p:last-child {
 color:blue
}

```

---
## Selector Example
##### 2. Use advanced selectors

```html
<body>
  <p> I'm Red </p>
  <p> I'm White </p>
  <p> I'm just regular colored</p>
  <p> I'm Blue </p>
</body>
```

---

## Workshop

---

## 1. Storm Setup

1. Connect to Storm. (Mac users can follow the instructions here: []() )
2. Create the following directory structure in your ```Sites``` subdirectory:  

---

```
Sites/
  iml300/
    images/
      homepages/
    css/
    js/
    assignments/
      images/
      css/
      js/
```
---

3. Copy the html file that you created during week 1 and week 2 to your `iml300` folder.
4. Name this file `index.html`
5. Verify that you can access this file by navigating to your website:
```http://storm.usc.edu/~your_usc_id/```

---

## 2. CSS Demo

---

## CSS Demo Setup

1. Download the following template: [template](https://gist.github.com/trojanmediaarts/86be2f50648a759931fb49df21617fb6)  and save it as an `.html` file.
3. Open the template that you downloaded in *step 1* with Brackets and copy the Lorum Ipsum text from *step 2* into the `body` tag.
4. Create a new file and save it as `ladleRatRottenHut.css` in the **same** directory as your template html file.
5. Turn on Live Reload


---

## CSS Demo

Follow along as we style this document.  

**challenge:** *can you decipher this text??*

---


 