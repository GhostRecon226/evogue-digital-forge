## Goal
Remove the "Edit with Lovable" watermark/badge from the published Evogue Consulting site (custom domains and `*.lovable.app` URL).

## Change
- Call `publish_settings--set_badge_visibility` with `hide_badge: true`.

## Requirements
- Workspace must be on **Pro plan or higher**. If it isn't, the toggle will be rejected and the badge will stay visible until the plan is upgraded.

## After approval
1. Toggle the badge off via the publish settings tool.
2. You may need to click **Publish → Update** once for the change to propagate to the live site, then hard-refresh (Cmd/Ctrl+Shift+R) to confirm the badge is gone on:
   - https://www.evogueconsulting.com
   - https://www.evogue.com.ng
   - https://evogue-origin-impact.lovable.app

No code changes required.