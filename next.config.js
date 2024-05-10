module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "links.papareact.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "**",
      },
    ],
    //remotePatterns: ["links.papareact.com", "fakestoreapi.com"],
  },
};
