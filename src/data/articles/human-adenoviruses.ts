import type { Article } from "@/types/article";

export const humanAdenovirusesArticle: Article = {
  slug: "human-adenoviruses-in-drinking-water",
  title:
    "Human Adenoviruses in Drinking Water: Challenges in Detection, Persistence, and Treatment",
  metaDescription:
    "Student publication reviewing human adenoviruses as waterborne pathogens — detection challenges, environmental persistence, and treatment approaches including UV disinfection.",
  category: "Jr Scientific Team Publication 2",
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
    "Human adenoviruses (HAdVs) have emerged as important waterborne pathogens because of their exceptional environmental stability and persistence. Unlike many other viruses, HAdVs possess a robust protein capsid and a double-stranded DNA genome that enhance their survival under adverse environmental conditions and reduce susceptibility to traditional low-pressure ultraviolet (UV) disinfection. These characteristics allow HAdVs to persist in wastewater, surface water, groundwater, and even treated drinking water, posing a significant challenge to public health. Furthermore, routine water quality monitoring primarily relies on bacterial indicators, while direct viral detection remains technically demanding, time-consuming, and costly, allowing viral contamination to go undetected despite compliance with existing standards. This review examines the pathways through which HAdVs enter water systems, the structural features responsible for their environmental persistence, and the limitations of current detection methods while evaluating conventional and advanced treatment technologies.",
  sections: [
    {
      title: "Introduction",
      blocks: [
        { type: "subheading", text: "Background" },
        {
          type: "paragraph",
          text: "The absence of bacteria in water does not guarantee the absence of disease. Although bacterial indicators are widely used to assess safe drinking water, they cannot reliably predict the presence of viruses. To this day, 3.5 billion people worldwide still lack access to safely managed sanitation services. According to the World Health Organization, an estimated 1.4 million deaths could be prevented annually through improved water sanitation and hygiene services (Gordon et al.). Improving water quality requires not only expanding access but also understanding the root cause behind waterborne diseases. While bacteria and parasites have historically been the primary focus of water quality monitoring, waterborne viruses have emerged as equally important contaminants because of their high infectivity and persistence (Gall et al., 2015).",
        },
        { type: "subheading", text: "Why Focus on Waterborne Viruses?" },
        {
          type: "paragraph",
          text: "Waterborne viruses are considerably smaller than bacteria, enabling them to pass through treatment systems more readily if adequate removal measures are not in place. Most viruses are transmitted through the fecal-oral route and can cause illnesses ranging from acute gastroenteritis to more severe complications including encephalitis, meningitis, myocarditis, and certain cancers (Gall et al., 2015). Among these pathogens, HAdVs have emerged as one of the most environmentally persistent and treatment-resistant viruses detected in aquatic environments.",
        },
      ],
    },
    {
      title: "Overview of Human Adenoviruses",
      blocks: [
        { type: "subheading", text: "Background" },
        {
          type: "paragraph",
          text: "HAdVs are known for their exceptional environmental stability. This stability is primarily attributed to two structural characteristics: their capsid (protein shell), which confers resistance to adverse environmental conditions, and their double-stranded DNA, which is less prone to mutations than RNA genomes and maintains genetic stability. Their environmental persistence contributes to continued transmission, allowing HAdVs to cause a wide range of illnesses, including respiratory, gastrointestinal, ocular, and urinary tract infections. In addition, their stability makes them capable of surviving in diverse aquatic environments — including rivers, lakes, drinking water, swimming pools, wastewater, and seawater — where they can remain infectious for extended periods. This broad environmental distribution poses a significant challenge for water quality monitoring and public health.",
        },
        {
          type: "subheading",
          text: "Why Adenovirus Is a Public Health Concern",
        },
        {
          type: "paragraph",
          text: "Adenovirus enters water through routes that treatment has not closed, and it slips past the monitoring that plants depend on. On top of that, it resists the disinfection method many systems use as a final barrier. It is the hardest waterborne virus to kill with standard low-pressure UV, the 254 nm lamps used in most systems (Gerba et al., 2002). Its double-stranded DNA can be repaired inside host cells after UV exposure, so it survives low-pressure doses that would inactivate other viruses (Eischeid et al., 2009). However, adenovirus only resists UV. Medium-pressure UV lamps emit a wider range of wavelengths and damage the virus's proteins as well as its DNA, which inactivates adenovirus about as easily as any other virus (Linden et al., 2007). The catch is that low-pressure lamps and standard doses are more common, so the disinfection step a system trusts may not be enough for this virus. UV is also not the only option. Free chlorine inactivates adenovirus easily (Thurston-Enriquez et al., 2003), and several swimming pool outbreaks happened only because chlorination was switched off or run too low (Mena & Gerba, 2009). Therefore, UV on its own will not stop adenovirus. A treatment system has to back it up with chlorine or a membrane.",
        },
        {
          type: "paragraph",
          text: "Adenovirus has caused more swimming pool outbreaks than any other waterborne virus, plus two documented drinking-water outbreaks, and it stays infectious in water for weeks (Mena & Gerba, 2009). It also takes only a small dose to cause infection, so even low levels of contamination matter, and the worst outcomes fall on young children and people with weakened immune systems. Keeping it out of drinking water comes down to pairing physical removal with a disinfection step that actually works.",
        },
        {
          type: "subheading",
          text: "How Adenovirus Enters Water Systems",
        },
        {
          type: "paragraph",
          text: "People catch it through the fecal-oral route: they swallow water or food carrying the virus, or pick it up through close contact with someone already infected. Once infected, a person sheds large amounts of adenovirus in their feces and urine, and shedding can continue for weeks, even without symptoms. That waste flows into the sewer system and through the wastewater plant, where conventional treatment does not remove all of it. At a wastewater plant on Michigan's Grand River, treatment removed less than 99% of the adenovirus, and the virus still turned up in the treated effluent (Fong et al., 2010). That effluent flows into the same rivers and lakes that towns downstream use for drinking water, which puts the virus back into the water the next person drinks.",
        },
        {
          type: "paragraph",
          text: "Adenovirus reaches source water two other ways. In older cities, combined sewer systems carry sewage and stormwater in the same pipes, and during heavy rain they overflow and release untreated sewage straight into rivers. This sends adenovirus into source water in short, concentrated bursts (Fong et al., 2010). The virus is also small enough to move through soil more easily than bacteria, so it can reach the groundwater that feeds wells. Health Canada (2019) found adenovirus and other enteric viruses in groundwater once thought to be well protected, and now recommends treating all groundwater for viruses rather than trusting the aquifer to filter them out. However it arrives, it does not clear quickly, since its environmental persistence keeps it infectious long after it enters (Mena & Gerba, 2009).",
        },
        {
          type: "paragraph",
          text: "Although drinking water treatment facilities routinely monitor bacterial indicators such as fecal coliforms, infectious viruses are rarely assessed because their detection and propagation remain technically demanding, time-consuming, and costly (Gall et al., 2015). Consequently, viral contamination may go undetected despite compliance with conventional water quality standards. Given the persistence of HAdVs and their resistance to conventional disinfection, physical removal through filtration has become an increasingly important component of modern drinking water treatment.",
        },
        {
          type: "subheading",
          text: "Why Exactly Adenovirus Is Hard to Detect?",
        },
        {
          type: "paragraph",
          text: "HAdVs are present in water at very low concentrations, well below the indicator bacteria plants normally test for. Detecting them requires concentrating large volumes down to a small sample, so some virus is lost along the way.",
        },
        {
          type: "paragraph",
          text: "Even with a sample, the two standard tests each miss something. Cell culture can show that the virus is still alive, but adenovirus grows slowly and poorly, so the answer takes days or weeks. Quantitative PCR is faster, but it reads the virus's DNA whether the virus is alive or dead. After treatment that's a problem, because a positive test might be nothing more than leftover genetic material from a virus the treatment already killed, which tells you nothing about whether the infectious virus survived.",
        },
        {
          type: "paragraph",
          text: "On top of that, viruses are incredibly small. The Human Adenovirus, for example, is only about 70–90 nanometers wide (WHO, 2017). At this size, they are nearly impossible to detect in water, making them extremely difficult to physically remove (National Research Council, 2011).",
        },
        {
          type: "paragraph",
          text: "The result is that most plants do not test for viruses at all since the methods are too slow and costly for routine monitoring (Health Canada, 2019). Plants track fecal indicator bacteria instead, like E. coli and coliforms, as a stand-in for contamination. But bacteria and viruses are not removed or killed at the same rate, so a clean bacterial reading says little about whether adenovirus is there (Wong et al., 2012). Water can meet every bacterial standard and still carry the virus. Because virus testing is too costly to run routinely and standard monitoring misses viruses, reliable filtration is what plants actually have to depend on.",
        },
      ],
    },
    {
      title: "Treatment Approaches",
      blocks: [
        {
          type: "paragraph",
          text: "When dealing with such a complex challenge, a single filter is not always enough. To understand why multi-stage treatment may be necessary, it is important to first compare the physical size of these contaminants with the pore sizes of different membranes.",
        },
        {
          type: "image",
          src: "/images/AdenovirusesTable.avif",
          alt: "Chart comparing contaminant sizes with membrane pore sizes",
          caption:
            "Chart comparing physical sizes of contaminants with membrane pore sizes (as shown on the original TSWP article page).",
        },
        {
          type: "paragraph",
          text: "As shown in the chart below, standalone microfiltration (MF) membranes have pores that are physically too large to retain viruses, making MF unsuitable for direct adenovirus removal (Shirasaki et al., 2017). Although nanofiltration (NF) membranes have pores small enough to retain viruses, their higher energy requirements and maintenance demands can make them less practical as the primary method for adenovirus removal (Nasir et al., 2022). This leaves ultrafiltration (UF) and reverse osmosis (RO) as two membrane technologies capable of removing viruses through size exclusion (Seven Seas News Team, 2025).",
        },
        {
          type: "paragraph",
          text: "But is the situation really that simple?",
        },
        {
          type: "paragraph",
          text: "Rather than relying on a single filter — or applying every available technology in a rigid sequence — water treatment engineers select and integrate different processes to create a customized treatment plan.",
        },
        {
          type: "paragraph",
          text: "Understanding each technology individually is important because every process offers a distinct mechanism.",
        },
      ],
    },
    {
      title: "How Water Treatment Removes and Inactivates Viruses",
      blocks: [
        { type: "subheading", text: "Coagulation and Flocculation" },
        {
          type: "paragraph",
          text: "Aluminum and iron-based chemicals, such as aluminum sulfate and ferric chloride, are mixed into the water. These positively charged chemicals cause the natural slight negative charge that the viruses carry to become neutralized (Hancock, 2017). This process, called coagulation, can remove between 90% and 99.9% of viruses (Health Canada, 2012). Scientists often express this reduction on a \"log\" scale: a 1-log reduction removes 90% of viruses, a 2-log reduction removes 99%, and a 3-log reduction removes 99.9%. However, Health Canada sets a minimum target of 99.99% removal or inactivation, equivalent to a 4-log reduction, for enteric viruses from vulnerable drinking water sources (Health Canada, 2012). This means that coagulation alone typically falls short of the 4-log benchmark, particularly at the lower end of its removal range, and must often be paired with additional treatment steps to reliably meet safety standards.",
        },
        {
          type: "paragraph",
          text: "This is where flocculation comes in. Once the charge is neutralized, the virus particles stop repelling each other and begin clumping together into larger clusters called floc. The purpose of this is to turn something microscopic into something large enough to settle out of the water or be caught by a coarser filter (Hancock, 2017).",
        },
        { type: "subheading", text: "Ultrafiltration" },
        {
          type: "paragraph",
          text: "Water passes through the ultrafiltration membrane, which physically blocks the virus particles that remain, along with other small contaminants. When operated correctly, UF can remove over 99.99% of adenovirus. However, there are still some smaller viruses, such as the MS2 bacteriophage, which can occasionally pass through the membrane (Nasir et al., 2022). This is exactly why the earlier coagulation and flocculation step is so important. By clumping smaller particles together into larger clusters, it increases the chance that they will be captured by the UF membrane rather than slipping through.",
        },
        { type: "subheading", text: "Reverse Osmosis" },
        {
          type: "paragraph",
          text: "Instead of using ultrafiltration, some high-budget treatment systems opt for reverse osmosis (RO). Reverse osmosis membranes are even smaller than UF. These membranes are so small that almost nothing gets through except water molecules themselves. Even the water that is allowed through must be forced through using high pressure to move across (Taligrot et al., 2024). This allows the membranes to remove over 99.999% of viruses, including the human adenovirus (Chen et al., 2021).",
        },
        { type: "subheading", text: "UV Disinfection" },
        {
          type: "paragraph",
          text: "Unlike the previous steps, ultraviolet (UV) disinfection is not a physical filtration process. Instead, it is a non-chemical disinfection method. It works by using UV light to penetrate the protective shell of a virus and permanently ruin its genetic material, making it unable to replicate and completely harmless (Lanrewaju et al., 2022). Despite this, water treatment system design must account for the fact that not all viruses respond equally to this radiation; for instance, the human adenovirus exhibits exceptionally high resistance to traditional low-pressure monochromatic UV light at the standard wavelength, requiring significantly elevated exposure doses or alternative multi-wavelength systems to achieve full inactivation (Health Canada, 2012).",
        },
      ],
    },
    {
      title: "Engineering for Real-World Accessibility",
      blocks: [
        {
          type: "paragraph",
          text: "Reviewing these technologies individually highlights exactly why a variety of water treatment methods must coexist. There is no single \"perfect\" solution in environmental engineering.",
        },
        {
          type: "paragraph",
          text: "What seems to be the most effective filter for human adenovirus, reverse osmosis, which provides an extremely strong barrier against viruses, comes with high energy demands, operating costs, and water waste that make it difficult to implement in many resource-limited communities (Seven Seas News Team, 2025). This is the other piece of the puzzle engineers must consider. After looking at how these systems work in theory, there are real-world constraints like these that must also be navigated.",
        },
        {
          type: "paragraph",
          text: "This is where the importance of initiatives like The Student Water Project (TSWP) becomes clear. Many communities need solutions that can operate reliably at a smaller scale, because accessible and energy-efficient technologies should not be limited to large-scale treatment systems.",
        },
        {
          type: "paragraph",
          text: "TSWP focuses on bringing effective water treatment solutions to communities that need them most. Currently, the team is working to implement a UV water treatment system at a school in Kenya. They are demonstrating how smaller-scale technologies can provide meaningful solutions in real-world settings.",
        },
      ],
    },
    {
      title: "Conclusion",
      blocks: [
        {
          type: "paragraph",
          text: "Human adenovirus poses a public health risk that conventional detection and filtration were not designed to catch, and no single treatment method offers a complete solution on its own. With continued refinement of layered filtration and disinfection strategies, water engineers can move closer to treatment systems tailored to the specific risks each virus and bacterium present.",
        },
      ],
    },
  ],
  references: [
    "Health Canada. (2012, May 24). Guidelines for Canadian drinking water quality: Guideline technical document – enteric viruses. Government of Canada. https://www.canada.ca/en/health-canada/services/publications/healthy-living/guidelines-canadian-drinking-water-quality-guideline-technical-document-enteric-viruses.html",
    "Chen, C., Guo, L., Yang, Y., Oguma, K., & Hou, L. (2021). Comparative effectiveness of membrane technologies and disinfection methods for virus elimination in water: A review. Science of The Total Environment, 801, Article 149678. https://doi.org/10.1016/j.scitotenv.2021.149678",
    "Eischeid, A. C., Meyer, J. N., & Linden, K. G. (2009). UV disinfection of adenoviruses: Molecular indications of DNA damage efficiency. Applied and Environmental Microbiology, 75(1), 23–28.",
    "Fong, T.-T., Phanikumar, M. S., Xagoraraki, I., & Rose, J. B. (2010). Quantitative detection of human adenoviruses in wastewater and combined sewer overflows influencing a Michigan river. Applied and Environmental Microbiology, 76(3), 715–723.",
    "Gall, A. M., Mariñas, B. J., Lu, Y., & Shisler, J. L. (2015). Waterborne viruses: A barrier to safe drinking water. PLOS Pathogens, 11(6), e1004867. https://doi.org/10.1371/journal.ppat.1004867",
    "Gerba, C. P., Gramos, D. M., & Nwachuku, N. (2002). Comparative inactivation of enteroviruses and adenovirus 2 by UV light. Applied and Environmental Microbiology, 68(10), 5167–5169.",
    "Gordon, B., Boisson, S., Johnston, R. B., Torgerson, D., & Cumming, O. (2023). Unsafe water, sanitation and hygiene: A persistent health burden. Bulletin of the World Health Organization, 101(09), 551–551A. https://doi.org/10.2471/blt.23.290668",
    "Hancock, N. (2017, January 10). Conventional water treatment: Coagulation and filtration. Safe Drinking Water Foundation. https://www.safewater.org/fact-sheets-1/2017/1/23/conventional-water-treatment",
    "Lanrewaju, A. A., Enitan-Folami, A. M., Sabiu, S., & Swalaha, F. M. (2022). A review on disinfection methods for inactivation of waterborne viruses. Frontiers in Microbiology, 13. https://doi.org/10.3389/fmicb.2022.991856",
    "Linden, K. G., Thurston, J., Schaefer, R., & Malley, J. P. (2007). Enhanced UV inactivation of adenoviruses under polychromatic UV lamps. Applied and Environmental Microbiology, 73(23), 7571–7574.",
    "Mena, K. D., & Gerba, C. P. (2009). Waterborne adenovirus. Reviews of Environmental Contamination and Toxicology, 198, 133–167.",
    "Nasir, A. M., Adam, M. R., Mohamad Kamal, S. N. E. A., Jaafar, J., Othman, M. H. D., Ismail, A. F., Aziz, F., Yusof, N., Bilad, M. R., Mohamud, R., A. Rahman, M., & Wan Salleh, W. N. (2022). A review of the potential of conventional and advanced membrane technology in the removal of pathogens from wastewater. Separation and Purification Technology, 286, 120454. https://doi.org/10.1016/j.seppur.2022.120454",
    "Seven Seas News Team. (2025, May 15). Ultrafiltration versus reverse osmosis. Seven Seas Water Corporation. https://sevenseaswater.com/ultrafiltration-versus-reverse-osmosis/",
    "Shirasaki, N., Matsushita, T., Matsui, Y., & Murai, K. (2017). Assessment of the efficacy of membrane filtration processes to remove human enteric viruses and the suitability of bacteriophages and a plant virus as surrogates for those viruses. Water Research, 115, 29–39. https://doi.org/10.1016/j.watres.2017.02.054",
    "Taligrot, H., Wurtzer, S., Monnot, M., Geslin, J., Moulin, L., & Moulin, P. (2024). Effect of volumetric concentration factor on virus removal for low-pressure reverse osmosis membrane in drinking water production: A study on different scales. Water Research, 267, 122536. https://doi.org/10.1016/j.watres.2024.122536",
    "Thurston-Enriquez, J. A., Haas, C. N., Jacangelo, J., & Gerba, C. P. (2003). Chlorine inactivation of adenovirus type 40 and feline calicivirus. Applied and Environmental Microbiology, 69(7), 3979–3985.",
    "U.S. Environmental Protection Agency. (2006). Ultraviolet disinfection guidance manual for the final long term 2 enhanced surface water treatment rule (EPA 815-R-06-007). Office of Water. https://www.epa.gov/system/files/documents/2022-10/ultraviolet-disinfection-guidance-manual-2006.pdf",
    "Wong, K., Fong, T.-T., Bibby, K., & Molina, M. (2012). Application of enteric viruses for fecal pollution source tracking in environmental waters. Environment International, 45, 151–164.",
  ],
  pdfHref:
    "https://www.tswp.org/_files/ugd/089add_10702cd55bef42efa63d7d529b8f3d16.pdf",
};
