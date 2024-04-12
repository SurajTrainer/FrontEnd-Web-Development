//  HTML / MARKUP

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




//  CASCADING STYLES SHEET / CSS

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




        // JAVASCRIPT/JS

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



        
Q.3 - What is the differnce between let , const and var for variable declaration in javascript?

Ans . var : Function Scoped , can be redeclared.
      let : Block scope, can be reassigned.
      const : Block-scoped , constant , can not be reassigned.




// fifth day 

Q.4 - What are the different data types in javascript?

Ans . There are seven data types in javascript.
        Number : A number can be any integer or floating-point value.
        String : A string is a sequance of characters.
        Boolean : A boolean can be either true or not.
        Null : The null value is special value that represents the absense of a value.
        Undefined : The undefined value is special value that represents a value that has not yet been assigned.
        Symbol : A symbol is a unique value that can be used to identify an object.
        BigInt : A BigInt is an integer that is too large to be represented by a regular javascript number.



Q.5 - What are the events in javascript?

Ans .  Javascript events are triggered by user interactions or changes in the browser's state.
         Events are reported to javascript as event objects containing event-specific information.
         The addEventListner() function is used to listen for events.
         It takes two arguments : the event type and a function to execute when the event occurs. 

Q.6 - What is the differnce between '==' and '===' operators in js?

Ans .   '==' checks for equality with type coercion, allowing type conversion for comparision (eg. 5 == '5' is true).
        '===' checks for the strict equalty without type coercion , requiring ,  both value and type to be the same for a true comparition. 


Q.7 - What is hoisting in javascript?

Ans . Hoisting in javascript involves moving variable and function declarations to the top of their containing scope during compilation.
        Variable hoisting : invloves declaring variable with var , which are hoisted to the top of their scope.
        Function Hoisting : entails hoisting entire function declarations to the top of their containing scope.

Q.8 - Explain the closures in javascript?

Ans . Closures allow functions to access and remember variable and function from their outer scope.
        Allows percistent Access.
        Ensures the data privacy.
        Helps creating modular code.


Q.9 - What is the event loop in javascript?

Ans . Events loop ia a mechanism enabling non-blocking opearations in javascript.
        Manages code execution.
        Ensures asynchronos code (eg , callback , promises) runs when the main thread is idle.



Q.10 - How does the prototypal inheritance work in javascript?

Ans . Objects inherit properties and methods via their prototype chain.
        Each object possesses a prototype.
        When a property or method is absent on an object, javascript searches for it in the prototype chain.

Q.11 - How can you handle asynchronus operations in javascript?

Ans . Asynchronus operations can be managed through callbacks, Promises , or async/await.
        Callbacks are functions passed as arguments and execute when async operations finish.
        Promises offer structured handling of asynchronus code.
        Async/Await provides a modern , synchronous-style approach to asynchronus code.


Q.12 -  Explain the concept of 'this' in javascript?

Ans . 'this' refer to the current context or object in which a function is executed.
        In a method , 'this' refers to the object it's called on .
        in a regular function , 'this' refers to the global object (window in browser).
        Arrow function maintain the 'this' value of their surrounding lexical context.


Q.13 - What are promises in JS?

Ans . Promises are objects for value representation.
        Temporal flexibility : can represent current , future , or no value.
        Simplify asynchronus code.
        Structured handling of success and error.

Q.14 - Describe the 'callback hell' problem in javascript and how it can be mitigated?

Ans . 'Callback hell' or 'pyramid of doom' : occures due to nested callbacks , making code hard to read.
        Mitigation :    use promises or async/await to flatten callbacks, improving code readability and manageability.







//sixth day

                        // React js
                        
Q.1 - What is React js, and how does it differ from other javascript frameworks?

Ans . React is a javascript library for UI.
        Not a full framework like Angular.
        Focuses on UI layer, maximizing flexibility.
        Utilizes a virtual dom for optimized updates.
        Enhances application efficiency.

Q.2 - Explain the concept of virtual DOM?

Ans . The Virtual DOM is a lightweight copy of the real DOM, enabling React to make efficient updates.
        It compares the two and applies only necessary changes, reducing re-render for improved perfomance.

Q.3 -  What are the key features of React ?

Ans - React's key features : Virtual DOM, component-based architecture, one way data binding, reusability.
      Strong ecosystem: Tools like React Router  and Redux for state management. 



// 7th day

Q.4 - What is JSX in React, and how is it different from HTML?

Ans . JSX(javascript XML) extends javascript for HTML-like code in your javascript file.
        Transpiled into regular javascript using tools like Babel.
        Enables embedding of javascript expressions within markup for dynamism.



        // 8th day

Q.5 - Explain the component lifecycle phase:

Ans . React component have distinict lifecycle phase :
        Mounting : includes the constructor , render , and componentDidMount.
        Updating : involves shouldComponentUpdate , render and  componentDidUpdate.
        Unmounting : signifies the componentWithUnmount Phase.
     These phase allow precise management of component behavior at different lifecycle points.


Q.6 - What is the differnce between props and state in React?

Ans . Props for data transfer : Pass data from parent to child components.
        Immutable nature : Props should not be altered within child components.
        State for components-specific data : Used to manage mutable data within a component.



        
