type NavigationLinkProps = {
  to: string;
  title: string;
};
export const NavigationLink: NavigationLinkProps[] = [
  { to: "/", title: "Home" },
  { to: "/projects", title: "Projects" },
  { to: "/contact", title: "Contact" },
];
