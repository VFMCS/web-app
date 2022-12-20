//This page is to declare global variables but requires further testing

import React from "react";

let farmers = [];
let customers = [];
let products = [];

fetch('http://localhost:3001/data').then(response => response.json()).then(data => {farmers = data.farmers; customers = data.customers; products = data.products})
    .catch(err => console.error(err));

export {farmers, customers, products}