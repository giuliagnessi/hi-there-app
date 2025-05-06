import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.get("/", async (c) => {
  return c.html(`<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <h1>Magic!</h1>
    <p>Now, we will familiarize ourselves with HTML.</p>
  </body>
</html>`);
});

Deno.serve(app.fetch);
