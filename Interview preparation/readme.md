// HTML (HYPHER TEXT MARKUP LANGUAGE)

frontend interview preparation . 

Q.1 -  What do you know about the frontend-web-development?

 Ans . mainly focus on creating user interface for web applications.
        transform backend code into a user-friendly graphical interfaces.
        Ensure websides and applications are user friendly interfaces.
        Ensure the usability and functionality of web applications.
        Design websides that should work on popular browsers.
        Compatibility : mozila Firefox , Chrome , Safari , Microsoft Edge , Internet Explorer , and opera


Q.2 - What is HTML?

Ans . HTML stands for Hyper Text Markup language.
        Standard language for web page creation.
        Define content and elements using tags and elements.

Q.3 - What is the difference between HTML and HTML5?

Ans . HTML5 is latest version with key advancements.
        Multimedia Support : Native support for audio and video .
        Semantic Elements : Enhanced semantic tags like <header> and <nav>.
        Better form input : Improved input types like date , email and range etc..
        Compatibility : Enhanced compatability with modern web standards and technologies.
    
Q.4 - What are HTML tags?

Ans . HTML tags : Enclosed in angle brackets (<>) to define web page elements.
        Define content and display in web browser.
        Example : <p> for paragraph related.

Q.5 - Explain the basic structure of an HTML document?

Ans . At the starting it defined with <!Doctype> which define the version of html.
        mainly <!Doctype> define the  version HTML5.
        HTML document have two primary section : <head> & <body>.
        <head> includes the  metadata and links to external resources (title, charactor encoding , stylesheets, scripts).
        <body> contains visible content (text, images , links). 
        

Q.6 - What is the purpose of the <!Doctype> declaration?

Ans . The <!Doctype> declaration specifics HTML document type and version.
        It guides web browser in interpreating HTML code correctly.
        Ensures proper rendering and cpmpatibity.
        For HTML5, the declaration is simple : <!Doctype html>.


Q.7 -  What is the difference between block-level and inline elements?

Ans .  Block level elements structure webpages into distinct sections.
        They include heading , paragraph and lists.
       Inline elements are embedded within block-level elements.
        Mainly used for text formatting and styling.


Q.8 - What is Semantic HTML?

Ans . Semantic HTML uses elements like <header> , <footer>, and <nav> to convey meaning and structure in web    content.
        These elements enhance comprehension for users and improve search engine understanding.

Q-9 - Explain the use of the <a> tag?

Ans . '<a>' tags  creates hyperlinks for web navigation.
        Utilizes the 'href' attribute to define the destination URL.
        Fundamental for establishing interconnectivity across the web.





        
<!-- 2nd day part -->

Q.10 - What is HTML form, and how do you create one?
Ans . HTML form : collect data from user.
        <form> elements is used to create a form.
        Input fields : Text boxes, radio button, checkboxes, buttons.
        Purpose : Submit form data to a server for processing.


Q.11 - What is HTML entity?
Ans . HTML entity are special codes in HTML..
        Purpose : Display reserved characters and symbols.
        Example : &lt; for '<' and &amp; for '&'.
        Importance : Essential for  rendering special HTML characters.


Q-12 - What is <meta> tag ?
Ans .   '<meta>' tag is used for webpage metadata.
            Common attributes : charset, name and content.
            Placed inside the '<head>' section.


Q.13 - What is the difference between <div> and <span> elements?
Ans .  <div> : Block level container , groups and style larger content sections, distnict block level layout.
        <span> : Inline element , styles or scripts smaller text portions within a block-level elements.


Q.14 - How can you add comments in HTML?
Ans . HTML comments use <!--and--> delimiters.
        Content within these delimiters is treated as comments and remains hidden on the webpage.
        Comment serve purpose like adding notes, explainations , or documnetation in HTML code.


Q.15 - What is the purpose of the <img> tag?
Ans .  '<img>' tags displays images on webpages.
         'src' attribute specifies the image source.
         Use 'alt' for alternative text.
         Specify 'width' and 'height' for dimention and layout control.


Q.16 - What is the importance of validation in HTML?
Ans . HTML validation ensures adherence to correct syntax and structure  per HTML specifications.
        Valid HTML boosts compatibility across web browsers and devices.
        Improve accessibility , user experience , and search engine raking.


Q.17 - What is the differce between GET and POST requests?
Ans . GET requests : 
                Used to obtain information from a server.
                The data is sent in the request's URL.
                Used to retrive static data , like a web pages or an image.
      POST requests :
                Used to communicate with a server.
                The data is sent in the request's body.
                Used to submit forms, like login or contact forms.




// CSS (CASCADING STYLES SHEET)
Q.1 - What is CSS , and what is its primary purpose?
Ans . CSS stands for Cascading Style Sheets.
        Defines web page presentation and layout.
        Controls fonts , colors, spacing and positioning on a webside.


