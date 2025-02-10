import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  if (url.pathname === "/" || url.pathname==="") {
    return redirect("/v1/1", 302);
  }
  return next();
});