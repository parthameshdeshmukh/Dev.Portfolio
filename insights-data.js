/**
 * ------------------------------------------------------------------
 * HOW TO POST A NEW CASE STUDY:
 * ------------------------------------------------------------------
 * 1. Copy the "TEMPLATE" object below (between the { curley braces }).
 * 2. Paste it into the `insightsData` array (e.g., at the top or bottom).
 * 3. Update the fields:
 *    - id: A unique number (e.g., Next number in sequence)
 *    - title: Headline of your post
 *    - category: 'market', 'engineering', 'ev', or 'opinions' (matches filter buttons)
 *    - summary: Short text shown on the card
 *    - content: Full article text. You can use HTML tags like:
 *               <p>Paragraph</p>
 *               <h4 class="text-xl font-bold text-accent">Subheading</h4>
 *               <ul><li>List item</li></ul>
 *    - image: URL to your image (or local path like 'images/my-car.jpg')
 *    - date: String date (e.g., "Jan 01, 2026")
 * 
 * TEMPLATE:
 * {
 *     id: 999,
 *     title: "Your Title Here",
 *     category: "market",
 *     summary: "Short summary for the card...",
 *     content: `
 *         <p class="mb-4">Your main content goes here...</p>
 *         <h4 class="text-xl font-bold text-accent mb-2">Subheading</h4>
 *         <p class="mb-4">More content...</p>
 *     `,
 *     image: "https://via.placeholder.com/800x400",
 *     date: "Today"
 * },
 * ------------------------------------------------------------------
 */

const insightsData = [
    {
        id: 1,
        title: "Why Compact SUVs Dominate India",
        category: "market",
        summary: "Analyzing the shift from hatchbacks to high-riding crossovers and how taxation laws shaped this segment.",
        content: `
            <p class="mb-4">The Indian automotive market has seen a seismic shift in the last decade. Gone are the days when the hatchback was the default choice for the middle-class family. Today, the Compact SUV rules the roost.</p>
            <h4 class="text-xl font-bold text-accent mb-2">The Sub-4 Meter Rule</h4>
            <p class="mb-4">It all started with the government's tax benefit for cars under 4 meters in length with specific engine capacities. Manufacturers realized they could offer the "SUV stance" without the massive price tag of a full-size SUV.</p>
            <h4 class="text-xl font-bold text-accent mb-2">Road Conditions & Image</h4>
            <p class="mb-4">Beyond taxes, the ground clearance is a practical necessity for Indian roads. But equally important is the "image" — an SUV commands more road presence and perceived status than a sedan or hatch equivalent.</p>
            <div class="my-6 p-4 border-l-4 border-accent bg-accent/10">
                <p class="italic">"The Compact SUV is the perfect compromise between aspiration and practicality in the Indian context."</p>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?auto=format&fit=crop&q=80&w=1000",
        date: "Dec 10, 2025"
    },
    {
        id: 2,
        title: "Turbo vs NA — Choosing the Right Engine",
        category: "engineering",
        summary: "A deep dive into thermal efficiency, lag, and reliability to understand which powertrain suits your driving style.",
        content: `
            <p class="mb-4">With emission norms tightening, the "downsizing" trend has brought small turbo-petrol engines to the mass market. But is a 1.0L Turbo really better than a 1.5L Naturally Aspirated (NA) engine?</p>
            <h4 class="text-xl font-bold text-accent mb-2">The Case for Turbo</h4>
            <p class="mb-4">Torque is the answer. Turbos provide a surge of mid-range torque that makes overtaking effortless. They are fun, punchy, and efficient *if* driven sedately.</p>
            <h4 class="text-xl font-bold text-accent mb-2">The Reliability Factor</h4>
            <p class="mb-4">NA engines are simpler. Fewer moving parts means less heat and generally higher long-term reliability. For city traffic where turbo lag can be annoying, the linear response of an NA engine is often smoother.</p>
        `,
        image: "https://images.unsplash.com/photo-1486262715619-01b8025d9701?auto=format&fit=crop&q=80&w=1000",
        date: "Nov 28, 2025"
    },
    {
        id: 3,
        title: "EV Range Anxiety — Behavioral or Technical?",
        category: "ev",
        summary: "Is range anxiety technical or psychological? Exploring charging infrastructure psychology.",
        content: `
            <p class="mb-4">We often hear about "Range Anxiety" as the biggest barrier to EV adoption. But real-world data suggests that 90% of daily drives are well within the range of modern budget EVs.</p>
            <p class="mb-4">The fear isn't about the *daily* drive, but the *exception* — that one unplanned emergency trip. Building confidence isn't just about bigger batteries, it's about visible, reliable fast-charging networks.</p>
        `,
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
        date: "Nov 15, 2025"
    },
    {
        id: 4,
        title: "Design Logic Behind DRLs",
        category: "engineering",
        summary: "How Daytime Running Lights evolved from safety features to brand signatures in modern automotive design.",
        content: `
            <p class="mb-4">Daytime Running Lights (DRLs) started in Scandinavia for safety in low-light conditions. Today, they are the "eyes" of the car.</p>
            <p class="mb-4">Designers use DRL signatures to make a car instantly recognizable data night from 500 meters away. It is no longer just a light; it is brand identity.</p>
        `,
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000",
        date: "Oct 05, 2025"
    },
    {
        id: 5,
        title: "The Rise of Pre-Owned Luxury",
        category: "market",
        summary: "New car prices are soaring. A look at why enthusiasts are turning to the used market for value.",
        content: `
            <p class="mb-4">A brand new luxury sedan loses 30% of its value the moment it leaves the showroom. For the smart enthusiast, the pre-owned market offers segments-higher accolades for the price of a new hatchback.</p>
            <p class="mb-4">With organized players entering the used car space, the risk factor ("lemons") is reducing, making this a golden era for used car buyers.</p>
        `,
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=1000",
        date: "Sep 20, 2025"
    },
    {
        id: 6,
        title: "Tata's EV Strategy — Explained",
        category: "ev",
        summary: "How Tata Motors successfully democratized EVs in a price-sensitive market like India using the Ziptron tech.",
        content: `
            <p class="mb-4">Tata didn't wait for a ground-up EV platform. They converted their existing ICE platforms (Internal Combustion Engine) to EV. This saved massive R&D costs and allowed them to price the Nexon EV competitively.</p>
            <p class="mb-4">This "conversion" strategy was the masterstroke that allowed them to capture 70%+ of the market before global giants could even react.</p>
        `,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
        date: "Aug 10, 2025"
    }
];
