import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';

const question = [
    {
        type: 'list',
        name: 'shape',
        message: 'What Shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What Text would you like on your logo?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your logo?',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'What do you want to name your logo file?',
        default: 'mylogo'
    }
];

const generateSVG = (shape, text, color) => {
    const shapes = {
      Circle: `<circle cx="150" cy="100" r="80" fill="${color}" />`,
      Square: `<rect x="35" y="10" width="230" height="180" fill="${color}" />`, // Example dimensions
      Triangle: `<polygon points="150,20 280,180 20,180" fill="${color}" />`,
    };

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapes[shape]}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
  </svg>`;
};

const run = async () => {
    console.log(chalk.green('Welcome to the Logo Generator!'));
    const answers = await inquirer.prompt(question);
    const { shape, text, color, filename } = answers;
    const svgContent = generateSVG(shape, text, color);

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log(chalk.green('Saved your logo as logo.svg'));
    });
};

run();