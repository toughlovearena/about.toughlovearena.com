import React from "react";

export const Subtitle = (props: { children: React.ReactNode; }) => (
  <div style={{
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '1rem',
  }}>
    {props.children}
  </div>
);
