import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    venue: "2024 IEEE World AI IoT Congress",
    year: 2024,
    title: "Self-Adaptive Non-Intrusive Load Monitoring Using Deep Learning",
    authors:
      "M. S. K. Nisakya, S. M. L. Arampola, W. A. Yasodya, S. Kumarawadu, V. Logeeshan, C. Wanigasekara",
    href: "https://ieeexplore.ieee.org/document/10579028",
    award: "Best Presented Paper Award",
    summary:
      "Introduces a self-adaptive NILM model integrating deep learning with transfer learning and pseudo-labeling, so energy-monitoring models keep working as appliance power patterns drift with age.",
  },
  {
    venue: "IEEE Access, vol. 13, pp. 106524–106539",
    year: 2025,
    title:
      "Self-Adaptive Deep Learning Framework for Non-Intrusive Load Monitoring: Addressing Aging Appliance Challenges With Transfer Learning and Pseudo Labeling",
    authors:
      "W. A. Yasodya, S. M. L. Arampola, M. S. K. Nisakya, V. Logeeshan, S. Kumarawadu, C. Wanigasekara",
    href: "https://ieeexplore.ieee.org/document/11044358",
    summary:
      "Journal extension of the self-adaptive NILM framework — synthetic data generation and advanced neural architectures achieving exceptional disaggregation accuracy on ageing appliances.",
  },
];
