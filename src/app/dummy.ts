const listCourses = [
  {
    id: 1,
    name: "IVF - In Vitro Fertilization",
    description:
      "The most complex fertility treatment, this course will help you do it right the first time.",
    expert: "Cornell, CCRM, +17 more",
    view: 631,
    category: "introductory",
  },
  {
    id: 2,
    name: "Fertility 101",
    description:
      "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing what might be wrong.",
    expert: "Cornell, Johns Hopkins, +16 more",
    view: 19,
    category: "introductory",
  },
  {
    id: 3,
    name: "Mental Health & Fertility",
    description:
      "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they relate to fertility & fertility outcomes. Studies on relaxation techniques & SSRI antidepressants. Tools for managing relationships with your partner, family, friends, & co-workers",
    expert: "Cornell, Harvard, +3 more",
    view: 8,
    category: "introductory",
  },
  {
    id: 4,
    name: "PCOS-Polycystic Ovary Syndrome",
    description:
      "A comprehensive overview of everything you need to know about polycystic ovary syndrome (PCOS) from diagnosis to treatment as well as expert-guided lifestyle and diet changes to help you live your best life with this condition.",
    expert: "Columbia, UCLA, +10 more",
    category: "introductory",
  },
  {
    id: 5,
    name: "Lifestyle Choices, From Diet To Supplements",
    description:
      "All the data on lifestvle choices and their impact on fertility, including decisions around diet, exercise, drinking alcohol, caffeine consumption, smoking, recreational drugs, and using supplements.",
    expert: "Yale, UCLA, +10 more",
    view: 86,
    category: "introductory",
  },
  {
    id: 6,
    name: "IUI or 'Artificial Insemination' ",
    description:
      "Data on IUl success rates depending on who you are, what it costs, the risks, and how to decide between doing IUl and IVF.",
    expert: "Yale, Northwestern, +15 more",
    view: 531,
    category: "introductory",
  },
  {
    id: 7,
    name: "Miscarriage",
    description:
      "How to navigate miscarriage & ectopic pregnancy. Diagnostics; beta hG; surgical vs. medical vs. natural options: genetic testing; and emotionally coping.",
    expert: "Johns Hopkins, Columbia, +7 more",
    view: 30,
    category: "introductory",
  },
  {
    id: 8,
    name: "Egg Freezing",
    description:
      "Preparing you to be a confident self-advocate as you make decisions around fertility preservation.",
    expert: "Johns Hopkins, Cornell, +14 more",
    view: 213,
    category: "introductory",
  },
  {
    id: 9,
    name: "Adoption",
    description:
      "This course covers the crucial steps of domestic infant adoption, including the home study, locating expectant parents, validating the social medical history form, as well as preparing the hospital plan and post-adoption steps. We cover the total costs, timelines as well as crucial factors post-adoption.",
    category: "advanced",
  },
  {
    id: 10,
    name: "Foster Parenting 101",
    description:
      "In this course, we'll cover the steps to starting the foster parenting process, how to help children who've suffered emotional and physical trauma, how to navigate transracial challenges, what the process looks like for single and LGBTQ individuals. and the process of adopting through the foster care system.",
    category: "advanced",
  },
  {
    id: 11,
    name: "Workplace Guide to Fertility: For Colleagues",
    description:
      "This workplace guide is meant for colleagues to better understand what their co-workers or employees are going through when they need to undergo fertility treatments. Includes sensitivity training on what to say and not to say when a coworker is going through infertility or needs fertility treatments to build their family",
    expert: "Harvard, + 8 more",
    category: "advanced",
  },
  {
    id: 12,
    name: "Managing Fertility Treatment & Work",
    description:
      "We share ways to navizate & balance work and career with infertility or fertility treatments. Hear from other patients about things that have worked for them. Understand more about the impacts of stress on fertility, and the ways that fertility logistics will impact work, and vise versa.",
    expert: "Harvard, Johns Hopkins, +5 more",
    category: "advanced",
  },
  {
    id: 13,
    name: "Embryo Transfer",
    description:
      "We cover how many embryos to transfer, medicated vs. unmedicated cycles, fresh vs. frozen, and the do's and don'ts on transfer day itself.",
    expert: "Harvard, Columbia, +9 more",
    view: 145,
    category: "population",
  },
  {
    id: 14,
    name: "Low Testosterone inMen",
    description:
      "This course explores testosterone's role in male health, addressing causes and symptoms of low levels. Learn about diagnosis, treatments, and lifestyle interventions aimed at optimal well-being.",
    expert: "Cornell, +1 more",
    category: "population",
  },
];