Q.2 - Explain the difference between inline, internal , and external CSS?
Ans . Inline CSS : Applied directly to individual HTML elements using the  'style' attribute.
      Internal CSS : Defined within the HTML document's <style> tag in the <head> section.
      External CSS : Stored in the seperate .css file and linked to HTML using the <link> tag. 
    prefered method for style reusablity : External CSS; especially useful for maintaing consistent styles across multiple pages.     


Q.3 - What is the  CSS box model , and how does it works?
Ans . It describes how HTML components are displayed on screen.
        It specifies how an element's content, padding, border, and margin are set.
        width = content + width + padding + border


Q.4 - How do you center an element horizontally and vertically in CSS?
Ans . Horizontal centering : Employ "margin : 0 auto" , on a block level element with a defined width.
        Both Horizontal and Vertical centering : Utilize flexbox with "display : flex;
        justify-content:center; align-items:center;".

Q.5 - Explain the difference between display: block, display : inline, and display : inline-block?
Ans . display:block - Elements becomes a block level elements , takes full width of the parent, stacks vertically.
        display:inline - Element become inline-level, takes minimal width, stack horizantly.
        display : inline-block - Combination of inline and block, behaves likes inline but has block-level properties and dimentions.

Q.6 -  How does CSS specificity work, and how is it calculated?
Ans . CSS specificity dictates style precedence in conflicts.
        It's determined by the count of IDs , class, and elements in the selector.
        Higher Specify wins - for instance , an Id selector beats a class selector.
        Inline styles are the most specific.


        

// Third day 

Q.7 - What is the box-sizing property , and how does it affect  layout?
Ans . Box-sizing property defines width and height calculations for width.
        Content-Box includes only the content in calculations.
        Border-Box includes padding and border in width and height calculations.


Q.8 - How can you create a responsive design in CSS?
Ans. Responsive design : Utilize media quaries for style adjustment based on screen width.
        Relatives Units : Employ percentages and rem to ensure element adaptability to varying screen sizes.
        Flexible layouts : Leverage Flexbox and CSS grid for versatile layout design.

Q.9 - What are pseudo-classes and pseduo-elements in CSS?
Ans . Pseudo-class define special states of elements (eg. :hover for mouse hover).
        Pseudo-elements styles special parts of elements (eg : ::before or ::after for adding content).


Q.10 - Explain the CSS float property and its uses?
Ans . Float property for element alignment (left or right).
        Typical uses : Text wrapping around images and multi-column layouts.
        Outdated method : flexbox and grid layouts preffered for complex design.


Q.11 - How do you achive cross-browser compatibility with CSS?
Ans . Employ vender prefixes for CSS properties when required.
        Throughly test the webside across various browsers and versions.
        Utilize feature detection libraries like Modernizr to gracefully handle unsupported  CSS features. 




        // Fourth Day / part

Q.12 - Describe the z-index property and how it affects stacking order?
Ans . Z-index property controls stacking order.
        Higher value places element in front.
        Key for visual hierachy in complex layouts.


Q.13 -  What is the CSS position property , and what are its use?
Ans .  Position property determines an element's positioning method .
        Values :
        static (default) : Element follow normal flow.
        relative : Positioned relative to normal position.
        absolute : Positioned relative to nearest positioned ancestor.
        fixed : positive relative to viewport.
        sticky : Positioned based on user's scroll position.


Q.14 - Explian the concept of a CSS sprite and its benifits? 
Ans . CSS sprite ia a single image with multiple images/icons.
        Purpose : Reduce HTTP requests, enhancing webside perfomance.
        Technique : Display specific part of the sprite using CSS  background-position.
        Benifits : Bandwidth saving , faster image laoding.


Q.15 - What is the "Cascading" in Cascading style sheet? 
Ans . "Cascading" in CSS refers to the priority order for conflicting rules.
        CSS hierarchy : inline , internal, external , and user-defined styles.
        This hierarchy defines style precedence for flexibility and specificity.


Q.16 - What is the difference between a Class  and an Id?
Ans . CLASS : 
        Can be applied to several components.
        used to group  together related items.
        Example : Styles all heading of the header.
      ID :
        Can be applied to one element only.
        used to  identify a certain elements.
        Example : Customizing main navigation bar of web page.




// 4th day 2nd device
Q.17 - How do you create a responsive layout?
Ans . CSS media quearies are used to create responsive layouts.
        It allows to alter the appearance of a webside based on screen size of device.
        Media quaries can be used to adjust font size , element width , and element visibility.




        // JAVASCRIPT

Q.1 - What is javascript , and how is it different from java?
Ans . javascript is high-level, interpreted scripting language.
        It is used for web development.
      Difference : 
      Client-side vs . general purpose.
      Dynamically typed vs statically typed.
      Browser vs virtual machine environment.


Q.2 - Explian the difference between null and undefined in javascript?
Ans .   Null : intentional of a absence of object value , often assigned by developer.
        Undefined : Variable declared but  not assigned a value.


