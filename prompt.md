# NatureWorld site brief

- **Field and audience:** A Vietnam-based B2B green-technology and sustainability group serving company leaders, public-sector partners, researchers, investors, and international organizations.
- **Design read:** Trust-first corporate marketing site with an editorial, image-led feel. `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`, `VISUAL_DENSITY: 4`.
- **Structural DNA:** Collage / Grid-Breaker. Use asymmetrical image and text proportions with chapter-like section changes; keep the navigation conventional and compact for clarity.
- **Scene choice:** No verified, topic-matched Spline scene was found across searches of Spline scene pages, community-tag results, and published embeds. Use the supplied slide imagery in `imgs` as the visual source; do not add a remote 3D dependency.
- **Reference pull:** [ERM](https://www.erm.com/) pairs sustainability services with large editorial imagery; borrow the clear service feature hierarchy. [Anthesis](https://www.anthesisgroup.com/) leads with direct sustainability positioning and evidence through case studies; borrow its outcome-led content order. [South Pole](https://www.southpole.com/) groups climate services by task and sector; borrow the scannable service taxonomy. [ClimatePartner](https://www.climatepartner.com/en) presents digital tools alongside human expertise; borrow that strategy-to-implementation pairing. [BSR](https://www.bsr.org/) organizes advisory, collaboration, and insights around a global network; borrow its partnership-led information structure. Exact reference-site typefaces and color tokens were not extracted, so none are claimed as measured.
- **Palette:** `#EDF2EC` paper ground, `#173D3B` ink, `#104B4D` deep teal, `#1C7776` teal, `#A4D831` lime accent, `#C7D4CE` rule color.
- **Type:** Manrope for display and body, IBM Plex Mono for compact metadata. Both font families are self-hosted through Fontsource packages with system fallbacks.
- **Brand voice:** Clear, practical, collaborative, and grounded in delivery. Keep ESG and Net Zero terminology where it is established. Avoid unsupported superlatives and fabricated outcomes.
- **Home page structure:** Asymmetric hero using the provided technology visual; mission statement; editorial service index; implementation image story; network feature; one contact close.
- **About page structure:** Mission hero using a supplied team image; open-network story; core values; GTISD HUB objectives; technology consulting; global ESG network; contact close.
- **Copy hooks:** “Chuyển đổi xanh bắt đầu từ hôm nay.” “Giải pháp phải phù hợp với điều kiện thực tế.” “Hãy đưa mục tiêu bền vững vào hành động.”
- **Technical hooks:** React, TypeScript, Vite, two routes (`/` and `/gioi-thieu`), existing local slide imagery, no extra animation or 3D packages.
- **Motion:** Short image reveal on page entry; CSS view-timeline reveal for field imagery where supported; restrained link-arrow movement. All motion respects `prefers-reduced-motion`.
- **Avoid:** Generic three-card feature grids, unsupported client logos, invented metrics, remote stock photography, purple gradients, and text over photos.
- **Render checkpoint:** Inspect the home and about routes at desktop and mobile widths; confirm the slide-image crops show the intended photographs and navigation remains usable at 320px.
