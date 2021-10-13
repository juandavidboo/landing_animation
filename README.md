# Landing responsive animated bits.

_Epica_ Landing. Gsap responsive animated bits.


---
## Install
Make sure you have node, npm, and gulp, installed globally. Then, run the following command in the root directory:

`npm install`

---
## Gulp Tasks

### Default

`gulp`

Sets the project to work on it.

* clean dev folder
* copy fonts
* copy css files
* compile sass
* compile handlebars templates to html
* copy images
* copy scripts
* serve the site at http://localhost:3000
* watch for changes

### Build

`gulp build`

Compiles the project site to dev folder

* clean dev folder
* copy fonts
* copy css files
* compile sass
* compile handlebars templates to html
* copy images
* copy scripts

---
## File Structure

```shell
├── dev // prod files
└── src // editable files
 ├── css
 ├── fonts
 ├── img
 ├── js
 ├── pages
 ├── partials
 ├── scss
 ```
 
 ---
 ## Handlebars

All pages are generated based on a single layout _'pages/partials/layouts/\_Layout.hbs'_ and shared includes. Changes on these files apply to all pages. Anyhow there's an individual file for each page, which offers the chance to feed content to the partials.

 There's a _'partials'_ folder including all shared files like
 * _'Layouts'_ with a single file as all of them share the same layout.
 * _'Includes'_ contains the different modules for layouts.
 
And there's _'pages'_ folder including a single file for each page to generate. Each page is passing _title_ and _mlr_ values to the template.

---
## Sass

In the root folder partial files have a corresponding scss defining the styles for its content. All these files define styles for the pages structure.

Additionally here's a _'modules'_ folder for the different pieces used to build the content for all pages.

---
## CSS

These are reset and libraries' files.

---
## js

There's libraries' (bootstrap) and current project files. These are only copied to 'dev' folder.