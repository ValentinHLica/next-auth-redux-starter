export enum Authorizatin {
  public,
  authorized,
  unAuthorized,
}

export default [
  {
    url: "/",
    title: "Homepage",
    protectedRoute: Authorizatin.public,
  },
  {
    url: "/dashboard",
    title: "Dashboard",
    protectedRoute: Authorizatin.authorized,
  },
  {
    url: "/login",
    title: "Login",
    protectedRoute: Authorizatin.unAuthorized,
  },
];
