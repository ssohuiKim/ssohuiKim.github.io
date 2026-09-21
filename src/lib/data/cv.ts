export type ContactLink = {
	label: string;
	href: string;
};

export const profile = {
	name: 'So-Hui Kim',
	title: 'MS Student, Genomic Data Science',
	subtitle: 'Computational Omics Lab, Pusan National University',
	bio: '<strong>Bioinformatics researcher</strong> working on <strong>single-cell</strong> and <strong>spatial transcriptomics</strong>, with research interests in AI-driven analysis of complex biological data and the <strong>development of AI-powered bioinformatics tools</strong>.',
	contacts: [
		{ label: 'Email', href: 'mailto:sohui511@pusan.ac.kr' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/so-hui-kim-137b663a2/' },
		{ label: 'GitHub', href: 'https://github.com/ssohuiKim' },
		{ label: 'ORCID', href: 'https://orcid.org/0009-0002-3319-422X' }
	] satisfies ContactLink[]
};

export type EducationEntry = {
	degree: string;
	school: string;
	department: string;
	detail?: string;
	link?: ContactLink;
	gpa: string;
	period: string;
};

export const education: EducationEntry[] = [
	{
		degree: 'MS',
		school: 'Pusan National University',
		department: 'College of Medicine, Genomic Data Science',
		detail: 'Computational Omics Lab, Advisor: Jeongbin Park',
		link: { label: 'pnucolab.com', href: 'https://pnucolab.com' },
		gpa: 'GPA: 4.5 / 4.5',
		period: 'March 2025 ~ February 2027 (Expected Graduation)'
	},
	{
		degree: 'BS',
		school: 'Pusan National University',
		department: 'School of Biomedical Convergence Engineering, Major in Data Science',
		gpa: 'GPA: 3.84 / 4.5',
		period: 'March 2021 ~ February 2025'
	}
];

export type ResearchEntry = {
	slug: string;
	title: string;
	collaboration?: string;
	bullets: string[];
};

export const researchExperience: ResearchEntry[] = [
	{
		slug: 'cas-offinder-optimization',
		title: 'Optimization of Cas-OFFinder Algorithm',
		bullets: [
			'Re-engineered the Cas-OFFinder algorithm to enhance computational efficiency and accuracy in CRISPR off-target prediction.',
			'Resolved critical bugs in DNA/RNA bulge support and implemented a novel algorithm to significantly improve search speed.'
		]
	},
	{
		slug: 'dili-assist',
		title: 'DILI-Assist: LLM-based Clinical Decision Support System',
		collaboration: 'Pusan National University, College of Pharmacy — PI: Nakyung Jeon',
		bullets: [
			'Developed a privacy-preserving informatics framework for DILI assessment, integrated with local LLMs for automated clinical decision support.'
		]
	},
	{
		slug: 'msc-therapy-ards',
		title: 'MSC Therapy in ARDS: Single-cell Comparative Analysis',
		collaboration: 'Seoul National University Bundang Hospital (SNUBH) — PI: Young-Jae Cho',
		bullets: [
			'Investigated the therapeutic mechanisms of Mesenchymal Stem Cells (MSCs) in LPS-induced Acute Respiratory Distress Syndrome (ARDS) models.',
			'Investigated the therapeutic effects of MSCs on lung recovery using comparative transcriptomic profiling.'
		]
	},
	{
		slug: 'sars-cov2-organ-on-a-chip',
		title: 'SARS-CoV-2 Variant Pathogenesis in Organ-on-a-Chip Models',
		collaboration: 'Seoul National University Bundang Hospital (SNUBH) — PI: Young-Jae Cho',
		bullets: [
			'Analyzed lineage-specific impacts on lung pathology using scRNA-seq data from Organ-on-a-Chip platforms.',
			'Validated the fidelity of the microfluidic chip model by benchmarking its transcriptomic profiles against existing clinical COVID-19 reports.'
		]
	},
	{
		slug: 'cornus-officinalis-kidney-aging',
		title: 'Therapeutic Effects of Cornus officinalis on Kidney Aging',
		collaboration: 'Korea Institute of Oriental Medicine (KIOM) — PI: Jeeyoun Jung',
		bullets: [
			'Conducted multi-modal analysis using single-cell RNA-seq and spatial transcriptomics to investigate the effects of Cornus officinalis on ROS in murine kidney models.',
			'Evaluated the anti-aging efficacy of Cornus officinalis by comparing transcriptomic signatures between young, aged, and treated groups.'
		]
	},
	{
		slug: 'hair-follicle-3d-reconstruction',
		title: '3D Spatial Reconstruction of Murine Hair Follicles',
		bullets: [
			'Visualized the spatial organization of murine hair follicles through 3D cell reconstruction to analyze morphological changes during growth cycles.'
		]
	}
];

export type PublicationEntry = {
	authors: string;
	title: string;
	venue: string;
	link?: string;
};

export const publications = {
	firstAuthor: [
		{
			authors: 'B. Kim, S.-H. Kim, J. Kim, et al.',
			title: 'Lung Microphysiological System Validates Novel Cell Therapy for Acute Respiratory Distress Syndrome.',
			venue: 'Adv. Biology 10, no. 1 (2026): e00225.',
			link: 'https://doi.org/10.1002/adbi.202500225'
		},
		{
			authors: 'S.-H. Kim, W.-J. Jung, et al.',
			title: 'DILI-Assist: An AI-Assisted Clinical Decision Support Tool for Drug-Induced Liver Injury Assessment.',
			venue: 'Under Review: IEEE Journal of Biomedical and Health Informatics'
		},
		{
			authors: 'S. Park, S.-H. Kim, et al.',
			title: 'Recapitulating SARS-CoV-2 Infection in a Human Lung Organoid-on-a-Chip at the Air-Liquid Interface.',
			venue: 'In Revision: Respiratory Research'
		}
	] satisfies PublicationEntry[],
	coAuthor: [
		{
			authors: 'Jung WJ, Jo EJ, Kim YJ, Park M, Kim E, Jung YS, Park SR, Oh JS, Kim SH, Park J, Jung SY, Jeon N.',
			title: 'Characteristics of Immune Checkpoint Inhibitor–Related Hepatotoxicity Based on the Baseline Liver Function.',
			venue: 'Cancer Res Treat. 2025 July 18 [E-pub].',
			link: 'https://doi.org/10.4143/crt.2025.040'
		}
	] satisfies PublicationEntry[]
};

export type ConferenceEntry = {
	type: string;
	title: string;
	venue: string;
	photo?: string;
	award?: string;
};

export const conferences: ConferenceEntry[] = [
	{
		type: 'Flash Talk & Poster Presentation',
		title: 'Lung Microphysiological System Validates Novel Cell Therapy for Acute Respiratory Distress Syndrome',
		venue: '2025 Single Cell and Spatial Omics Korea (SCSOK)–Institute for Basic Science (IBS) Joint Symposium',
		photo: '/scsok-flashtalk.jpg'
	},
	{
		type: 'Poster Presentation',
		title: 'DILI-Assist: A Web-Based Decision Support Platform for Drug-Induced Liver Injury Assessment',
		venue: '2025 Annual Conference of the Korean Society for Bioinformatics (BIOINFO 2025)',
		photo: '/ksbi-2025.jpg',
		award: '🏆 Best Poster Award, BIOINFO 2026'
	},
	{
		type: 'Poster Presentation',
		title:
			'RGE Toolkit: A Web Platform for End-to-End CRISPR Genome Editing, Built on a Re-engineered High-Performance Cas-OFFinder',
		venue: 'The 35th International KOGO Annual Conference',
		photo: '/kogo-2026-award.jpg',
		award: '🏆 Excellent Poster Award, KOGO 2026'
	}
];

export type SkillGroup = {
	category: string;
	items: string[];
};

export const skills: SkillGroup[] = [
	{ category: 'Languages', items: ['Python', 'R', 'MATLAB', 'C++', 'HTML'] },
	{ category: 'Platforms', items: ['Linux', 'Git', 'Bash', 'Docker'] },
	{
		category: 'Web Development',
		items: ['React', 'Node.js', 'Svelte', 'FastAPI', 'TypeScript', 'Vite', 'Django', 'CSS']
	},
	{ category: 'Deep Learning', items: ['PyTorch', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'] },
	{ category: 'Bioinformatics', items: ['Single-cell & spatial data analysis', 'Scanpy', 'Squidpy'] },
	{ category: 'Language', items: ['English (TOEFL iBT: 92, TOEIC: 925)'] }
];

export const patents: string[] = [
	'Method for visualizing adverse medication reactions based on common data model and system thereof'
];

export type TeachingEntry = {
	role: string;
	course: string;
	period: string;
};

export const teaching: TeachingEntry[] = [
	{
		role: 'Workshop Assistant',
		course: 'KSBi-BIML 2026 Summer: Bioinformatics & Machine Learning (BIML) Workshop for Life Scientists',
		period: 'Aug 2026'
	},
	{
		role: 'Workshop Assistant',
		course: '20th Asian Institute in Statistical Genetics and Genomics (KOGO Workshop)',
		period: 'July 20–24, 2026'
	},
	{
		role: 'Workshop Assistant',
		course: 'The 11th Korean Society for Bioinformatics (KSBi) – BIML 2025 Bioinformatics & Machine Learning Workshop',
		period: 'Feb 2025'
	},
	{ role: 'Teaching Assistant', course: 'Advanced Programming', period: 'Mar – Jun 2026' },
	{ role: 'Teaching Assistant', course: 'Introduction to Biomedical Informatics', period: 'Mar – Jun 2026' },
	{ role: 'Teaching Assistant', course: 'Bioinformatics', period: 'Sep – Dec 2025' },
	{ role: 'Teaching Assistant', course: 'Introduction to Biomedical Informatics', period: 'Mar – Jun 2025' }
];

export const navSections = [
	{ id: 'about', label: 'About' },
	{ id: 'education', label: 'Education' },
	{ id: 'publications', label: 'Publications' },
	{ id: 'experience', label: 'Research Experience' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'patent', label: 'Patent' },
	{ id: 'teaching', label: 'Teaching' }
];
