import React from "react";
import { Helmet } from "react-helmet";
export default function AppHelmet({ app }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={app.description} />
      <title>{app.title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link
        rel="icon"
        type="image/png"
        href={require(`../../assets/imgs/${app.icon ? app.icon : "icon.png"}`)}
        sizes="500x500"
      />
    </Helmet>
  );
}
