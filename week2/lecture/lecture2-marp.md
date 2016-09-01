<!-- $theme: gaia -->

<!-- page_number: true -->
<!-- *page_number: false -->
<!-- *template: invert -->

IML 300 Reading and Writing the Web
====
## Introduction to HTML
### Meeting 2:    09.01.16

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

### The Reading

* Who was Tim Berners Lee?

Tim Berners Lee submits a paper to IEEE that is rejected, but accepted as a paper.  

>(From the introduction) the best technology does not always win

---

### The Reading

* Who was Tim Berners Lee?

Tim Berners Lee submits a paper to IEEE that is rejected, but accepted as a paper.  

Think about this for a minute...  

the **invention** of the internet was not a significant contribution at the time!

---

### W3

This paper explains the internet to scientists??  

> If you haven’t yet experienced the web...

---
<!-- *template: invert -->

## Introduction to HTML

---

### Defining the web

<!-- #### 1. A Protocol  -->

*What is a protocol?*

---

### Defining the web



*What is a protocol?*  

A protocol defines a set of standard behaviors.  

*What is HTTP?*  

1. A request / response protocol
	* A machine ( client ) makes submits a request to another machine ( server )  

---

*What is HTTP?*  

2. Operations  
	* The protocol supports 4 basic operations:
		* **Get** something from the server  
		* **Put** make a change to something on the server  
		* **Post** something to the server  
		* **Delete** something from the server  

---

*What is HTTP?*  

3. Stateless  
	* Each request is unique and has no memory of prior requests
		* This has had important ramifications in how the internet has evolved.  

---

*What is HTTP?*  

4. Can support *any* data exchange
	* The client and server “negotiate” what is going to be sent and how it is encoded (MIME types).

---

### URI 

Uniquely identifies resources that a server stores and makes accessible over HTTP provided:  

* the resource is addressed properly,  

and  

* the operation (_get, put, post, delete_) is valid for the resource (point 2 above).

---

#### HTTP

HTTP is a simple protocol, but that simplicity is what has:
* led to its universal acceptance, and  
* allowed it to scale as technologies have evolved.  

---

### Other Protocols

* SFTP, FTP (File transfer protocol)
* SCP (Secure copy protocol )
* Telnet ( for logging into another machine )  

``` html
<digression>  
	Star Wars geeks + computer geek = ... 
</digression>
```

---


### Hypertext Markup Language (HTML)

HTTP does not specify interchange data formats.  

But, for hypertext exchange it supports HTML as the lowest common denominator language.

---

### What is a Markup Language

Markup languages define a set of tags with attributes that can be used to annotate a text document.  

What the annotation means and how the computer interprets it is defined by the language designer.

---

#### Markup Language Examples

* XML (extensible markup language )
	* Define your own tags, atttributes and relationships (see 'digression' tag above)  
	

* SVG (scaleable vector graphics)
	* Define vector graphic images

---

### Uniform Resource Identifiers (URI)

Every object has a string that identifies it on the network.  

That is the URI.  

Note that the URI does not have to be unique! (e.g. index.html is a URI )  

---

#### URI, what happened to URL?

http://www.google.com/index.html

---

#### URI, what happened to URL?

http://www.google.com/index.html

* The Uniform Resource Locator, _URL_, is:  

http://www.google.com/index.html

---

#### URI, what happened to URL?

http://www.google.com/index.html

* The Uniform Resource Name, _URN_, is:  

www.google.com/index.html  

---

#### URI, what happened to URL?

http://www.google.com/index.html

* There are 3 URI: 
	1. index.html (the landing page)  
	2. www.google.com/index.html (the URN)  
	3. http://www.google.com/index.html (the URL)  

---

#### URI, what happened to URL?

##### Summary 
In addition to the name the URL specifies ‘how’ to get the resource. In this case you get the resource over the ```http``` protocol.

_If you are interested: [URL vs URI](https://danielmiessler.com/study/url-uri/)_


---

<!-- *template: invert -->
## Introduction to the Document Object Model

---

## Modeling a Document

All documents have a structure.  

A structure can be:  
1. Formal  
2. Conceptual     

---

## Formal Structure

Reading an academic article you will frequently see the sections of the article labelled.

* Abstract,  
* Background,  
* Methods,  
* …   

The structure of the papers themes and concepts are explicitly identified.

---

## Conceptual Structure

In a newspaper article the structure of the argument and the concepts is not generally labelled.  

But, reading the article makes the argument clear.

---

## HTML and Structure

To share data via computer you need:

1. What is going to be shared
2. How it is going to be shared
3. The computer to be able to handle what is shared

---

## HTML and Structure

To share data via computer you need:

1. What is going to be shared >> HTTP
2. How is it going to be shared >> HTTP
3. Computer comprehension of shared info  >> HTML

---

## HTML

HTML provides a set of tags that allow the designer to label the structure of a document in a human and machine readable format.

---
## HTML

HTML provides a set of tags that allow the designer to label the structure of a document in a human and machine readable format.


#### The Bad News  
 
* There are over 110 HTML tags.

---

## HTML

HTML provides a set of tags that allow the designer to label the structure of a document in a human and machine readable format.


#### The Bad News  
 
* There are over 110 HTML tags.


#### The Good News

* [You only need 10 tags](http://www.99lime.com/_bak/topics/you-only-need-10-tags/)
	* _you actually need fewer than those as we'll see in this class through our use of CSS_
	
---

## HTML Tags and Attributes

* Tags identify a section of a document

```Html
<p> This is a paragraph </p>
```

Remember nouns?  

Well tags are like nouns.

---

## HTML Tags and Attributes

* Tags identify a section of a document = NOUNS
* Attributes describe additional properties of a tag

```html
<p style=“font-face: 'Comic Sans'”> 
This is an ugly paragraph 
</p>
```

Remember adjectives? 

Well attribute are like adjectives.

---

## Documents as Trees

* The Document Object Model (DOM) is going to be **crucially** important in all of your web work.  
	* Fortunately, it is an intuitive concept you just have to learn some terminology.  
* A good metaphor for the DOM is your File Tree in Finder (OS X) or Explorer (Windows)...

---

## Documents as Trees

* Root 
At the top of the tree you have a root. The Root is the tag that contains every other tag. 

```html
<html>
</html>
```

---

## Documents as Trees
* Parent  
Parent tags contain other tags. The tags they contain are called children

```html
<html>
	<body>
		I am the child of html.
	</body>
</html>
```  

```<html>``` is the parent.  

```<body>``` is the child of ```<html>``` .

---

## Documents as Trees

* Children, Siblings  
Parent tags contain other tags. 
The tags they contain are called children.  

---

```html
<html>
  <body>
   <h1> Awkward Moments </h1>
   <p id=“Jack”> Ut oh..whose your daddy? </p>
   <p id=“Jill”>...um... ‘body’. What about you?</p>
  </body>
</html>
```  


```<html>``` is the parent. 

```<body>``` is the child of ```<html>```.  

```h1```,  ```Jack``` and ```Jill``` are the children of body.  

They are siblings. _Also, ```body``` is their grandparent although that term is not used._  

We generally say ancestor.

---


---


---


---




 