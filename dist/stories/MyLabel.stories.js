"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Medium = exports.Large = exports.CustomBackgroudColor = exports.CustomFontColor = exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../components/MyLabel");
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'UI/Example/MyLabel',
    component: MyLabel_1.MyLabel,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        allCaps: { control: 'boolean' },
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Basic Label'
    },
};
exports.AllCaps = {
    args: {
        label: 'All Caps Label',
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    },
};
exports.CustomColor = {
    args: {
        label: 'Custom Color Label',
        color: 'text-secondary',
    },
};
exports.CustomFontColor = {
    args: {
        label: 'Custom Color Label',
        fontColor: 'blue',
    },
};
exports.CustomBackgroudColor = {
    args: {
        size: 'h2',
        label: 'Custom BackgroundColor Label',
        fontColor: '#eeeeee',
        backgroundColor: '#000000'
    },
};
exports.Large = {
    args: {
        size: 'h1',
        label: 'Basic Label',
    },
};
exports.Medium = {
    args: {
        size: 'h2',
        label: 'Basic Label',
    },
};
exports.Small = {
    args: {
        size: 'h3',
        label: 'Basic Label',
    },
};
