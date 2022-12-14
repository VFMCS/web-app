const server = require("./server");
//const mongoose = require("mongoose");
const supertest = require("supertest");
const { TestWatcher } = require("jest");
const { expect } = require("chai");

//Get users testing json retrieval
describe('GET /users', () => {
  test('respond with 200 status code', async () => {
    await supertest(server).get("/users").expect(200)
    //expect(response.statusCode.toBe(200))
  })
});

//Post users testing json retrieval
describe('POST /users', () => {
  test('respond with 200 status code', async () => {
    await supertest(server).post("/users").expect(200)
    //expect(response.statusCode.toBe(200))
  })
});

//Patch users testing json retrieval
describe('PATCH /users', () => {
  test('respond with 200 status code', async () => {
    await supertest(server).patch("/users").expect(200)
    //expect(response.statusCode.toBe(200))
  })
});

