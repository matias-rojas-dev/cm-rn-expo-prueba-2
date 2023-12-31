﻿

# React Native FakeStore App

## Overview

This React Native application displays a list of products from a fake store API. It features a home screen where users can view products and sort them by price. The app is built with React Native and uses the Expo framework.

## Features

- **Product Listing**: Display a list of products with their names, prices, and images.
- **Sorting Functionality**: Users can toggle between ascending and descending order of product prices.

## Installation

To get started with the app, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/matias-rojas-dev/cm-rn-expo-prueba-2
   cd cm-rn-expo-prueba-2
   ```

2. **Install Dependencies**

   ```bash
   npm i
   ```

3. **Start the Expo Server**
   ```bash
   expo start
   ```

## Usage

Upon launching the app, users are presented with a list of products. Each product item displays an image, name, and price. Use the 'Asc' or 'Desc' button to sort the products by price.

## Components

### ListFakeStore

The `ListFakeStore` component is responsible for rendering individual product items.

```javascript
export interface FakeStore {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number
  count: number
}

```

## Styling

The application uses React Native's `StyleSheet` for styling components. Each component has its own set of styles defined within it.

```javascript
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'green', // Green color for the price
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'grey', // Grey color for description
  },
})
```
