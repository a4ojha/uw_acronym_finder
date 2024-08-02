const list = [
  {
      "id": 20,
      "acronym": "A-SiDIC",
      "full_name": "Amorphous Silicon Devices and Integrated Circuits Group (now G2N)"
  },
  {
      "id": 1,
      "acronym": "ACE",
      "full_name": "Arts Computer Experience"
  },
  {
      "id": 2,
      "acronym": "ACE",
      "full_name": "Association of Cultural Executives"
  },
  {
      "id": 3,
      "acronym": "ACE",
      "full_name": "Atmospheric Chemistry Experiment"
  },
  {
      "id": 4,
      "acronym": "ACE",
      "full_name": "University of Waterloo Angel Course Environment (was replaced by LEARN)"
  },
  {
      "id": 5,
      "acronym": "ACO",
      "full_name": "Arts Computing Office"
  },
  {
      "id": 6,
      "acronym": "ACOE",
      "full_name": "Accreditation Council on Optometric Education"
  },
  {
      "id": 7,
      "acronym": "ADMI",
      "full_name": "Advanced Design and Manufacturing Institute"
  },
  {
      "id": 8,
      "acronym": "AFIW",
      "full_name": "Affiliated and Federated Institutions of Waterloo"
  },
  {
      "id": 9,
      "acronym": "AFM",
      "full_name": "Accounting & Financial Management"
  },
  {
      "id": 10,
      "acronym": "AFMNet",
      "full_name": "Advanced Foods and Materials Network (NCE)"
  },
  {
      "id": 11,
      "acronym": "AFSA",
      "full_name": "Accounting & Finance Student Association"
  },
  {
      "id": 12,
      "acronym": "AHS",
      "full_name": "Applied Health Sciences"
  },
  {
      "id": 13,
      "acronym": "AHSUM",
      "full_name": "Applied Health Sciences Undergraduate Members"
  },
  {
      "id": 14,
      "acronym": "AIDL",
      "full_name": "Advanced Interface Design Lab"
  },
  {
      "id": 15,
      "acronym": "AODA",
      "full_name": "Accessibility for Ontarians with Disabilities Act"
  },
  {
      "id": 16,
      "acronym": "APC",
      "full_name": "Automotive Partnership Canada (federal)"
  },
  {
      "id": 17,
      "acronym": "AquaNet",
      "full_name": "Network in Aquaculture - ceased (NCE)"
  },
  {
      "id": 18,
      "acronym": "ASCO",
      "full_name": "Association of Schools and Colleges of Optometry"
  },
  {
      "id": 19,
      "acronym": "ASEC",
      "full_name": "Accounting Students Education Contribution"
  },
  {
      "id": 21,
      "acronym": "ASU",
      "full_name": "Arts Student Union"
  },
  {
      "id": 22,
      "acronym": "ATOP",
      "full_name": "Access to Opportunities Program"
  },
  {
      "id": 23,
      "acronym": "AUCC",
      "full_name": "Association of Universities and Colleges of Canada"
  },
  {
      "id": 24,
      "acronym": "AUTO21",
      "full_name": "The Automobile of the 21st Century (NCE)"
  },
  {
      "id": 25,
      "acronym": "BBCR",
      "full_name": "Broadband Communications Research Group"
  },
  {
      "id": 26,
      "acronym": "BEG",
      "full_name": "Building Engineering Group"
  },
  {
      "id": 27,
      "acronym": "BGSA",
      "full_name": "Biology Graduate Student Association"
  },
  {
      "id": 28,
      "acronym": "BHEC",
      "full_name": "Biotechnology and Health Engineering Centre"
  },
  {
      "id": 29,
      "acronym": "BISRG",
      "full_name": "Business and Industrial Statistics Research Group"
  },
  {
      "id": 30,
      "acronym": "BoG",
      "full_name": "Board of Governors"
  },
  {
      "id": 31,
      "acronym": "BOSS",
      "full_name": "Biomaterials and Ocular Surface Science Group"
  },
  {
      "id": 32,
      "acronym": "BUGS",
      "full_name": "Biology Undergraduates Society"
  },
  {
      "id": 33,
      "acronym": "C&D",
      "full_name": "coffee and doughnut (shop)"
  },
  {
      "id": 34,
      "acronym": "C&O",
      "full_name": "Combinatorics and Optimization"
  },
  {
      "id": 36,
      "acronym": "CACEE",
      "full_name": "Canadian Association of Career Educators & Employers"
  },
  {
      "id": 37,
      "acronym": "CACR",
      "full_name": "Centre for Applied Cryptographic Research"
  },
  {
      "id": 38,
      "acronym": "CAEL",
      "full_name": "Canadian Academic English Language Assessment"
  },
  {
      "id": 39,
      "acronym": "CAFCE",
      "full_name": "Canadian Association for Co-operative Education"
  },
  {
      "id": 40,
      "acronym": "CAG",
      "full_name": "Conflict Analysis Group"
  },
  {
      "id": 41,
      "acronym": "CAGS",
      "full_name": "Canadian Association for Graduate Studies"
  },
  {
      "id": 42,
      "acronym": "CAHR",
      "full_name": "Centre for Applied Health Research (ceased)"
  },
  {
      "id": 43,
      "acronym": "CAMJ",
      "full_name": "Centre for Advanced Materials Joining"
  },
  {
      "id": 44,
      "acronym": "CANEX",
      "full_name": "Canada Exchange Scholars Award Program"
  },
  {
      "id": 45,
      "acronym": "CAPDS",
      "full_name": "Centre for Advanced Photovoltaic Devices and Systems"
  },
  {
      "id": 46,
      "acronym": "CARE",
      "full_name": "Centre for Accounting Research and Education"
  },
  {
      "id": 47,
      "acronym": "CARL",
      "full_name": "Canadian Association of Research Libraries"
  },
  {
      "id": 48,
      "acronym": "CASE",
      "full_name": "Council for Advancement and Support of Education"
  },
  {
      "id": 49,
      "acronym": "CASF",
      "full_name": "Centre for Advanced Studies in Finance"
  },
  {
      "id": 50,
      "acronym": "CASIOPA",
      "full_name": "Centre for Applied Science in Ontario Protected Areas"
  },
  {
      "id": 51,
      "acronym": "CATT",
      "full_name": "Centre for Advancement of Trenchless Technologies"
  },
  {
      "id": 52,
      "acronym": "CAUBO",
      "full_name": "Canadian Association of University Business Officers"
  },
  {
      "id": 53,
      "acronym": "CBB",
      "full_name": "Centre for Bioengineering and Biotechnology"
  },
  {
      "id": 55,
      "acronym": "CBRPE",
      "full_name": "Centre for Behavioural Research and Program Evaluation (now Propel Centre for Population Health Impact)"
  },
  {
      "id": 56,
      "acronym": "CC",
      "full_name": "Canada Council"
  },
  {
      "id": 57,
      "acronym": "CCA",
      "full_name": "Replaced . Used to stand for Centre for Career Action"
  },
  {
      "id": 58,
      "acronym": "CCAE",
      "full_name": "Canadian Council for the Advancement of Education"
  },
  {
      "id": 59,
      "acronym": "CCARD",
      "full_name": "Centre for Core Area Research and Design"
  },
  {
      "id": 60,
      "acronym": "CCAT",
      "full_name": "Canadian Centre of Arts and Technology"
  },
  {
      "id": 62,
      "acronym": "CCCI",
      "full_name": "Canadian Centre for Cultural Innovation"
  },
  {
      "id": 63,
      "acronym": "CCEC",
      "full_name": "Centre for Control of Emerging Contaminants"
  },
  {
      "id": 64,
      "acronym": "CCFSRG",
      "full_name": "Canadian Cold Formed Steel Research Group"
  },
  {
      "id": 65,
      "acronym": "CCIN",
      "full_name": "Canadian Cryospheric Information Network"
  },
  {
      "id": 66,
      "acronym": "CCIT",
      "full_name": "Centre of Excellence for Communications and Information Technology (OCE)"
  },
  {
      "id": 68,
      "acronym": "CCM",
      "full_name": "Centre for Cultural Management"
  },
  {
      "id": 69,
      "acronym": "CCMIC",
      "full_name": "Centre for Computational Mathematics in Industry and Commerce"
  },
  {
      "id": 70,
      "acronym": "CDMN",
      "full_name": "Canadian Digital Media Network"
  },
  {
      "id": 71,
      "acronym": "CE",
      "full_name": "Centre of Excellence for Energy (OCE)"
  },
  {
      "id": 72,
      "acronym": "CEC",
      "full_name": "Canadian Engineering Competition"
  },
  {
      "id": 73,
      "acronym": "CECA",
      "full_name": "Co-operative Education & Career Action (was Co-operative Education & Career Services)"
  },
  {
      "id": 74,
      "acronym": "CECR",
      "full_name": "Centres of Excellence for Commercialization and Research (federal)"
  },
  {
      "id": 75,
      "acronym": "CECS",
      "full_name": "Co-operative Education & Career Services (now CECA)"
  },
  {
      "id": 76,
      "acronym": "CEET",
      "full_name": "Centre of Excellence for Earth and Environmental Technologies (OCE)"
  },
  {
      "id": 77,
      "acronym": "CEL",
      "full_name": "Centre for Extended Learning (was Distance and Continuing Education)"
  },
  {
      "id": 78,
      "acronym": "Cellnet",
      "full_name": "Cell Factory Bioprocessing Research Network"
  },
  {
      "id": 79,
      "acronym": "CEMC",
      "full_name": "Centre for Education in Mathematics and Computing"
  },
  {
      "id": 80,
      "acronym": "CERC",
      "full_name": "Canada Excellence Research Chair"
  },
  {
      "id": 81,
      "acronym": "CFI",
      "full_name": "Canada Foundation for Innovation"
  },
  {
      "id": 82,
      "acronym": "CFM",
      "full_name": "Computing and Financial Management"
  },
  {
      "id": 83,
      "acronym": "CFPF",
      "full_name": "Centre on Foreign Policy and Federalism"
  },
  {
      "id": 84,
      "acronym": "CHIP",
      "full_name": "Computing Help and Information Place"
  },
  {
      "id": 85,
      "acronym": "CIA",
      "full_name": "Canadian Institute of Actuaries"
  },
  {
      "id": 86,
      "acronym": "CIAR",
      "full_name": "Canadian Institute for Advanced Research"
  },
  {
      "id": 87,
      "acronym": "CIARS",
      "full_name": "Centre for Intelligent Antenna and Radio Systems"
  },
  {
      "id": 88,
      "acronym": "CIGI",
      "full_name": "Centre for International Governance Innovation"
  },
  {
      "id": 89,
      "acronym": "CIHR",
      "full_name": "Canadian Institutes of Health Research"
  },
  {
      "id": 90,
      "acronym": "CIPC",
      "full_name": "Chanchlani India Policy Centre"
  },
  {
      "id": 91,
      "acronym": "CIPI",
      "full_name": "Canadian Institute for Photonic Innovations (NCE)"
  },
  {
      "id": 92,
      "acronym": "CIRFE",
      "full_name": "Centre for Integrated Radio Frequency Engineering"
  },
  {
      "id": 93,
      "acronym": "CITO",
      "full_name": "Communications and Information Technology Ontario - now CCIT (OCE)"
  },
  {
      "id": 94,
      "acronym": "CKI",
      "full_name": "Centre for Knowledge Integration"
  },
  {
      "id": 95,
      "acronym": "CLLRNet",
      "full_name": "Canadian Language and Literacy Research Network - ceased (NCE)"
  },
  {
      "id": 96,
      "acronym": "CMHR",
      "full_name": "Centre for Mental Health Research"
  },
  {
      "id": 97,
      "acronym": "CMM",
      "full_name": "Centre of Excellence for Materials and Manufacturing (OCE)"
  },
  {
      "id": 98,
      "acronym": "CMS",
      "full_name": "Cultural Management Specialization"
  },
  {
      "id": 99,
      "acronym": "CnD",
      "full_name": "coffee and doughnut (shop)"
  },
  {
      "id": 100,
      "acronym": "CNIB",
      "full_name": "Canadian National Institute for the Blind"
  },
  {
      "id": 101,
      "acronym": "COFU-UO",
      "full_name": "Council of Finance Officers-Universities of Ontario"
  },
  {
      "id": 102,
      "acronym": "ConGESE",
      "full_name": "Consortium for Graduate Education in Software Education"
  },
  {
      "id": 103,
      "acronym": "CORE",
      "full_name": "Centre for Ocular Research & Education (Formerly the Centre for Contact Lens Research)"
  },
  {
      "id": 104,
      "acronym": "COS",
      "full_name": "Community of Science"
  },
  {
      "id": 105,
      "acronym": "COU",
      "full_name": "Council of Ontario Universities"
  },
  {
      "id": 106,
      "acronym": "CP",
      "full_name": "Centre of Excellence for Photonics (OCE)"
  },
  {
      "id": 108,
      "acronym": "CPAMI",
      "full_name": "Centre for Pattern Analysis and Machine Intelligence"
  },
  {
      "id": 109,
      "acronym": "CPATT",
      "full_name": "Centre for Pavement and Transportation Technology"
  },
  {
      "id": 110,
      "acronym": "CPSA",
      "full_name": "Canadian Political Science Association"
  },
  {
      "id": 111,
      "acronym": "CR",
      "full_name": "Congregation of the Resurrection"
  },
  {
      "id": 112,
      "acronym": "CRAIG",
      "full_name": "Contracts Research and Industrial Grants (Office of Research)"
  },
  {
      "id": 113,
      "acronym": "CRC",
      "full_name": "Canada Research Chairs"
  },
  {
      "id": 114,
      "acronym": "CRC",
      "full_name": "Centre for Responsible Citizenship (SJU)"
  },
  {
      "id": 115,
      "acronym": "CRE-MSD",
      "full_name": "Centre of Research Expertise for the Prevention of Musculoskeletal Disorders"
  },
  {
      "id": 116,
      "acronym": "CRESTech",
      "full_name": "Centre for Research in Earth and Space Technology - now CEET (OCE)"
  },
  {
      "id": 117,
      "acronym": "CRG",
      "full_name": "Civics Research Group"
  },
  {
      "id": 118,
      "acronym": "CS",
      "full_name": "Computer Science"
  },
  {
      "id": 119,
      "acronym": "CSC",
      "full_name": "Co-op Students' Council"
  },
  {
      "id": 120,
      "acronym": "CSC",
      "full_name": "Computer Science Club"
  },
  {
      "id": 121,
      "acronym": "CSCF",
      "full_name": "Computer Science Computing Facility"
  },
  {
      "id": 122,
      "acronym": "CSE",
      "full_name": "Centre for Sight Enhancement"
  },
  {
      "id": 123,
      "acronym": "CSG",
      "full_name": "Computer Systems Group"
  },
  {
      "id": 124,
      "acronym": "CSRGC",
      "full_name": "Centre for the Study on Rapid Global Change"
  },
  {
      "id": 125,
      "acronym": "CSSBI",
      "full_name": "Canadian Sheet Steel Building Institute"
  },
  {
      "id": 126,
      "acronym": "CSTV",
      "full_name": "Centre for Society, Technology and Values"
  },
  {
      "id": 127,
      "acronym": "CTE",
      "full_name": "Centre for Teaching Excellence"
  },
  {
      "id": 128,
      "acronym": "CTN",
      "full_name": "Centre for Theoretical Neuroscience"
  },
  {
      "id": 129,
      "acronym": "CURA",
      "full_name": "Community-University Research Alliances (federal)"
  },
  {
      "id": 130,
      "acronym": "CUT",
      "full_name": "Certificate in University Teaching"
  },
  {
      "id": 131,
      "acronym": "CWC",
      "full_name": "Centre for Wireless Communication"
  },
  {
      "id": 132,
      "acronym": "CWN",
      "full_name": "Canadian Water Network (NCE)"
  },
  {
      "id": 133,
      "acronym": "CWS",
      "full_name": "Community and World Service"
  },
  {
      "id": 134,
      "acronym": "DAC",
      "full_name": "Digital Arts Communication"
  },
  {
      "id": 135,
      "acronym": "DASL",
      "full_name": "Design Analysis and Simulation Laboratory"
  },
  {
      "id": 136,
      "acronym": "DC",
      "full_name": "Deans' Council"
  },
  {
      "id": 137,
      "acronym": "DTA",
      "full_name": "Distinguished Teacher Award"
  },
  {
      "id": 138,
      "acronym": "DTRS",
      "full_name": "Distinguished Teaching by a Registered Student Award"
  },
  {
      "id": 140,
      "acronym": "E Co-op",
      "full_name": "Enterprise Co-op"
  },
  {
      "id": 139,
      "acronym": "E&CE",
      "full_name": "Electrical and Computer Engineering"
  },
  {
      "id": 141,
      "acronym": "EC",
      "full_name": "Executive Council"
  },
  {
      "id": 142,
      "acronym": "ECE",
      "full_name": "Electrical and Computer Engineering"
  },
  {
      "id": 143,
      "acronym": "ECEC",
      "full_name": "Early Childhood Education Centre"
  },
  {
      "id": 144,
      "acronym": "EGFD",
      "full_name": "Environmental and Geophysical Fluid Dynamics group"
  },
  {
      "id": 145,
      "acronym": "ELAS",
      "full_name": "English Language for Academic Studies"
  },
  {
      "id": 146,
      "acronym": "ELPE",
      "full_name": "English Language Proficiency Exam"
  },
  {
      "id": 147,
      "acronym": "ELPP",
      "full_name": "English Language Proficiency Program"
  },
  {
      "id": 148,
      "acronym": "EngSoc",
      "full_name": "Engineering Society"
  },
  {
      "id": 149,
      "acronym": "EP3",
      "full_name": "Education Program for Photonics Professionals"
  },
  {
      "id": 150,
      "acronym": "EPHIP",
      "full_name": "Education Program for Health Informatics Professionals"
  },
  {
      "id": 151,
      "acronym": "ER",
      "full_name": "External Relations"
  },
  {
      "id": 152,
      "acronym": "ERA",
      "full_name": "Early Researcher Awards"
  },
  {
      "id": 153,
      "acronym": "ERA",
      "full_name": "Centre for Ecosystem Resilience and Adaptation"
  },
  {
      "id": 154,
      "acronym": "ERCnet",
      "full_name": "Engineering Remote Classroom network"
  },
  {
      "id": 155,
      "acronym": "ERG",
      "full_name": "Ecological Restoration Group"
  },
  {
      "id": 156,
      "acronym": "ERS",
      "full_name": "Environment and Resource Studies"
  },
  {
      "id": 157,
      "acronym": "ESCS",
      "full_name": "Ergonomics and Safety Consulting Services"
  },
  {
      "id": 158,
      "acronym": "ESGA",
      "full_name": "Earth Sciences Graduate Association"
  },
  {
      "id": 159,
      "acronym": "ESL",
      "full_name": "English as a second language"
  },
  {
      "id": 160,
      "acronym": "ESQ",
      "full_name": "Engineering Science Quest"
  },
  {
      "id": 161,
      "acronym": "ESS",
      "full_name": "Environment Students Society"
  },
  {
      "id": 162,
      "acronym": "EWB",
      "full_name": "Engineers Without Borders"
  },
  {
      "id": 163,
      "acronym": "EWO",
      "full_name": "Education at Work Ontario"
  },
  {
      "id": 164,
      "acronym": "FANS",
      "full_name": "Funding Agencies & Non-profit Sponsors (Office of Research)"
  },
  {
      "id": 165,
      "acronym": "FASS",
      "full_name": "University of Waterloo Faculty Association"
  },
  {
      "id": 166,
      "acronym": "FAUW",
      "full_name": "University of Waterloo Faculty Association"
  },
  {
      "id": 167,
      "acronym": "Feds",
      "full_name": "Federation of Students"
  },
  {
      "id": 168,
      "acronym": "FLEX",
      "full_name": "Lab Flexible Learning Experience Laboratory"
  },
  {
      "id": 169,
      "acronym": "FOC",
      "full_name": "Federation Orientation Committee"
  },
  {
      "id": 170,
      "acronym": "FRSC",
      "full_name": "Fellow of Royal Society of Canada"
  },
  {
      "id": 171,
      "acronym": "FSF",
      "full_name": "Faculty of Science Foundation"
  },
  {
      "id": 172,
      "acronym": "FSO",
      "full_name": "Financial Services Office (now Finance)"
  },
  {
      "id": 173,
      "acronym": "FTE",
      "full_name": "full-time equivalent"
  },
  {
      "id": 174,
      "acronym": "G2N",
      "full_name": "Giga-to-Nanoelectronics Group"
  },
  {
      "id": 175,
      "acronym": "GEOIDE",
      "full_name": "Geomatics for Informed Decisions (NCE)"
  },
  {
      "id": 176,
      "acronym": "GERI",
      "full_name": "Green Energy Research Institute (now WISE)"
  },
  {
      "id": 177,
      "acronym": "GGRC",
      "full_name": "Grants and Government Research Contracts (now FANS in Office of Research)"
  },
  {
      "id": 178,
      "acronym": "GLOW",
      "full_name": "Gays and Lesbians of Waterloo"
  },
  {
      "id": 179,
      "acronym": "GRAND",
      "full_name": "Graphics, Animation and New Media Canada (NCE)"
  },
  {
      "id": 180,
      "acronym": "GSA",
      "full_name": "Graduate Student Association"
  },
  {
      "id": 182,
      "acronym": "GSPA",
      "full_name": "Graduate Studies and Post-Doctoral Affairs (replaced GSO)"
  },
  {
      "id": 183,
      "acronym": "GWC2",
      "full_name": "Guelph/Waterloo Centre for Graduate Work in Chemistry and Biochemistry"
  },
  {
      "id": 184,
      "acronym": "GWPI",
      "full_name": "Guelph-Waterloo Physics Institute"
  },
  {
      "id": 185,
      "acronym": "HMLVD",
      "full_name": "HeadMounted Low Vision Devices (clinic)"
  },
  {
      "id": 186,
      "acronym": "HR",
      "full_name": "Human Resources"
  },
  {
      "id": 187,
      "acronym": "HRC",
      "full_name": "Heritage Resources Centre"
  },
  {
      "id": 188,
      "acronym": "HRM",
      "full_name": "Human Resources Management Program"
  },
  {
      "id": 189,
      "acronym": "HRMS",
      "full_name": "Human Resources Management System"
  },
  {
      "id": 190,
      "acronym": "HSG",
      "full_name": "Health Studies and Gerontology"
  },
  {
      "id": 191,
      "acronym": "HSR",
      "full_name": "Health and Safety Representative"
  },
  {
      "id": 192,
      "acronym": "IAP",
      "full_name": "Institutional Analysis & Planning"
  },
  {
      "id": 193,
      "acronym": "IBMB",
      "full_name": "Institute of Biochemistry and Molecular Biology"
  },
  {
      "id": 194,
      "acronym": "IC3",
      "full_name": "Interdisciplinary Centre on Climate Change"
  },
  {
      "id": 195,
      "acronym": "ICR",
      "full_name": "Institute for Computer Research"
  },
  {
      "id": 196,
      "acronym": "ICVDM",
      "full_name": "Integrated Centre for Visualization, Design and Manufacturing (ceased)"
  },
  {
      "id": 197,
      "acronym": "IEEE",
      "full_name": "Institute of Electrical and Electronics Engineers"
  },
  {
      "id": 198,
      "acronym": "IELTS",
      "full_name": "International English Language Testing System"
  },
  {
      "id": 199,
      "acronym": "IGR",
      "full_name": "Institute for Groundwater Research (now WIGR)"
  },
  {
      "id": 200,
      "acronym": "IIPR",
      "full_name": "Institute for Insurance and Pension Research"
  },
  {
      "id": 201,
      "acronym": "IIQP",
      "full_name": "Institute for Improvement in Quality and Productivity (now BISRG)"
  },
  {
      "id": 202,
      "acronym": "IIR",
      "full_name": "Institute for Innovation Research"
  },
  {
      "id": 203,
      "acronym": "INFORMS",
      "full_name": "Institute for Operations Research and the Management Sciences"
  },
  {
      "id": 204,
      "acronym": "IOBP",
      "full_name": "International Optometric Bridging Program"
  },
  {
      "id": 205,
      "acronym": "IP",
      "full_name": "intellectual property"
  },
  {
      "id": 206,
      "acronym": "IPACS",
      "full_name": "Institute of Peace and Conflict Studies"
  },
  {
      "id": 207,
      "acronym": "IPMG",
      "full_name": "Intellectual Property Management Group (now WatCO)"
  },
  {
      "id": 208,
      "acronym": "IPO",
      "full_name": "International Programs Office"
  },
  {
      "id": 209,
      "acronym": "IPR",
      "full_name": "Institute for Polymer Research"
  },
  {
      "id": 210,
      "acronym": "IQC",
      "full_name": "Institute for Quantum Computing"
  },
  {
      "id": 211,
      "acronym": "IQFI",
      "full_name": "Institute for Quantitative Finance and Insurance (now WatRISQ)"
  },
  {
      "id": 212,
      "acronym": "IRC",
      "full_name": "industrial research chair"
  },
  {
      "id": 213,
      "acronym": "IRIS",
      "full_name": "Institute for Robotics and Intelligent Systems (NCE)"
  },
  {
      "id": 214,
      "acronym": "IRR",
      "full_name": "Institute for Risk Research"
  },
  {
      "id": 215,
      "acronym": "ISIS",
      "full_name": "Intelligent Sensing for Innovative Structures - ceased (NCE)"
  },
  {
      "id": 216,
      "acronym": "ISO",
      "full_name": "International Student Office"
  },
  {
      "id": 217,
      "acronym": "IST",
      "full_name": "Information Systems and Technology"
  },
  {
      "id": 218,
      "acronym": "ITC",
      "full_name": "International Tobacco Control Policy Evaluation Project"
  },
  {
      "id": 219,
      "acronym": "ITMS",
      "full_name": "Instructional Technologies and Multimedia Services (was AV Centre)"
  },
  {
      "id": 220,
      "acronym": "ITS",
      "full_name": "International Trade Specialization"
  },
  {
      "id": 221,
      "acronym": "JHSC",
      "full_name": "Joint Health and Safety Committee"
  },
  {
      "id": 222,
      "acronym": "JIF",
      "full_name": "job information form"
  },
  {
      "id": 223,
      "acronym": "LED",
      "full_name": "light-emitting diode"
  },
  {
      "id": 224,
      "acronym": "LED",
      "full_name": "Local Economic Development"
  },
  {
      "id": 225,
      "acronym": "LEED",
      "full_name": "Leadership in Energy and Environmental Design"
  },
  {
      "id": 226,
      "acronym": "LIF",
      "full_name": "Learning Initiatives Fund"
  },
  {
      "id": 227,
      "acronym": "LIFT",
      "full_name": "Leadership in Faculty Teaching awards"
  },
  {
      "id": 228,
      "acronym": "LRI",
      "full_name": "Office of Learning Resources and Innovation (now CTE)"
  },
  {
      "id": 229,
      "acronym": "LRT",
      "full_name": "Light Rail Transit. ION is the name of the light rail system in Kitchener-Waterloo"
  },
  {
      "id": 230,
      "acronym": "LT3",
      "full_name": "Centre for Learning and Teaching Through Technology (now CTE)"
  },
  {
      "id": 231,
      "acronym": "MAD",
      "full_name": "Mapping, Analysis and Design"
  },
  {
      "id": 232,
      "acronym": "MAREP",
      "full_name": "Murray Alzheimer Research and Education Program"
  },
  {
      "id": 233,
      "acronym": "MARGOT",
      "full_name": "Moyen Age et Renaissance: Groupe de recherche - Ordinateurs et Textes"
  },
  {
      "id": 234,
      "acronym": "MathSoc",
      "full_name": "Mathematics Society"
  },
  {
      "id": 235,
      "acronym": "MCRC",
      "full_name": "Mid-size City Research Centre"
  },
  {
      "id": 236,
      "acronym": "MEF",
      "full_name": "Mathematics Endowment Fund"
  },
  {
      "id": 237,
      "acronym": "MELAB",
      "full_name": "Michigan English Language Assessment Battery"
  },
  {
      "id": 238,
      "acronym": "MEMS",
      "full_name": "micro-electromechanical systems"
  },
  {
      "id": 239,
      "acronym": "MET",
      "full_name": "Ministry of Education and Training (now MTCU)"
  },
  {
      "id": 240,
      "acronym": "MFCF",
      "full_name": "Mathematics Faculty Computing Facility"
  },
  {
      "id": 241,
      "acronym": "MIAMI",
      "full_name": "Medical Instrument Analysis and Machine Intelligence"
  },
  {
      "id": 242,
      "acronym": "Micronet",
      "full_name": "Microelectronic Devices, Circuits and Systems - ceased (NCE)"
  },
  {
      "id": 243,
      "acronym": "MITACS",
      "full_name": "Mathematics of Information Technology and Complex Systems (NCE)"
  },
  {
      "id": 244,
      "acronym": "MMO",
      "full_name": "Materials and Manufacturing Ontario - now CMM (OCE)"
  },
  {
      "id": 245,
      "acronym": "MRC",
      "full_name": "Medical Research Council of Canada"
  },
  {
      "id": 246,
      "acronym": "MRG",
      "full_name": "Motion Research Group"
  },
  {
      "id": 248,
      "acronym": "MSI",
      "full_name": "Marketing and Strategic Initiatives (part of University Relations)"
  },
  {
      "id": 249,
      "acronym": "MTCU",
      "full_name": "Ministry of Training, Colleges and Universities"
  },
  {
      "id": 250,
      "acronym": "MUR",
      "full_name": "Marketing and Undergraduate Recruitment"
  },
  {
      "id": 251,
      "acronym": "MVS",
      "full_name": "Museum of Vision Science"
  },
  {
      "id": 252,
      "acronym": "NARP",
      "full_name": "Neurobehavioural Assessment and Rehabilitation Program"
  },
  {
      "id": 253,
      "acronym": "NASA",
      "full_name": "National Aeronautics and Space Administration (U.S.)"
  },
  {
      "id": 254,
      "acronym": "NCAR",
      "full_name": "National Center for Atmospheric Research (U.S.)"
  },
  {
      "id": 255,
      "acronym": "NCE",
      "full_name": "Networks of Centres of Excellence (federal)"
  },
  {
      "id": 256,
      "acronym": "NEMS",
      "full_name": "nano-electromechanical systems"
  },
  {
      "id": 257,
      "acronym": "NERAM",
      "full_name": "Network for Environmental Risk Assessment and Management"
  },
  {
      "id": 258,
      "acronym": "NIH",
      "full_name": "National Institutes of Health (U.S.)"
  },
  {
      "id": 259,
      "acronym": "NMR",
      "full_name": "nuclear magnetic resonance"
  },
  {
      "id": 260,
      "acronym": "NNI",
      "full_name": "Nortel Networks Institute for Advanced Information Technology"
  },
  {
      "id": 261,
      "acronym": "NRC",
      "full_name": "National Research Council of Canada"
  },
  {
      "id": 262,
      "acronym": "NSERC",
      "full_name": "Natural Sciences and Engineering Research Council"
  },
  {
      "id": 263,
      "acronym": "NSF",
      "full_name": "National Science Foundation (U.S.)"
  },
  {
      "id": 264,
      "acronym": "NSSE",
      "full_name": "National Survey of Student Engagement"
  },
  {
      "id": 265,
      "acronym": "OAC",
      "full_name": "Ontario Academic Credit"
  },
  {
      "id": 266,
      "acronym": "OCE",
      "full_name": "Ontario Centres of Excellence"
  },
  {
      "id": 267,
      "acronym": "OCGS",
      "full_name": "Ontario Council on Graduate Studies"
  },
  {
      "id": 268,
      "acronym": "OCUA",
      "full_name": "Ontario Council on University Affairs"
  },
  {
      "id": 269,
      "acronym": "ODAA",
      "full_name": "Office of Development and Alumni Affairs (now Advancement)"
  },
  {
      "id": 270,
      "acronym": "OEC",
      "full_name": "Ontario Engineering Competition"
  },
  {
      "id": 271,
      "acronym": "OED",
      "full_name": "Centre for the New Oxford English Dictionary and Text Research"
  },
  {
      "id": 272,
      "acronym": "OGL/EML",
      "full_name": "Organic Geochemistry and Environmental Microbiology Lab"
  },
  {
      "id": 273,
      "acronym": "OGS",
      "full_name": "Ontario Graduate Scholarships"
  },
  {
      "id": 274,
      "acronym": "OGSST",
      "full_name": "Ontario Graduate Scholarships in Science and Technology"
  },
  {
      "id": 275,
      "acronym": "OHSA",
      "full_name": "Occupational Health and Safety Act (Ontario)"
  },
  {
      "id": 276,
      "acronym": "OIT",
      "full_name": "Ontario Innovation Trust (now ORF-RI)"
  },
  {
      "id": 277,
      "acronym": "OLRC",
      "full_name": "Optometry Learning Resource Centre (now WLRC)"
  },
  {
      "id": 278,
      "acronym": "OPD",
      "full_name": "Office for Persons with Disabilities"
  },
  {
      "id": 279,
      "acronym": "ORC",
      "full_name": "Ontario Research Chairs"
  },
  {
      "id": 280,
      "acronym": "ORDCF",
      "full_name": "Ontario Research and Development Challenge Fund (now ORF-RE)"
  },
  {
      "id": 281,
      "acronym": "ORE",
      "full_name": "Office of Research Ethics"
  },
  {
      "id": 282,
      "acronym": "ORF",
      "full_name": "Ontario Research Fund"
  },
  {
      "id": 283,
      "acronym": "ORF-RE",
      "full_name": "Ontario Research Fund - Research Excellence"
  },
  {
      "id": 284,
      "acronym": "ORF-RI",
      "full_name": "Ontario Research Fund - Research Infrastructure"
  },
  {
      "id": 285,
      "acronym": "ORTC",
      "full_name": "Ontario Rehabilitation Technology Consortium"
  },
  {
      "id": 286,
      "acronym": "OSAP",
      "full_name": "Ontario Student Assistance Program"
  },
  {
      "id": 287,
      "acronym": "OSC",
      "full_name": "Ontario Synchrotron Consortium"
  },
  {
      "id": 288,
      "acronym": "OSS",
      "full_name": "Ontario Secondary School"
  },
  {
      "id": 289,
      "acronym": "OTSS",
      "full_name": "Ontario Trust for Student Support"
  },
  {
      "id": 290,
      "acronym": "OUAC",
      "full_name": "Ontario Universities' Application Centre"
  },
  {
      "id": 291,
      "acronym": "OUF",
      "full_name": "Ontario Universities' Fair"
  },

  {
      "id": 294,
      "acronym": "PAC-SMH",
      "full_name": "President's Advisory Committee on Student Mental Health"
  },
  {
      "id": 292,
      "acronym": "PACS",
      "full_name": "Peace and Conflict Studies"
  },
  {
      "id": 293,
      "acronym": "PACSC",
      "full_name": "Provost's Advisory Committee on Staff Compensation"
  },
  {
      "id": 295,
      "acronym": "PAMI",
      "full_name": "Pattern Analysis and Machine Intelligence Group"
  },
  {
      "id": 296,
      "acronym": "PD",
      "full_name": "professional development"
  },
  {
      "id": 297,
      "acronym": "PDEng",
      "full_name": "Professional Development for Engineering Students (now WatPD - Engineering)"
  },
  {
      "id": 298,
      "acronym": "PEO",
      "full_name": "Professional Engineers Ontario"
  },
  {
      "id": 299,
      "acronym": "PHR",
      "full_name": "Population Health Research Group"
  },
  {
      "id": 300,
      "acronym": "PI",
      "full_name": "Perimeter Institute for Theoretical Physics"
  },
  {
      "id": 301,
      "acronym": "PLG",
      "full_name": "Programming Languages Group"
  },
  {
      "id": 302,
      "acronym": "PMRI",
      "full_name": "Porous Media Research Institute (ceased)"
  },
  {
      "id": 303,
      "acronym": "PREA",
      "full_name": "Premier's Research Excellence Awards (now ERA)"
  },
  {
      "id": 304,
      "acronym": "PRFO",
      "full_name": "Parks Research Forum of Ontario (now CASIOPA)"
  },
  {
      "id": 305,
      "acronym": "PRO",
      "full_name": "Photonics Research Ontario - now CP (OCE)"
  },
  {
      "id": 306,
      "acronym": "PSSA",
      "full_name": "Political Science Student Association"
  },
  {
      "id": 307,
      "acronym": "QNC",
      "full_name": "Mike & Ophelia Lazaridis Quantum-Nano Centre"
  },
  {
      "id": 308,
      "acronym": "QSI",
      "full_name": "Quaternary Sciences Institute (ceased)"
  },
  {
      "id": 309,
      "acronym": "R&D",
      "full_name": "research and development"
  },
  {
      "id": 310,
      "acronym": "RAIC",
      "full_name": "Royal Architecture Institute of Canada"
  },
  {
      "id": 311,
      "acronym": "REEP",
      "full_name": "Residential Energy Efficiency Project"
  },
  {
      "id": 312,
      "acronym": "RF",
      "full_name": "radio frequency"
  },
  {
      "id": 313,
      "acronym": "RIA",
      "full_name": "Schlegel-University of Waterloo Research Institute for Aging"
  },
  {
      "id": 314,
      "acronym": "RIM",
      "full_name": "Research In Motion (now BlackBerry)"
  },
  {
      "id": 315,
      "acronym": "RLS",
      "full_name": "Recreation and Leisure Studies"
  },
  {
      "id": 316,
      "acronym": "RPW",
      "full_name": "Rhetoric and Professional Writing"
  },
  {
      "id": 317,
      "acronym": "SAC",
      "full_name": "Students Advising Co-op (ceased)"
  },
  {
      "id": 318,
      "acronym": "SAF",
      "full_name": "School of Accounting and Finance"
  },
  {
      "id": 319,
      "acronym": "SBSA",
      "full_name": "Science and Business Students Association"
  },
  {
      "id": 320,
      "acronym": "SCB",
      "full_name": "Students Council of Biotechnology"
  },
  {
      "id": 321,
      "acronym": "SCC",
      "full_name": "Student Catholic Community"
  },
  {
      "id": 322,
      "acronym": "SciSoc",
      "full_name": "Science Society"
  },
  {
      "id": 323,
      "acronym": "SCN",
      "full_name": "Stem Cell Network (NCE)"
  },
  {
      "id": 324,
      "acronym": "SCRUBS",
      "full_name": "Science C'tee of Revolutionary Undergraduate Business Students (now SBSA)"
  },
  {
      "id": 325,
      "acronym": "SCUBA 2",
      "full_name": "Submillimetre Common-User Bolometer Array 2"
  },
  {
      "id": 326,
      "acronym": "SD",
      "full_name": "Systems Design"
  },
  {
      "id": 327,
      "acronym": "SDS",
      "full_name": "Social Development Studies"
  },
  {
      "id": 328,
      "acronym": "SEED",
      "full_name": "School of Environment, Enterprise and Development"
  },
  {
      "id": 329,
      "acronym": "SEEPAC",
      "full_name": "Sight Enhancement Equipment Pool and Assessment Centre"
  },
  {
      "id": 330,
      "acronym": "SERP",
      "full_name": "Special Early Retirement Program"
  },
  {
      "id": 331,
      "acronym": "SFF",
      "full_name": "Sandford Fleming Foundation"
  },
  {
      "id": 332,
      "acronym": "SFM",
      "full_name": "Sustainable Forest Management Network (NCE)"
  },
  {
      "id": 333,
      "acronym": "SGRC",
      "full_name": "Senate Graduate and Research Council"
  },
  {
      "id": 334,
      "acronym": "SHARCNET",
      "full_name": "Shared Hierarchical Academic Research Computing Network"
  },
  {
      "id": 335,
      "acronym": "SiDIC",
      "full_name": "Silicon Devices and Integrated Circuits Group"
  },
  {
      "id": 336,
      "acronym": "SIN",
      "full_name": "Sir Isaac Newton (exam)"
  },
  {
      "id": 337,
      "acronym": "SISP",
      "full_name": "Student Information Systems Project"
  },
  {
      "id": 338,
      "acronym": "SJCCE",
      "full_name": "St. Jerome's Centre for Catholic Experience (now CRC)"
  },
  {
      "id": 339,
      "acronym": "SJU",
      "full_name": "St. Jerome's University"
  },
  {
      "id": 340,
      "acronym": "SLC",
      "full_name": "Student Life Centre"
  },
  {
      "id": 341,
      "acronym": "SLEF",
      "full_name": "Student Life Endowment Fund"
  },
  {
      "id": 342,
      "acronym": "SMF",
      "full_name": "Sexuality, Marriage, and Family Studies"
  },
  {
      "id": 343,
      "acronym": "SOA",
      "full_name": "School of Accountancy (now School of Accounting and Finance)"
  },
  {
      "id": 344,
      "acronym": "SOCC",
      "full_name": "State of the Canadian Cryosphere"
  },
  {
      "id": 345,
      "acronym": "SOTU",
      "full_name": "Informal name of the State of the University Report. Used internally only."
  },
  {
      "id": 346,
      "acronym": "SOTY",
      "full_name": "Co-op Student of the Year Award"
  },
  {
      "id": 347,
      "acronym": "SRC",
      "full_name": "Survey Research Centre"
  },
  {
      "id": 348,
      "acronym": "SSHRC",
      "full_name": "Social Sciences and Humanities Research Council"
  },
  {
      "id": 349,
      "acronym": "SSND",
      "full_name": "School Sisters of Notre Dame"
  },
  {
      "id": 350,
      "acronym": "SSO",
      "full_name": "Student Success Office"
  },
  {
      "id": 351,
      "acronym": "STEC",
      "full_name": "Solar Thermal Engineering Centre - ceased"
  },
  {
      "id": 352,
      "acronym": "STEP",
      "full_name": "Sustainable (formerly Solar) Technology Education Project"
  },
  {
      "id": 353,
      "acronym": "STS",
      "full_name": "Science Technical Services"
  },
  {
      "id": 354,
      "acronym": "SWAG",
      "full_name": "Software Architecture Group"
  },
  {
      "id": 355,
      "acronym": "SWEN",
      "full_name": "Software Engineering Group"
  },
  {
      "id": 356,
      "acronym": "SWORDC",
      "full_name": "Southwestern Ontario Research Data Centre"
  },
  {
      "id": 357,
      "acronym": "SyDE",
      "full_name": "Systems Design Engineering"
  },
  {
      "id": 358,
      "acronym": "T&D",
      "full_name": "training and development"
  },
  {
      "id": 359,
      "acronym": "TASSEP",
      "full_name": "TransAtlantic Science Student Exchange Program"
  },
  {
      "id": 360,
      "acronym": "TBRG",
      "full_name": "Teaching-Based Research Group"
  },
  {
      "id": 361,
      "acronym": "TLA",
      "full_name": "three-letter acronym"
  },
  {
      "id": 362,
      "acronym": "TOEFL",
      "full_name": "Test of English as a Foreign Language"
  },
  {
      "id": 363,
      "acronym": "TRACE",
      "full_name": "Teaching Resources and Continuing Education (now CTE)"
  },
  {
      "id": 364,
      "acronym": "TTLO",
      "full_name": "Technology Transfer and Licensing Office (now WatCO)"
  },
  {
      "id": 365,
      "acronym": "TUG",
      "full_name": "TriUniversity Group of Libraries"
  },
  {
      "id": 366,
      "acronym": "UAE",
      "full_name": "United Arab Emirates (use U.A.E.)"
  },
  {
      "id": 367,
      "acronym": "UCC",
      "full_name": "University Catholic Community"
  },
  {
      "id": 368,
      "acronym": "UCIST",
      "full_name": "University Committee on Information Systems and Technology"
  },
  {
      "id": 369,
      "acronym": "UFA",
      "full_name": "University Faculty Awards (NSERC)"
  },
  {
      "id": 370,
      "acronym": "UFE",
      "full_name": "Uniform Evaluation"
  },
  {
      "id": 371,
      "acronym": "UMRG",
      "full_name": "Uncertainty Management Research Group"
  },
  {
      "id": 372,
      "acronym": "UNENE",
      "full_name": "University Network of Excellence in Nuclear Engineering"
  },
  {
      "id": 373,
      "acronym": "URL",
      "full_name": "universal (or uniform) resource locator"
  },
  {
      "id": 374,
      "acronym": "USRA",
      "full_name": "Undergraduate Student Research Awards (NSERC)"
  },
  {
      "id": 375,
      "acronym": "UW-ACE",
      "full_name": "University of Waterloo Angel Course Environment (was replaced by LEARN)"
  },
  {
      "id": 382,
      "acronym": "UW-URI",
      "full_name": "University of Waterloo - Undergraduate Research Internship program"
  },
  {
      "id": 377,
      "acronym": "UWAEG",
      "full_name": "University of Waterloo Aquatic Ecology Group"
  },
  {
      "id": 376,
      "acronym": "UWAFT",
      "full_name": "University of Waterloo Alternative Fuels Team"
  },
  {
      "id": 378,
      "acronym": "UWOSS",
      "full_name": "University of Waterloo Optometry Student Society"
  },
  {
      "id": 379,
      "acronym": "UWRA",
      "full_name": "University of Waterloo Retirees Association"
  },
  {
      "id": 380,
      "acronym": "UWSA",
      "full_name": "University of Waterloo Staff Association"
  },
  {
      "id": 381,
      "acronym": "UWSP",
      "full_name": "University of Waterloo Sustainability Project"
  },
  {
      "id": 383,
      "acronym": "WAC",
      "full_name": "Waterloo Advisory Council"
  },
  {
      "id": 384,
      "acronym": "WAC",
      "full_name": "Web Advisory Committee"
  },
  {
      "id": 385,
      "acronym": "WACE",
      "full_name": "World Association for Co-operative Education"
  },
  {
      "id": 386,
      "acronym": "WARG",
      "full_name": "Waterloo Aerial Robotics Group"
  },
  {
      "id": 387,
      "acronym": "WASA",
      "full_name": "Waterloo Architecture Student Association"
  },
  {
      "id": 388,
      "acronym": "WatAIR",
      "full_name": "Waterloo Atmosphere-land Interactions Research group"
  },
  {
      "id": 389,
      "acronym": "WatCACE",
      "full_name": "Waterloo Centre for the Advancement of Co-operative Education"
  },
  {
      "id": 390,
      "acronym": "WatCAR",
      "full_name": "Waterloo Centre for Automotive Research"
  },
  {
      "id": 391,
      "acronym": "WatCo",
      "full_name": "Waterloo Commercialization Office"
  },
  {
      "id": 393,
      "acronym": "WATER Lab",
      "full_name": "WATerloo Environmental change Research Lab"
  },
  {
      "id": 392,
      "acronym": "WatForm",
      "full_name": "Waterloo Formal Methods research group"
  },
  {
      "id": 394,
      "acronym": "WATLab",
      "full_name": "Waterloo Advanced Technology Lab"
  },
  {
      "id": 395,
      "acronym": "WatLEO",
      "full_name": "Waterloo Laboratory for Earth Observations"
  },
  {
      "id": 396,
      "acronym": "WATMIMS",
      "full_name": "Waterloo Management of Integrated Manufacturing Systems group"
  },
  {
      "id": 397,
      "acronym": "WatPD",
      "full_name": "Waterloo Professional Development program"
  },
  {
      "id": 398,
      "acronym": "WatRISQ",
      "full_name": "Waterloo Research Institute in Insurance, Securities and Quantitative Finance"
  },
  {
      "id": 399,
      "acronym": "WatSEE",
      "full_name": "Waterloo Sight Enhancement Engineering"
  },
  {
      "id": 400,
      "acronym": "WatSEF",
      "full_name": "Waterloo Science Endowment Fund"
  },
  {
      "id": 401,
      "acronym": "WATSPEC",
      "full_name": "Waterloo Mass Spectrometry Facility"
  },
  {
      "id": 402,
      "acronym": "WCAG",
      "full_name": "Web Content Accessibility Guidelines. Current version is 2.0, but 2.1 will be introducing guidelines specific to mobile."
  },
  {
      "id": 403,
      "acronym": "WCAS",
      "full_name": "Waterloo Centre for Atmospheric Sciences"
  },
  {
      "id": 404,
      "acronym": "WCGR",
      "full_name": "Waterloo Centre for Groundwater Research (now WIGR)"
  },
  {
      "id": 405,
      "acronym": "WCGS",
      "full_name": "Waterloo Centre for German Studies"
  },
  {
      "id": 406,
      "acronym": "WCMS",
      "full_name": "Waterloo Content Management System"
  },
  {
      "id": 407,
      "acronym": "WE",
      "full_name": "Waterloo Engineering"
  },
  {
      "id": 408,
      "acronym": "WEEF",
      "full_name": "Waterloo Engineering Endowment Foundation"
  },
  {
      "id": 409,
      "acronym": "WESEF",
      "full_name": "Waterloo Environment Students Endowment Foundation"
  },
  {
      "id": 410,
      "acronym": "WHMIS",
      "full_name": "Workplace Hazardous Materials Information System"
  },
  {
      "id": 411,
      "acronym": "WICI",
      "full_name": "Waterloo Institute for Complexity and Innovation"
  },
  {
      "id": 412,
      "acronym": "WIGR",
      "full_name": "Waterloo Institute for Groundwater Research"
  },
  {
      "id": 413,
      "acronym": "WIHIR",
      "full_name": "Waterloo Institute for Health Informatics Research"
  },
  {
      "id": 414,
      "acronym": "WIHS",
      "full_name": "Waterloo Institute for Hellenistic Studies"
  },
  {
      "id": 415,
      "acronym": "WIN",
      "full_name": "Waterloo Institute for Nanotechnology"
  },
  {
      "id": 416,
      "acronym": "WISC",
      "full_name": "Waterloo Indigenous Student Centre"
  },
  {
      "id": 417,
      "acronym": "WISE",
      "full_name": "Waterloo Institute for Sustainable Energy"
  },
  {
      "id": 418,
      "acronym": "WISIR",
      "full_name": "Waterloo Institute for Social Innovation and Resilience"
  },
  {
      "id": 419,
      "acronym": "WLRC",
      "full_name": "Witer Learning Resource Centre"
  },
  {
      "id": 420,
      "acronym": "WORC",
      "full_name": "Waterloo Organizational Research and Consulting Group"
  },
  {
      "id": 421,
      "acronym": "WoRK",
      "full_name": "Workflow Research and Knowledge Group"
  },
  {
      "id": 422,
      "acronym": "WPIRG",
      "full_name": "Waterloo Public Interest Research Group"
  },
  {
      "id": 423,
      "acronym": "WPPG",
      "full_name": "Water Policy and Governance Group"
  },
  {
      "id": 424,
      "acronym": "WRAP",
      "full_name": "Waterloo Research in Aging Participant Pool"
  },
  {
      "id": 425,
      "acronym": "WSIB",
      "full_name": "Workplace Safety and Insurance Board (Ontario)"
  }
]

export const data = list.sort((a, b) => a.acronym.localeCompare(b.acronym));