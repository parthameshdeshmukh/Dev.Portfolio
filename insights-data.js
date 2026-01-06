const insightsData = [
    {
        id: 1,
        title: "The Death of the Entry-Level Hatchback: Is India Ready?",
        category: "market",
        date: "Dec 18, 2024",
        summary: "Analyzing the systematic dismantling of the sub-5-lakh segment. Why OEMs are abandoning volume for value, and what it means for first-time buyers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Suzuki_Alto_%28eighth_generation%29_%28rear%29%2C_denpasar.jpg/1280px-Suzuki_Alto_%28eighth_generation%29_%28rear%29%2C_denpasar.jpg",
        content: `
            <p class="mb-6">The Indian automotive market was built on the back of the humble hatchback. For three decades, the sub-₹5 lakh car was the engine of mobility. Today, that engine is stalling.</p>
            
            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Data: A Segment in Freefall</h3>
            <p class="mb-4">In FY19, the entry-level hatchback segment (Alto, Kwid, Eon) commanded nearly <strong>25%</strong> of the total PV market. In FY24, that number has shrunk to just <strong>7.8%</strong>.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 class="text-cyan-400 font-mono text-sm mb-2">AVG TRANSACTION PRICE</h4>
                    <p class="text-3xl font-bold text-white">₹11.5 Lakhs</p>
                    <p class="text-xs text-gray-500 mt-1">Up from ₹7.5 Lakhs in 2018</p>
                </div>
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 class="text-red-400 font-mono text-sm mb-2">SALES VOLUME (ENTRY)</h4>
                    <p class="text-3xl font-bold text-white">-42%</p>
                    <p class="text-xs text-gray-500 mt-1">Year-on-Year Decline</p>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4 mt-8">Why is this happening?</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 marker:text-cyan-500">
                <li><strong>Regulatory Costs:</strong> BS6 Phase 2 and 6-Airbag mandates have disproportionately impacted cheap cars. A ₹20k price hike on a ₹30L SUV is negligible. On a ₹4L Alto, it's a 5% increase.</li>
                <li><strong>The EMI Trap:</strong> Banks are now offering 7-year loans (up from 5). This allows a buyer with a ₹25k monthly capacity to jump from a WagonR to a Baleno or Punch easily.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The verdict</h3>
            <p class="mb-6">The "First Car" is no longer a hatchback. It's a Micro-SUV. This shift is permanent. Manufacturers like Hyundai have already exited the sub-segment (Santro discontinued), and Maruti is the only player left standing.</p>

            <div class="mt-12 pt-6 border-t border-white/10">
                <h5 class="text-xs font-mono text-gray-500 mb-2 uppercase">References & Data Sources</h5>
                <ul class="text-xs text-gray-600 space-y-1 font-mono">
                    <li>1. SIAM Monthly Sales Reports (FY19-FY24)</li>
                    <li>2. JATO Dynamics Price Trends Analysis</li>
                    <li>3. Maruti Suzuki Annual Investor Presentation 2024</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "The Monocoque Shift: Engineering the New Indian SUV",
        category: "engineering",
        date: "Dec 15, 2024",
        summary: "Why Tata Motors pivoted its entire SUV strategy away from ladder-frames for the mass market, and how Mahindra doubled down.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2023_Tata_Nexon_Fearless_Plus_%28front%29.jpg/1280px-2023_Tata_Nexon_Fearless_Plus_%28front%29.jpg",
        content: `
            <p class="mb-6">For years, "SUV" in India meant Ladder-Frame Chassis (Body-on-Frame). Robust, heavy, and practically indestructible. But the market has shifted, and engineering choices have diverged dramatically between the two homegrown giants.</p>

            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Great Divide</h3>
            <div class="overflow-x-auto my-8">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-gray-700">
                            <th class="p-3 text-cyan-400 font-mono text-xs">PARAMETER</th>
                            <th class="p-3 text-white font-mono text-xs">TATA (OMEGARC/D8)</th>
                            <th class="p-3 text-white font-mono text-xs">MAHINDRA (SCORPIO N)</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-gray-300">
                        <tr class="border-b border-gray-800 bg-white/[0.02]">
                            <td class="p-3 font-semibold">Chassis Type</td>
                            <td class="p-3">Monocoque (Land Rover derived)</td>
                            <td class="p-3">Ladder Frame (Gen 3)</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-3 font-semibold">Torsional Rigidity</td>
                            <td class="p-3">High (Unitary construction)</td>
                            <td class="p-3">Improved, but lower than mono</td>
                        </tr>
                        <tr class="border-b border-gray-800 bg-white/[0.02]">
                            <td class="p-3 font-semibold">Weight Penalty</td>
                            <td class="p-3">~1600-1700 kg</td>
                            <td class="p-3">~2100-2200 kg</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-3 font-semibold">Primary Goal</td>
                            <td class="p-3">Refinement & Handling</td>
                            <td class="p-3">Off-road durability & Towing</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Efficiency Factor</h3>
            <p class="mb-4">Physics wins. The <strong>500kg weight advantage</strong> of a Monocoque chassis (like the Harrier) translates directly to better power-to-weight ratios and fuel efficiency. Mahindra compensates with sheer horsepower (172hp vs 200hp), but the driving dynamics are fundamentally different.</p>
            <p class="mb-6">The market has voted: 85% of "SUV" buyers never go off-road. They want potholes absorbed, not mountains climbed. This is why the Monocoque architecture (Creta, Seltos, Harrier, XUV700) dominates sales.</p>

            <div class="mt-12 pt-6 border-t border-white/10">
                <h5 class="text-xs font-mono text-gray-500 mb-2 uppercase">References & Data Sources</h5>
                <ul class="text-xs text-gray-600 space-y-1 font-mono">
                    <li>1. Team-BHP Technical Specifications Database</li>
                    <li>2. Land Rover D8 Platform Architecture docs</li>
                    <li>3. Tata Motors OMEGARC Briefing Papers</li>
                </ul>
            </div>
        `
    },
    {
        id: 3,
        title: "Citroën’s Strategic Misstep: The Cost of Cost-Cutting",
        category: "strategy",
        date: "Dec 12, 2024",
        summary: "Visible cost-cutting vs. invisible engineering. Where the line was crossed in the C3 Aircross, and why the Indian consumer rejected it.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Citroen_C3_Aircross_1.2_PureTech_110_Feel_Pack_%282021%29_front.jpg/1280px-Citroen_C3_Aircross_1.2_PureTech_110_Feel_Pack_%282021%29_front.jpg",
        content: `
            <p class="mb-6">Citroën is a legendary brand. It gave the world the 2CV and the DS. But its Indian strategy, "C-Cubed," seems to have fundamentally misunderstood the aspirational Indian buyer.</p>
            
            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The "Features vs. Fundamentals" War</h3>
            <p class="mb-4">Citroën prioritized <strong>Ride Comfort</strong> (Suspension tuning) over <strong>Visible Tech</strong>. In Europe, this works. In India, it's suicide.</p>

            <div class="bg-red-500/10 border border-red-500/20 p-6 rounded-lg my-8">
                <h4 class="text-red-400 font-bold mb-2">The "Dealbreakers" List</h4>
                <ul class="list-disc pl-5 space-y-2 text-gray-300">
                    <li>No Automatic Climate Control (on a ₹13L car!)</li>
                    <li>Manual Day/Night IRVM (even entry hatchbacks have this)</li>
                    <li>Visible keyholes on door handles (Old school aesthetic)</li>
                    <li>Flap-type door handles</li>
                </ul>
            </div>

            <p class="mb-4">The C3 Aircross drives beautifully. The 1.2L Turbo engine is punchy. The suspension swallows craters. But the buyer doesn't see suspension geometry; they see the missing sunroof and the basic instrument cluster.</p>
            
            <h3 class="text-2xl font-bold text-white mb-4 mt-8">Numbers don't lie</h3>
            <p class="mb-6">August 2024 Sales:</p>
            <ul class="list-none space-y-2 font-mono text-sm text-gray-400 mb-8">
                <li class="flex justify-between border-b border-gray-800 pb-1"><span>hyundai CRETA</span> <span class="text-white">16,762 units</span></li>
                <li class="flex justify-between border-b border-gray-800 pb-1"><span>Kia SELTOS</span> <span class="text-white">6,536 units</span></li>
                <li class="flex justify-between border-b border-gray-800 pb-1 text-red-400"><span>Citroën C3 AIRCROSS</span> <span>~120 units</span></li>
            </ul>

            <div class="mt-12 pt-6 border-t border-white/10">
                <h5 class="text-xs font-mono text-gray-500 mb-2 uppercase">References & Data Sources</h5>
                <ul class="text-xs text-gray-600 space-y-1 font-mono">
                    <li>1. FADA Monthly Retail Sales Data (Aug 2024)</li>
                    <li>2. Citroën India Product Brochures (2023-24)</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "The MPV Resurgence: It's Not Just For Fleets",
        category: "market",
        date: "Dec 10, 2024",
        summary: "The shift from 'Budget Alternative' to 'Mainstream Fuel'. How the Kia Carens and Ertiga changed the family perception.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kia_Seltos_SP2_PE_Gravity_gray_%281%29.jpg/1280px-Kia_Seltos_SP2_PE_Gravity_gray_%281%29.jpg", // Using Seltos/Kia generic as Carens fits the family
        content: `
            <p class="mb-6">The MPV (Multi-Purpose Vehicle) was once a dirty word in personal car ownership circles. It shouted "Uber" or "Taxi". The Innova was respected, but purely utilitarian. Then came the change.</p>
            
            <h3 class="text-2xl font-bold text-white mb-4 mt-8">The "Recreational" Rebrand</h3>
            <p class="mb-4">Kia coined the term "RV" (Recreational Vehicle) for the Carens to escape the MPV stigma. It worked. By making the design SUV-adjacent (flat nose, cladding) but keeping the monovolume practicality, they cracked a code.</p>

            <h3 class="text-2xl font-bold text-white mb-4 mt-8">Segment Growth Stats</h3>
            <div class="flex gap-4 my-6">
                <div class="flex-1 bg-white/[0.02] p-4 border-l-2 border-accent">
                    <span class="block text-2xl font-bold text-white">18%</span>
                    <span class="text-xs text-gray-500">MPV Market Share Growth (YoY)</span>
                </div>
                <div class="flex-1 bg-white/[0.02] p-4 border-l-2 border-accent">
                    <span class="block text-2xl font-bold text-white">45%</span>
                    <span class="text-xs text-gray-500">Buyers choosing Petrol-Auto over Diesel</span>
                </div>
            </div>

            <p class="mb-6">The shift to Petrol Automatics in this segment signifies that these are no longer high-mileage commercial workhorses, but primary family cars for urban running.</p>

            <div class="mt-12 pt-6 border-t border-white/10">
                <h5 class="text-xs font-mono text-gray-500 mb-2 uppercase">References & Data Sources</h5>
                <ul class="text-xs text-gray-600 space-y-1 font-mono">
                    <li>1. Autocar India Market Analysis 2024</li>
                    <li>2. Kia India Sales Releases</li>
                </ul>
            </div>
        `
    }
];

// Template for adding new posts:
/*
{
    id: 5,
    title: "New Title",
    category: "market", // market, engineering, ev, strategy, opinions
    date: "Date",
    summary: "Short summary...",
    image: "URL",
    content: "<p>HTML Content...</p>"
}
*/