const popularLessons = [
  {
    category: "IVF - IN VITRO FERTILIZATION",
    name: "The Steps and Decisions In The IVF Process",
  },
  {
    category: "FERTILITY 101",
    name: "Diagnosing Fertility Issues & Getting Help",
  },
  {
    category: "MENTAL HEALTH & FERTILITY",
    name: "Relationship With Your Partner",
  },
  {
    category: "LIFESTYLE CHOICES, FROM DIET TO SUPPLEMENTS",
    name: "Smoking, Caffeine, Alcohol: Impacts On Fertility",
  },
  {
    category: "IUI OR 'ARTIFICIAL INSEMINATION'",
    name: "How Well IUI Works By Patient Type",
  },
  {
    category: "MISCARRIAGE",
    name: "Natural vs. Medical vs. Surgical Miscarriage Management?",
  },
];

const quickReads = [
  {
    category: "FEATURED CONTENT",
    name: "The Guttmacher Institute: A Reproductive Health Policy Resource",
  },
  {
    category: "FERTILITYIG DATA",
    name: "Sample Global Costs",
  },
  {
    category: "MEDICAL RESEARCH",
    name: "Endometrial Receptivity Testing",
  },
  {
    category: "FEATURED CONTENT",
    name: "Fertility Treatments After Roe & Dobbs + Alabama Supreme Court Case",
  },
];

const topics = [
  {
    view: "1.5M",
    name: "IVF & Fertility Treatments",
  },
  {
    view: "135K",
    name: "Preparing Mind & Body",
  },
  {
    view: "242K",
    name: "Egg Freezing",
  },
  {
    view: "14K",
    name: "Race & Ethnicity",
  },
  {
    view: "15K",
    name: "Adoption & Foster",
  },
  {
    view: "144K",
    name: "Fertility Diagnoses",
  },
  {
    view: "30K",
    name: "Grief & Loss",
  },
];

const expertsPeople = [
  {
    name: "Dr. Torie Comeaux Plowden",
    profession: "Assistant Division Director",
    school: "Walter Rand Madical Canter",
    img: "./icons/people2.svg"
  },
  {
    name: "Dr. Chantel Cross",
    profession: "Associate Director",
    school: "Johns Horkins School of Medicine",
    img: "./icons/people3.svg"
  },
  {
    name: "Dr. Caroline McCaffrey",
    profession: "Laboratory Director",
    school: "NYU School of Medicine",
    img: "./icons/people4.svg"
  },
  {
    name: "Dr. Christian M. Becker",
    profession: "Co-Director, Oxford BSCE Endometriosis Centre",
    school: "Associate Professor, Oxford University United Kingdom",
    img: "./icons/people5.svg"
  },
  {
    name: "Dr. Eric Forman",
    profession: "Medical Director",
    school: "Columbia University Medical Center",
    img: "./icons/people6.svg"
  },
  {
    name: "Dr. Nalini Kaul (Mahaian)",
    profession: "Director, Mother & Child Hosoital",
    school: "Scientific Director, Ferticity Fertility Clinics India",
    img: "./icons/people7.svg"
  },
];

export { listCourses, popularLessons, quickReads, topics, expertsPeople };
