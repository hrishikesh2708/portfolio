import * as React from 'react';

export function getStrictContext<T>(name: string) {
  const ctx = React.createContext<T | undefined>(undefined);

  function useCtx() {
    const context = React.useContext(ctx);
    if (!context) {
      throw new Error(`use${name} must be inside a ${name}.Provider`);
    }
    return context;
  }

  return [ctx.Provider, useCtx] as const;
}
