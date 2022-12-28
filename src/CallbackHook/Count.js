import React from 'react'

export default function Count({text,count}) {
    console.log(`Renders ${text}`);
  return (
    <div>
        {text} - {count}
    </div>
  )
}
