import React, { Suspense } from 'react';

const Forms = React.lazy(() => import('./Forms.js'));

export default function CodeSplittng() {
  return (
    <div>
      <h3> React Lazy </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Forms />
      </Suspense>
    </div>
  );
}