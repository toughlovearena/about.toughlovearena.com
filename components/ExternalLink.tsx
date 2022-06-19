import { AnchorHTMLAttributes } from "react";

export const ExternalLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a rel="noopener noreferrer" target="_blank" {...props}>{props.children}</a>
);
