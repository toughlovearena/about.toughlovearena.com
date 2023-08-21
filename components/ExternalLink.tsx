import { AnchorHTMLAttributes } from "react";

export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a rel="noopener noreferrer" target="_blank" {...props}>{props.children}</a>;
};
