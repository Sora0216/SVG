# SVG

#Overview
The Logo Generator CLI is a Node.js command-line application that enables users to create custom logos. Users can specify the color, shape, and text of their logo, which is then generated and saved as an SVG file. This tool is designed for simplicity and ease of use, making it ideal for quickly generating basic logos for projects, presentations, or web content.

#Features
Customizable Shapes: Choose from circle, square, or triangle shapes for your logo.
Color Selection: Specify any CSS color for the shape and text.
Custom Text: Add your desired text to the logo.
SVG Output: Generates a scalable vector graphic (SVG) file that can be easily integrated into web pages or printed materials.
Prerequisites
Before running this application, ensure you have Node.js installed on your machine. The application has been tested with Node.js version 14.x and above.

#Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/logo-generator.git
cd logo-generator
Install the required npm packages:
bash
Copy code
npm install
Usage
To start the application, run:

bash
Copy code
node index.js
Follow the on-screen prompts to select your logo’s shape, color, and text. The application will generate an SVG file based on your inputs and save it to the specified filename.

#Example
plaintext
Copy code
$ node index.js

Welcome to the Logo Generator!
? What shape would you like your logo to be? (Use arrow keys)
❯ Circle
  Square
  Triangle
? What text would you like on your logo? Example Inc.
? What color would you like your logo? blue
? What do you want to name your logo file? example-logo

Saved your logo as example-logo.svg
Contributing
Contributions are welcome. Please open an issue first to discuss what you would like to change, or directly submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
