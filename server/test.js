//test.js

const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

test("GET /api/posts", async () => {
  const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

  await supertest(app).get("/api/posts")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check data
      expect(response.body[0]._id).toBe(post.id);
      expect(response.body[0].title).toBe(post.title);
      expect(response.body[0].content).toBe(post.content);
    });
});

  