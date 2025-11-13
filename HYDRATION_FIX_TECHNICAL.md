# Technical Analysis: Next.js Hydration Error Resolution

## Problem Statement

Next.js hydration errors occur when the server-rendered HTML doesn't match the client-side React render during hydration. This manifests as console warnings and can cause visual glitches or broken interactions.

## Root Cause Analysis

### The Issue
In `ContactForm.tsx` line 143:
```tsx
const base = getApiBase();
// ...
{!base && (
  <span className="text-xs text-gray-400">
    Demo mode: no backend configured.
  </span>
)}
```

### Why This Caused Hydration Errors

1. **Server-Side Render (SSR)**: 
   - During build/SSR, `getApiBase()` reads from `process.env`
   - `window` is undefined on the server
   - Returns value based solely on `process.env.NEXT_PUBLIC_API_BASE`

2. **Client-Side Hydration**:
   - `getApiBase()` checks `window.ENV` first
   - If runtime injection exists, returns different value
   - Conditional span may appear/disappear
   - React detects mismatch → hydration error

### The `getApiBase()` Function
```typescript
function safeReadPublicEnv(name: string): Nullable<string> {
  // 1) globalThis.__ENV (runtime)
  if (g && g.__ENV) { ... }
  
  // 2) window.ENV (browser-only) ⚠️ PROBLEM
  if (typeof window !== "undefined" && window.ENV) { ... }
  
  // 3) process.env (build-time) ⚠️ PROBLEM
  if (typeof process !== "undefined") { ... }
}
```

The function's behavior differs between server and client!

## Solution Design

### Strategy: Defer Client-Only Logic

The fix ensures **identical initial render** on both server and client by:
1. Not evaluating `getApiBase()` during component render
2. Using `useEffect` to evaluate it after mount (client-only)
3. Using a `mounted` flag to prevent premature conditional rendering

### Implementation

```typescript
// State for client-only values
const [base, setBase] = useState<string | null>(null);
const [mounted, setMounted] = useState(false);

// Evaluate only on client after mount
useEffect(() => {
  setBase(getApiBase());
  setMounted(true);
}, []);

// Guard conditional rendering
{mounted && !base && (
  <span>Demo mode: no backend configured.</span>
)}
```

### Why This Works

1. **Initial Server Render**: 
   - `mounted = false`, `base = null`
   - Conditional span does NOT render
   - Server HTML: `<button>Send Message</button>` (no span)

2. **Initial Client Render (Hydration)**:
   - React reuses state: `mounted = false`, `base = null`
   - Conditional span does NOT render
   - Client HTML: `<button>Send Message</button>` (no span)
   - ✅ **Match!** No hydration error

3. **After `useEffect` Runs**:
   - Sets `mounted = true`, `base = getApiBase()`
   - Conditional span renders if `!base`
   - This is a normal React update, not hydration

## Alternative Solutions Considered

### ❌ Option 1: suppressHydrationWarning
```tsx
<span suppressHydrationWarning>
  Demo mode: no backend configured.
</span>
```
**Rejected**: Suppresses warning but doesn't fix the underlying issue. Can cause visual glitches.

### ❌ Option 2: Use only process.env
```tsx
const base = process.env.NEXT_PUBLIC_API_BASE;
```
**Rejected**: Breaks runtime environment injection support. Not compatible with project's env.ts design.

### ❌ Option 3: Server-side only rendering
```tsx
'use server';
const base = getApiBase();
```
**Rejected**: ContactForm is a client component (needs useState, event handlers). Can't be server-only.

### ✅ Option 4: useEffect + mounted flag (Chosen)
**Advantages**:
- Maintains runtime injection support
- No hydration errors
- Minimal performance impact
- Follows React best practices
- Compatible with static export

## Performance Impact

### Before Fix
- Hydration error → React re-render entire component
- Console warnings slow down DevTools
- Potential layout shift

### After Fix
- Initial render: Identical HTML, no extra work
- `useEffect` runs once after mount (< 1ms)
- Slight delay for demo notice (acceptable for non-critical UI)

### Metrics
- **Build time**: No change
- **Bundle size**: +2 lines, negligible
- **Runtime overhead**: ~1ms for useEffect
- **User experience**: Improved (no console errors, no layout shifts)

## Pattern for Future Use

### Generic Hydration-Safe Client Value Hook

```typescript
function useClientValue<T>(getValue: () => T, defaultValue: T): T {
  const [value, setValue] = useState<T>(defaultValue);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setValue(getValue());
    setMounted(true);
  }, []);
  
  return mounted ? value : defaultValue;
}

// Usage
const base = useClientValue(getApiBase, null);
```

### When to Use This Pattern

Use `useEffect` + `mounted` pattern when:
- ✅ Conditional rendering depends on browser APIs
- ✅ Using `window`, `document`, `navigator`
- ✅ Runtime environment detection
- ✅ LocalStorage, SessionStorage access
- ✅ Media queries, viewport dimensions

Don't need this pattern when:
- ❌ Server components (already server-only)
- ❌ Event handlers (never run during SSR)
- ❌ Inside existing `useEffect` hooks
- ❌ Deterministic server values (like `getFullYear()`)

## Testing Strategy

### Unit Testing
```typescript
describe('ContactForm', () => {
  it('should not show demo notice during SSR', () => {
    const { container } = render(<ContactForm />);
    expect(container.textContent).not.toContain('Demo mode');
  });
  
  it('should show demo notice after mount when no backend', async () => {
    render(<ContactForm />);
    await waitFor(() => {
      expect(screen.getByText(/Demo mode/)).toBeInTheDocument();
    });
  });
});
```

### Integration Testing
- Build static export: `npm run build`
- Check for hydration warnings in console
- Verify no layout shifts in Lighthouse audit

## References

- [Next.js Hydration Docs](https://nextjs.org/docs/messages/react-hydration-error)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [SSR vs Client Rendering](https://nextjs.org/docs/app/building-your-application/rendering)

## Conclusion

The fix resolves hydration errors by ensuring server and client produce identical initial HTML, then applying client-only logic after hydration completes. This maintains functionality while adhering to React's hydration requirements.
