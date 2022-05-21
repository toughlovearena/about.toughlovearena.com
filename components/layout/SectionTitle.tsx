import React from "react";

export const SectionTitle = (props: { children: React.ReactNode, }) => (
  <div style={{
    fontSize: '3rem',
    padding: '1.5rem',
    paddingBottom: '0.5rem',
    textAlign: 'center',
  }}>
    {props.children}
  </div>
)
