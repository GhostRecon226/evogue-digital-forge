## Goal
Make the "Explore AI Services" button on the homepage AI banner navigate to the AI Services page instead of `#`.

## Change
In `src/pages/Index.tsx`:
1. Add `import { Link } from "react-router-dom";` at the top.
2. Replace the `<a href="#">Explore AI Services</a>` in the AI banner section (around lines 412–417) with a `<Link to="/ai-services">` using the same classes.

No other changes.