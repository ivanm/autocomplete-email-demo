# Autocomplete Demo with Material UI

## Live Test

[https://autocomplete-email-demo.netlify.app/](https://autocomplete-email-demo.netlify.app/)

![demo](https://i.imgur.com/lsifWcE.gif)

## About
This demo shows a working example of an input text with Material UI that autocomplete emails as the user types in. It allows multiple fixed options and the ability to add one that doesn't belong to the set (foo@test.com for example).

The default options are the following:

    const emailOptions = [
        'theresa@outlook.com',
        'erictaylor@outlook.com',
        'mike@outlook.com',
        'freddy@outlook.com',
        'maria@outlook.com',
        'daniel@outlook.com',
        'peter@outlook.com',
    ];

## How to run locally

    yarn start

## Components used:
 - [Material UI Grid](https://material-ui.com/es/components/grid/)
 - [Material UI Autocomplete](https://material-ui.com/components/autocomplete/#autocomplete)
 - [Material UI TextField](https://material-ui.com/components/text-fields/)


## TODO:

 - It won't handle correctly a lot of items. Probably the best option would be to adjust the rest of the items of the real markup in this case.
 - The email list could be fetched from an external endpoint instead of using local data instead.
