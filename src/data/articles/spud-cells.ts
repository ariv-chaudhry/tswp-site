import type { Article } from "@/types/article";

export const spudCellsArticle: Article = {
    slug: "spud-cells",
    title:
        "Engineering Future Variants of SpudCells for Programmable Water Bioremediation",
    metaDescription:
        "Student publication exploring SpudCells — synthetic cells as a programmable platform for future water bioremediation applications.",
    category: "Jr Scientific Team Publication 1",
    authors: [
        {
            name: "Prisha Gupta",
            affiliation:
                "Department of Biology and Psychology, McMaster University, Hamilton",
        },
        {
            name: "Ayla Nasir",
            affiliation:
                "Department of Chemical Engineering, McMaster University, Hamilton",
        },
        {
            name: "Peizhi Xu",
            affiliation:
                "Department of Medical Sciences, Western University, London",
        },
    ],
    abstract:
        "Can an artificial cell help solve one of humanity’s oldest challenges: access to clean water? This article explores the potential of recently constructed synthetic cells, SpudCells, as a sustainable and innovative technology for water bioremediation. Unlike natural bacteria, SpudCells are highly customizable allowing for diversification of specialized tasks without the unpredictability associated with living organisms. This review outlines how SpudCells functions, examines their advantages over conventional bacteria and discusses how they could be engineered to detect and degrade the impurities in water, while exploring their current limitations.",
    sections: [
        {
            title: "Introduction",
            blocks: [
                { type: "subheading", text: "What are SpudCells?" },
                {
                    type: "paragraph",
                    text: "SpudCells are a groundbreaking recent discovery. They are synthetic cells designed by scientists to mimic key features of living cells (Gaut et al., 2026). Structurally, they share a similar foundation with natural biological cells, including a protective outer membrane made of a phospholipid bilayer (Alberts et al., 2002a). However, the way these membranes are created is where they differ. Natural cells produce their own living membranes through biological processes (Alberts et al., 2002b). In contrast, SpudCells are enclosed within liposomes (Gaut et al., 2026). Liposomes are microscopic, water-filled lipid vesicles that scientists can artificially create in a laboratory (Akbarzadeh et al., 2013).",
                },
                {
                    type: "image",
                    src: "/images/SpudCellDiagram.avif",
                    alt: "Diagram of a liposome structure",
                    caption: 'Note: From "Liposome," by Elsevier, 1998 (https://www.sciencedirect.com/topics/nursing-and-health-professions/liposome). Copyright 1998 by Elsevier.',
                },
                { type: "subheading", text: "The Growth Mechanism" },
                {
                    type: "paragraph",
                    text: "SpudCells are unable to produce all of the materials required for growth on their own, so scientists supply their environment with “feeder liposomes.” These feeder liposomes are smaller, lab-created lipid vesicles that supply the chemical fuel and lipids required for SpudCell growth.",
                },
                {
                    type: "paragraph",
                    text: "To capture these resources, SpudCells use their alpha-hemolysin protein, which is incorporated into their lipid membrane.",
                },
                {
                    type: "paragraph",
                    text: "When a feeder liposome moves near the cell, this protein binds to a matching chemical tag engineered onto the surface of the feeder vesicle.",
                },
                {
                    type: "paragraph",
                    text: "This interaction between molecules causes the lipid bilayers of both structures to fuse together, creating an expanded vesicle structure. Through this fusion process, the SpudCell increases its outer membrane using lipids from the feeder vesicle while absorbing its internal fuel molecules (Gaut et al., 2026).",
                },
                { type: "subheading", text: "The Division Mechanism" },
                {
                    type: "paragraph",
                    text: "SpudCells divide through a physical process called “membrane fission.”",
                },
                {
                    type: "paragraph",
                    text: "The cell’s DNA contains instructions for producing specific membrane proteins, which are synthesized internally and inserted directly into the cell’s outer phospholipid bilayer.",
                },
                {
                    type: "paragraph",
                    text: "As these surface proteins continue to accumulate on the outside of the cell, they cause the membrane to become increasingly crowded. Eventually, this buildup creates pressure across the SpudCell’s phospholipid bilayer.",
                },
                {
                    type: "paragraph",
                    text: "This pressure causes the membrane to bend and pinch inward, creating enough force for the liposome vesicle to split into two separate daughter cells through fission (Gaut et al., 2026).",
                },
            ],
        },
        {
            title: "Characteristics of SpudCells",
            blocks: [
                {
                    type: "paragraph",
                    text: "Compared with natural cells, SpudCells possess a highly simplified and programmable architecture. While natural cells have evolved over billions of years to perform thousands of biological functions, SpudCells are designed to perform only the processes necessary for their intended purpose. Their synthetic genome contains approximately 90,000 base pairs (Spalding) encoding only 36 genes, compared with the thousands of genes found in most bacteria and the billions of base pairs present in the human genome (Le Page). This minimal genome allows researchers to understand and manipulate nearly every component of the system, providing a level of control that is difficult to achieve in naturally evolved organisms.",
                },
                {
                    type: "paragraph",
                    text: "Unlike living organisms, current SpudCells are not autonomous. They rely on externally supplied protein synthesis machinery, energy molecules, and feeder liposomes to grow and divide. Outside carefully controlled laboratory conditions, they cannot sustain themselves or reproduce indefinitely (Gaut et al., 2026). Rather than being a limitation alone, this dependence makes SpudCells an attractive platform for studying fundamental cellular processes while providing researchers with precise control over their behaviour.",
                },
            ],
        },
        {
            title: "Potential Advantages for Water Bioremediation",
            blocks: [
                {
                    type: "paragraph",
                    text: "Although current SpudCells are not capable of cleaning contaminated water, their modular design makes them a promising platform for future environmental applications. Because every component of the cell is engineered rather than inherited through evolution, researchers could potentially redesign individual genetic modules to perform specialized tasks.",
                },
                { type: "subheading", text: "Programmable Function" },
                {
                    type: "paragraph",
                    text: "Unlike genetically modified bacteria, which retain thousands of genes required for survival, future SpudCells could be engineered with only the biological pathways necessary for a specific application (Deans and The Conversation). For example, genetic modules responsible for detecting arsenic, binding heavy metals, or producing pollutant-degrading enzymes could be incorporated without maintaining unnecessary cellular functions.",
                },
                { type: "subheading", text: "Enhanced Biocontainment" },
                {
                    type: "paragraph",
                    text: "A major challenge associated with deploying genetically engineered microorganisms is ensuring that they remain contained within the intended environment (George et al.). Because SpudCells are synthetic systems that currently depend on externally supplied molecular components, they lack the ability to survive independently outside laboratory conditions. Future designs could incorporate additional biocontainment strategies, such as dependence on synthetic nutrients or programmed self-limitation, reducing the likelihood of long-term environmental persistence.",
                },
            ],
        },
        {
            title: "How Could We Engineer Them for Water Bioremediation?",
            blocks: [
                {
                    type: "paragraph",
                    text: "SpudCells lend themselves to engineering because their architecture is designed for modification. Rather than residing on a single chromosome, the 90,000-base-pair genome is distributed across seven small circular DNA molecules, or plasmids, with each plasmid encoding a distinct cellular function (Gaut et al., 2026). Because these functions are physically separated, one plasmid can be altered without disturbing the others, giving researchers a degree of programmable control that a fixed, single-genome design does not allow.",
                },
                {
                    type: "paragraph",
                    text: "This modularity is directly useful for water treatment. A SpudCell could be built with one plasmid encoding a sensor for a target pollutant, such as arsenic or a residual pesticide, and a second plasmid encoding the machinery to take up that pollutant and degrade it into a harmless product. Replacing the sensor plasmid would redirect the same cell toward a different contaminant, so a single base design could yield a family of pollutant-specific variants.",
                },
                {
                    type: "paragraph",
                    text: "The system could also be made self-regulating. If the sensor plasmid were configured so that the target pollutant induced expression of the degradation machinery, the cell would remain active only while that pollutant was present. Once the water was clean, expression would cease and the cell would return to an inactive state. Such a design would require no external control, since the contaminant itself would determine when the cell operated.",
                },
                {
                    type: "paragraph",
                    text: "Safety is built into the same architecture. A SpudCell cannot sustain itself in open water, because it depends on synthetic feeder material and on supplied components such as ribosomes that it cannot produce on its own, none of which are available in a natural body of water (Gaut et al., 2026). A cell that escaped containment would therefore be unable to persist or propagate. This biological limit could be reinforced physically by passing the treated water through a sealed filter that holds the cells in a single location.",
                },
                {
                    type: "paragraph",
                    text: "The current laboratory version is an early prototype rather than a deployable technology. It is useful because it is built entirely from characterized parts: every enzyme is purified and quantified, so researchers can observe the cell's behaviour and account for it (Gaut et al., 2026). Genome editing in natural microbes is now precise, but a natural genome is large and shaped by billions of years of evolution, and many of its internal interactions remain uncharacterized, so a single modification can still produce unpredictable downstream effects. A SpudCell contains far fewer such unknowns, so a variant can be refined and retested until it reliably performs its intended function.",
                },
            ],
        },
        {
            title: "Limitations of SpudCells",
            blocks: [
                {
                    type: "paragraph",
                    text: "Since SpudCells are a newly developed technology, scientists must address several major limitations before these artificial cells can be used to tackle water filtration challenges.",
                },
                { type: "subheading", text: "The Food Supply Dependency" },
                {
                    type: "paragraph",
                    text: "Right now, these cells cannot gather raw materials in the wild. They can only feed on pre-formed feeder bubbles that are handcrafted by scientists in a perfect laboratory environment (Gaut et al., 2026).",
                },
                { type: "subheading", text: "The Energy Constraint" },
                {
                    type: "paragraph",
                    text: "Their protein-making engine (the PURE system) is inefficient and drains its energy quickly. The cells do not “die” because they are not alive to begin with; instead, when energy runs out, the molecular mechanism stalls out. Protein production stops, meaning the cell can no longer create docking keys, feed, or divide (Gaut et al., 2026).",
                },
                { type: "subheading", text: "The Physical Fragility" },
                {
                    type: "paragraph",
                    text: "Since the outer membrane consists of simple lipids, the cells are physically fragile. Shifts in external conditions such as temperature spikes, or changes in salt levels, can cause them to leak or burst entirely (Gaut et al., 2026).",
                },
            ],
        },
        {
            title: "Future Direction and Opportunities to Improve",
            blocks: [
                {
                    type: "paragraph",
                    text: "As scientists overcome current limitations, SpudCells could be further engineered to target specific pollutants, creating new possibilities for advanced water purification and sensing systems.",
                },
                { type: "subheading", text: "Destroy pollutants" },
                {
                    type: "paragraph",
                    text: "Researchers could program future SpudCells to produce enzymes that break down contaminants such as:",
                },
                {
                    type: "list",
                    items: ["Pesticides", "Pharmaceuticals", "Industrial Chemicals"],
                },
                { type: "subheading", text: "Capture heavy metals" },
                {
                    type: "paragraph",
                    text: "Synthetic cells could potentially display proteins that bind metals such as:",
                },
                {
                    type: "list",
                    items: ["Lead", "Mercury", "Cadmium"],
                },
                { type: "subheading", text: "Detect Contamination" },
                {
                    type: "paragraph",
                    text: "One exciting possibility is using SpudCells as living biosensors. For example, SpudCells could detect mercury in water and release a fluorescent protein that glows in water.",
                },
                { type: "subheading", text: "Kill Other Microbes" },
                {
                    type: "paragraph",
                    text: "Future SpudCells might produce:",
                },
                {
                    type: "list",
                    items: [
                        "Antimicrobial peptides",
                        "Bacteriophages",
                        "Disinfecting enzymes",
                    ],
                },
                {
                    type: "paragraph",
                    text: "They selectively eliminate dangerous bacteria while avoiding harsh chemicals like chlorine.",
                },
            ],
        },
        {
            title: "Conclusion",
            blocks: [
                {
                    type: "paragraph",
                    text: "SpudCells are still in the early stages of development; nonetheless, they demonstrate enormous potential to address real-world challenges. With continued research, these programmable artificial cells could one day contribute to more effective water treatment solutions.",
                },
            ],
        },
    ],
    pdfHref:
        "https://www.tswp.org/_files/ugd/0e285e_9c542939ab2146d0acd00befe900f6f9.pdf",
};
