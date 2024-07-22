# Overview

The `use-browser-sync-state` library is a library designed to facilitate state synchronization between different browsing contexts. This library provides an easy-to-use React hook, `useSyncState`, ensuring your application's state remains consistent across multiple tabs or windows, enhancing the user experience by maintaining a seamless state management system.

# Features

- **State Synchronization:** Automatically sync state across multiple browsing contexts (e.g., tabs, windows).
- **React Integration:** Leverages React's `useState` hook for a familiar API and easy integration into existing React applications.
- **TypeScript Support:** Fully typed for improved development experience and type safety.
- **Lightweight:** Minimal footprint, focusing solely on state synchronization.

# Benefits

- **Consistency:** Ensures that users have a consistent experience regardless of how many tabs or windows they have open.
- **User Experience:** Enhances the user experience by preventing data loss and redundant actions.
- **Efficiency:** Reduces the need for users to manually sync data across tabs.
- **Real-Time Updates:** Keeps all instances of the application up-to-date with the latest data.

# Installation

To install the `use-browser-sync-state` library, use npm or yarn:

```bash
npm install use-browser-sync-state
```

# Usage

To use the `use-browser-sync-state` library in your React application, follow these steps:

## 1. Import the Hook

Import the `useSyncState` hook from the library:

```typescript
import { useSyncState } from 'use-browser-sync-state';
```

## 2. Initialize the Hook

Use the `useSyncState` hook in your functional component to create a synchronized state:

```typescript
import React from 'react';
import { useSyncState } from 'use-browser-sync-state';

const App: React.FC = () => {
  const [count, setCount] = useSyncState('counter', 0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
```

## 3. Understanding the Parameters

The `useSyncState` hook takes two parameters:

- **channelKey**: A string representing the name of the browsing channel. This ensures that only contexts with the same channel name will sync state. Ensure `channelKey` is unique to avoid conflicts with other instances using the same name.
- **initialState**: A variable representing the initial state value.

# License

This project is licensed under the MIT License.

---

Enjoy seamless state synchronization with the `use-browser-sync-state` library! If you have any questions or need further assistance, feel free to open an issue on our GitHub repository.
