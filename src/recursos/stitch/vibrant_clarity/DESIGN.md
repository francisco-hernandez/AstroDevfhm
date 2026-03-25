```markdown
# Design System: Vibrant Clarity

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Energetic Curator."** 

This system rejects the static, boxy constraints of traditional corporate sites in favor of a high-end editorial experience that feels both boutique and technologically advanced. We achieve "Vibrant Clarity" by balancing extreme whitespace (Spaciousness) with high-intensity accent pops (Energy). 

To break the "template" look, designers must embrace **intentional asymmetry**. Layouts should feature overlapping elements—such as a large `display-lg` headline partially masking a `surface-container` card—and a typography scale that favors dramatic contrast between massive headers and functional body text. This is not just a UI; it is a digital canvas for a creative studio.

---

## 2. Colors & Surface Architecture
The palette is built on a foundation of high-contrast energy. We use Cobalt Blue for authority, Digital Lime for high-tech vibrance, and Vital Orange for tactical calls to action.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning or card definition. Structural boundaries must be defined solely through background color shifts. For example, a `secondary-container` (Digital Lime) section should sit flush against a `surface` (Pure White) background. The eye should perceive the change in "zone" through color, not a "stroke."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, layered sheets. 
- **Base Layer:** `surface` (#faf8ff) or `surface-container-lowest` (#ffffff).
- **Secondary Layer:** `surface-container-low` (#f3f2ff) to create subtle inset areas for content blocks.
- **Elevation Layer:** `surface-container-highest` (#dce1ff) for floating navigation or high-priority modals.

### The "Glass & Gradient" Rule
To add "soul" to the digital interface, use **Glassmorphism** for floating elements (Navigation bars, Tooltips). 
- **Formula:** `surface-container-lowest` at 70% opacity + 20px Backdrop Blur.
- **Signature Gradients:** Use linear gradients (135°) transitioning from `primary` (#0040df) to `primary-container` (#2d5bff) for primary CTAs to ensure they feel tactile and premium rather than flat.

---

## 3. Typography: Editorial Authority
The typography system uses a pairing of **Epilogue** (Display/Headlines) and **Inter** (Body/Labels) to balance "Creative Studio" character with "Professional Tech" legibility.

- **Display & Headline (Epilogue):** These are the voice of the brand. Use `display-lg` (3.5rem) with `font-weight: 800` for hero sections. Letter spacing should be slightly tight (-0.02em) to create a "locked-in" editorial look.
- **Body & Title (Inter):** Designed for maximum clarity. Use `body-lg` (1rem) for general reading. The line height is generous (1.6) to support the "Spacious" mood.
- **Hierarchy Role:** The scale jump between a `display-lg` headline and `body-md` text is intentional. It creates a sense of "Boutique Scale"—making the content feel curated rather than cluttered.

---

## 4. Elevation & Depth
In this system, depth is a product of light and layering, never "structural" lines.

- **The Layering Principle:** Depth is achieved by stacking surface tokens. An `on-surface` element should never feel "pasted on"; it should feel like it belongs to its container.
- **Ambient Shadows:** For floating components like Cards or Modals, use "Ambient Shadows." 
    - **Specs:** `0 24px 48px -12px`. 
    - **Color:** Use `on-surface` at 6% opacity. This creates a soft, natural lift that mimics professional photography lighting.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar background (e.g., an input field), use the `outline-variant` token at **15% opacity**. This provides a "hint" of a boundary without breaking the "No-Line" rule.
- **Corner Radii:** Use the **3xl (1.5rem to 3rem)** scale for all primary containers and buttons. This extreme roundness conveys an "Approachable/Modern" boutique feel.

---

## 5. Components

### Buttons
- **Primary:** Gradient (`primary` to `primary-container`), white text, `xl` (3rem) corner radius. Use `12` (4rem) horizontal padding for a wide, confident stance.
- **Secondary:** Digital Lime (`secondary-container`) with `on-secondary-container` text. High-energy and impossible to miss.
- **Tertiary:** No background. Text-only using `primary` color with a `surface-container-high` hover state.

### Cards & Lists
- **Rule:** Forbid the use of divider lines. 
- **Structure:** Separate list items using `spacing-4` (1.4rem) and subtle background shifts (`surface-container-low`).
- **Cards:** Utilize the `3xl` corner radius. Content should have generous internal padding (`spacing-8`).

### Input Fields
- **Style:** `surface-container-lowest` background with a "Ghost Border." On focus, the border transitions to a 2px `primary` (Cobalt Blue) and a soft blue ambient shadow.

### Signature Component: The "Feature Float"
A bespoke component for devfhm.com: A large, `xl` rounded container using Digital Lime or Vital Orange as a backdrop, with a `surface-container-lowest` card overlapping it by 25%. This breaks the grid and emphasizes the "Boutique Creative" identity.

---

## 6. Do’s and Don’ts

### Do:
- **Use Massive Scale:** Don't be afraid to let a headline take up 60% of the viewport height.
- **Trust White Space:** If a section feels "busy," increase the vertical spacing to `spacing-24` (8.5rem).
- **Tone-on-Tone:** Use `primary-fixed` backgrounds with `on-primary-fixed-variant` text for sophisticated, low-contrast callouts.

### Don’t:
- **Don't Use Pure Black Shadows:** This kills the "Vibrant Clarity" mood. Always tint shadows with the surface color.
- **Don't Use Default Spacing:** Avoid "Standard 16px" gaps. Use the Spacing Scale to create "rhythmic tension" (e.g., very tight grouping for labels vs. very wide gaps for sections).
- **Don't Use 1px Borders:** If you feel the need to draw a line, use a background color change or a wider `spacing` gap instead.