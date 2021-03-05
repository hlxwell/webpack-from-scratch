import * as React from "react"

interface WelcomeProps {
  name: string;
 }
 export function Header({ name }: WelcomeProps) {
  return <div>header { name }</div>;
}

Header.defaultProps = {
  name: "welcome",
}
