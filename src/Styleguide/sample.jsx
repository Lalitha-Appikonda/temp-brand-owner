import React from 'react'

function sample() {
  return (
    <div>
      <h2>Outline Buttons</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
      </div>

      <h2>Soft Buttons</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button variant="soft-primary">Primary</Button>
        <Button variant="soft-secondary">Secondary</Button>
      </div>
    </div>
  )
}

export default sample