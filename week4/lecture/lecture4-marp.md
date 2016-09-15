<!-- $theme: gaia -->

<!-- page_number: true -->
<!-- *page_number: false -->
<!-- *template: invert -->

IML 300 Reading and Writing the Web
====
## Semantic HTML, CSS Layout and CSS Selectors
### Meeting 4:    09.15.16

---

## Agenda
1. Lecture
	* Review Constitutions
	* Semantic HTML
	* CSS Selectors, Box Model Tips

2. Workshop
	* Workflow: Github repo setup (make a diagram for this)
	* Adding a NavBar to your HomePage (use code pen to mock one up )

---

<!-- *template: invert -->
## We the people...

---

## Semantic HTML

---

## What does semantics mean?

---

## What does semantics mean?

### semantics means what something means

---

## Semantic HTML

Remember we talked about how marking a document in HTML is like creating an outline of a document?  
Well HTML5 gives HTML a better set of tags for creating that outline.   

---

## Semantic HTML

### tags

```html
<section>
<nav>
<article>
<aside>
<header>
<hgroup>
```

---

## Semantic HTML

As an example from [Dive Into HTML](http://diveintohtml5.info/semantics.html#header-element)

---

## Semantic HTML

New tags in HTML5 that give an indication about the type of content that is being tagged.  The tags have more meaning (hence, better semantics ).  

We saw that in the Header example above and here is a shorter example with the `link` tag.

---

## Semantic HTML

### e.g. Links

`<link rel=???>` vs `<a>`  

Both tags specify links to another document. However, with the `rel` attribute the `link` tag can give more context for the link than the `a` tag. Using this attribute with standard values the author and the browser can interpret different linked resources differently.  

```html
<!-- points to a stylesheet -->
<link rel=“stylesheet” ...> 
<!-- will load the icon for the website -->
<link rel=“icon” ...> 
```  

---

## Semantic HTML

### tags

```html
<section>
<nav>
<article>
<aside>
<hgroup>
<header>
```

---


## Workshop

---

## Workflow: Github Setup

This is **strongly**  recommended to help improve your workflow.  

Yes, it is going to feel "weird" at first, but stick with it and work through it.  

---
## Workflow: Github Setup
### The Motivation

You are going to be developing your website on your local machine...  

... and copying your files to Storm...  

what happens when you accidentally copy over a file that you meant to keep?  

what happens when you are working on a larger project and have different versions of files?

---

## Github can help!!

#### Setup

1) Download the Github Desktop tool (google: github desktop tool) and download it  
2) Follow along as we create a repository for your iml300 website. 

---

## Github can help!!

If you let it!  

1) Commit early
Commit while you are working on features. Don't wait until you are done.
2) Commit often
You don't need to commit as often as you would save, but fairly often (play around with different intervals, e.g. every 5 saves, commit)  

Git makes it **very** easy to get previous versions of code back

---

## CSS Selectors Challenge

* [Reference](http://www.w3schools.com/cssref/css_selectors.asp)

* [Test Document](http://css-selector-challenge.html)

---

## CSS Box Model

- Every HTML element is a rectangular box. Size, placement and behavior of the box is controlled by CSS. Behavior = how the box changes when contents are added to it or the boxes around it change.

---

## CSS NavBar Demo

We are going to make a 100% CSS navbar.

We are going to go from this: [Nav Bar Start](http://storm.usc.edu/~rspell/navbardemo_start.html)  

to  

[this](http://storm.usc.edu/~rspell/navbardemo_final.html)  

using only CSS.


## CSS NavBar Demo

_(THIS IS BAD ON A NUMBER OF f~~R~~onts...)_
https://developers.google.com/fonts/docs/getting_started#overview

---






