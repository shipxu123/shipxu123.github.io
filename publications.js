// ============================================================
//                    PUBLICATIONS SORT CONFIG
//
// Change sort order by modifying only the value below:
//   SORT_ORDER: "desc" → descending (newest first, e.g. 2026, 2025, 2024...)
//              "asc"  → ascending (oldest first, e.g. 2019, 2021, 2023...)
// ============================================================
const SORT_ORDER = "desc";

// ============================================================
//                    Conference Proceedings
//
// Add new paper: append { year, venue, content } to the array
// Sort: year -> venue -> index. Citations [C1], [C2]... are auto-generated.
// ============================================================
const CONFERENCES = [
  {
    year: 2024,
    venue: "DAC",
    content: `<b>Peng Xu</b>, Guojin Chen, Keren Zhu, Tinghuan Chen, Tsung-Yi Ho, Bei Yu, "Performance-driven Analog Routing via Heterogeneous 3DGNN and Potential Relaxation", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 23–27, 2024.
    (<a href="https://shipxu123.github.io/papers/C11-DAC2024-PARoute.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C11-DAC2024-PARoute-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C11-DAC2024-PARoute-poster.pdf">poster</a>)`
  },
  {
    year: 2023,
    venue: "ICML",
    content: `<b>Peng Xu*</b>, Lin Zhang*, Xuanzhou Liu, Jiaqi Sun, Yue Zhao, Haiqin Yang, Bei Yu, "Do Not Train It: A Linear Neural Architecture Search of Graph Neural Networks", in
    International Conference on Machine Learning (ICML), Hawaii, Jul. 23–29, 2023.
    (<a href="https://shipxu123.github.io/papers/C3-ICML2023-NAC.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C3-ICML2023-NAC-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C3-ICML2023-NAC-poster.pdf">poster</a>)
    (<a href="https://github.com/shipxu123/NAC">codes</a>)`
  },
  {
    year: 2026,
    venue: "AAAI",
    content: `<b>Peng Xu*</b>, Yapeng Li*, Tinghuan Chen, Tsung-Yi Ho, Bei Yu, "KCLNet: Electrically Equivalence-Oriented Graph Representation Learning for Analog Circuits", in
    AAAI Conference on Artificial Intelligence (AAAI), Singapore, Feb. 20–27, 2026. (Oral)`
  },
  {
    year: 2024,
    venue: "ICCAD",
    content: `<b>Peng Xu</b>, Su Zheng, Yuyang Ye, Chen Bai, Siyuan Xu, Hao Geng, Tsung-Yi Ho, Bei Yu, "RankTuner: When Design Tool Parameter Tuning Meets Preference Bayesian Optimization", in
    IEEE/ACM International Conference on Computer-Aided Design (ICCAD), New Jersey, Oct. 27–31, 2024.
    (<a href="https://shipxu123.github.io/papers/C12-ICCAD2024-RankTuner.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C12-ICCAD2024-RankTuner-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C12-ICCAD2024-RankTuner-poster.pdf">poster</a>)`
  },
  {
    year: 2026,
    venue: "DATE",
    content: `<b>Peng Xu*</b>, Ziyang Yu*, Yuan Pu, Xinyun Zhang, Donger Luo, Hao Geng, Siyuan Xu, Tsung-Yi Ho, Bei Yu, "RATuner: Retrieval-Augmented VLSI Flow Design Parameter Tuning Framework", in
    IEEE/ACM Proceedings Design, Automation and Test in Europe (DATE), Verona, Italy, Apr. 20–22, 2026.`
  },
  {
    year: 2024,
    venue: "ASPDAC",
    content: `<b>Peng Xu</b>, Jintao Li, Tsung-Yi Ho, Bei Yu, Keren Zhu, "Performance-Driven Analog Layout Automation: Current Status and Future Directions", in
    IEEE/ACM Asian and South Pacific Design Automation Conference (ASPDAC), South Korea, Jan. 22–25, 2024. (Invited Paper)
    (<a href="https://shipxu123.github.io/papers/C6-ASPDAC2024-AnalogPD.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C6-ASPDAC2024-AnalogPD-slides.pdf">slides</a>)`
  },
  {
    year: 2021,
    venue: "ICCC",
    content: `<b>Peng Xu</b>, Yihui Li, Yice Zhang, Jianxin Li Ruifeng Xu, GuozhongShi, and Feiran Hu, "Contrastive Learning for Multiple Models in One Supernet", in
    International Conference on Cognitive Computing (ICCC), Virtual Event, Dec. 12-23, 2021.`
  },
  {
    year: 2026,
    venue: "DATE",
    content: `Shixin Chen*, <b>Peng Xu*</b>, Yapeng Li, Tinghuan Chen, Bei Yu, "IP-Matcher: An Efficient One-to-Many Matching Framework for Analog Circuit Design and Reusing", in
    IEEE/ACM Proceedings Design, Automation and Test in Europe (DATE), Verona, Italy, Apr. 20–22, 2026.`
  },
  {
    year: 2026,
    venue: "ASPDAC",
    content: `Ziyang Yu*, <b>Peng Xu*</b>, Su Zheng, Siyuan XU, Hao Geng, Bei Yu, Martin Wong, "CausalTuner: Will Causality Help High-Dimensional EDA Tool Parameter Tuning", in
    IEEE/ACM Asian and South Pacific Design Automation Conference (ASPDAC), Hong Kong, Jan. 19-22, 2026.`
  },
  {
    year: 2026,
    venue: "DATE",
    content: `Siting Liu, <b>Peng Xu</b>, Peiyu Liao, Keren Zhu, Yibo Lin, Bei Yu, "Submodular Maximization-inspired Adaptive Routing Bend Space Planning", in
    IEEE/ACM Proceedings Design, Automation and Test in Europe (DATE), Verona, Italy, Apr. 20–22, 2026.`
  },
  {
    year: 2026,
    venue: "DATE",
    content: `Xinheng Li, Donger Luo, Peng Xu, Ziyang Yu, Qi Sun, Tinghuan Chen, Bei Yu, Hao Geng, "EDA Flow Matters: Stage-Aware Parameter Optimization of Tool Chain", in
    IEEE/ACM Proceedings Design, Automation and Test in Europe (DATE), Verona, Italy, Apr. 20–22, 2026.`
  },
  {
    year: 2025,
    venue: "ICCAD",
    content: `Jindong Tu, Yapeng Li, <b>Peng Xu</b>, Tuo Li, Guoqing Li, Zushuai Xie, Bei Yu, Tinghuan Chen, "RSizing: Robust Bayesian Optimization for Analog Circuit Sizing Under Process Variations", in
    IEEE/ACM International Conference on Computer-Aided Design (ICCAD), Munich, Oct. 26–30, 2025.`
  },
  {
    year: 2025,
    venue: "DAC",
    content: `Hongduo Liu, Chen BAI, <b>Peng Xu</b>, Lihao Yin, Xianzhi Yu, Hui-Ling Zhen, Mingxuan Yuan, Tsung-Yi Ho, Bei Yu, "LLMShare: Optimizing LLM Inference Serving with Hardware Architecture Exploration", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 22–25, 2025.
    (<a href="https://shipxu123.github.io/papers/C15-DAC2025-LLMShare.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C15-DAC2025-LLMShare-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C15-DAC2025-LLMShare-poster.pdf">poster</a>)`
  },
  {
    year: 2025,
    venue: "DAC",
    content: `Ziyang Yu, <b>Peng Xu</b>, Zixiao WANG, Binwu Zhu, Qipan Wang, Yibo Lin, Runsheng Wang, Bei Yu, Martin Wong, "SDM-PEB: Spatial-Depthwise Mamba for Enhanced Post-Exposure Bake Simulation", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 22–25, 2025.
    (<a href="https://shipxu123.github.io/papers/C14-DAC2025-PEB.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C14-DAC2025-PEB-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C14-DAC2025-PEB-poster.pdf">poster</a>)`
  },
  {
    year: 2025,
    venue: "DAC",
    content: `Yuyang Ye, Xiangfei Hu, Yuchen Liu, <b>Peng Xu</b>, Yu Gong, Tinghuan Chen, Hao Yan, Bei Yu, Longxing Shi, "Rank-based Multi-objective Approximate Logic Synthesis via Monte Carlo Tree Search", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 22–25, 2025.
    (<a href="https://shipxu123.github.io/papers/C13-DAC2025-MOALS.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C13-DAC2025-MOALS-slides.pdf">slides</a>)`
  },
  {
    year: 2024,
    venue: "DAC",
    content: `Hongduo Liu, <b>Peng Xu</b>, Yuan Pu, Lihao Yin, Hui-Ling Zhen, Mingxuan Yuan, Tsung-Yi Ho, Bei Yu, "NeuroSelect: Learning to Select Clauses in SAT Solvers", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 23–27, 2024.
    (<a href="https://shipxu123.github.io/papers/C10-DAC2024-NeuroSelect.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C10-DAC2024-NeuroSelect-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C10-DAC2024-NeuroSelect-poster.pdf">poster</a>)`
  },
  {
    year: 2024,
    venue: "DAC",
    content: `Guojin Chen, Hongquan He, <b>Peng Xu</b>, Hao Geng, Bei Yu, "Efficient Bilevel Source Mask Optimization", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 23–27, 2024.
    (<a href="https://shipxu123.github.io/papers/C9-DAC2024-BiSMO.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C9-DAC2024-BiSMO-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C9-DAC2024-BiSMO-poster.pdf">poster</a>)`
  },
  {
    year: 2024,
    venue: "DAC",
    content: `Xinyun Zhang*, Binwu Zhu*, Fangzhou Liu, Ziyi Wang, <b>Peng Xu</b>, Hong Xu, Bei Yu, "Disentangle, Align and Generalize: Learning A Timing Predictor from Different Technology Nodes", in
    ACM/IEEE Design Automation Conference (DAC), San Francisco, Jun. 23–27, 2024.
    (<a href="https://shipxu123.github.io/papers/C8-DAC2024-AdaTimer.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C8-DAC2024-AdaTimer-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C8-DAC2024-AdaTimer-poster.pdf">poster</a>)`
  },
  {
    year: 2024,
    venue: "AAAI",
    content: `Haoyuan Wu*, Xinyun Zhang*, <b>Peng Xu</b>, Peiyu Liao, Xufeng Yao, Bei Yu, "p-Laplacian Adaptation for Generative Pre-trained Vision-Language Models", in
    AAAI Conference on Artificial Intelligence (AAAI), Vancouver, Feb. 20–27, 2024.
    (<a href="https://shipxu123.github.io/papers/C7-AAAI2024-AttnAdapter.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C7-AAAI2024-AttnAdapter-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C7-AAAI2024-AttnAdapter-poster.pdf">poster</a>)`
  },
  {
    year: 2023,
    venue: "ICCAD",
    content: `Su Zheng, Lancheng Zou, <b>Peng XU</b>, Siting Liu, Bei Yu, Martin Wong, "Lay-Net: Grafting Netlist Knowledge on Layout-Based Congestion Prediction", in
    International Conference on Computer-Aided Design (ICCAD), San Francisco, Oct. 29–Nov. 02, 2023.
    (<a href="https://shipxu123.github.io/papers/C5-ICCAD2023-CongViG.pdf">paper</a>)
    (<a href="https://shipxu123.github.io/papers/C5-ICCAD2023-CongViG-slides.pdf">slides</a>)
    (<a href="https://shipxu123.github.io/papers/C5-ICCAD2023-CongViG-poster.pdf">poster</a>)`
  },
  {
    year: 2023,
    venue: "ICML",
    content: `Jiaqi Sun, Lin Zhang, Guangyi Chen, <b>Peng Xu</b>, Kun Zhang, Yujiu Yang, "Feature expansion for graph neural networks", in
    International Conference on Machine Learning (ICML), Hawaii, Jul. 23–29, 2023.
    (<a href="https://shipxu123.github.io/papers/C3-ICML2023-FEGNN.pdf">paper</a>)
    (<a href="https://github.com/XiaShan1227/FE-GNN">codes</a>)`
  },
  {
    year: 2019,
    venue: "DTTC",
    content: `Auto quantization: Select best model quantization scheme with reinforcement learning, in Intel Design and Test Technology Conference (DTTC, 2019)`
  },
];

// ============================================================
//                      Journal Articles
//
// Add new paper: append { year, venue, content } to the array
// Sort: year -> venue -> index. Citations [J1], [J2]... are auto-generated.
// ============================================================
const JOURNALS = [
  {
    year: 2025,
    venue: "TCAD",
    content: `<b>Peng Xu*</b>, Rong Sun*, Su Zheng, Song Chen, Qi Xu, Bei Yu, "DaVinci: Performance-Driven Analog Routing via Multi-modality Guidance Prediction",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD).`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `<b>Peng Xu</b>, Yapeng Li, Tinghuan Chen, Tsung-Yi Ho, Bei Yu, "Ckt2Vec: Efficient Electrical Encoding for Analog Circuit Representations in Vector Space",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J13-TCAD2025-Ckt2Vec.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `<b>Peng Xu</b>, Su Zheng, Yuyang Ye, Chen Bai, Siyuan Xu, Hao Geng, Tsung-Yi Ho, Bei Yu, "RankTuner: When Design Tool Parameter Tuning Meets Preference Bayesian Optimization",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J12-TCAD2025-RankTuner.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `<b>Peng Xu</b>, Jindong Tu, Guojin Chen, Keren Zhu, Tinghuan Chen, Tsung-Yi Ho, Bei Yu, "PARoute2: Enhanced Analog Routing via Performance-Drive Guidance Generation",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J10-TCAD2025-PARoute.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TODAES",
    content: `<b>Peng Xu*</b>, Su Zheng*, Mingzi Wang, Ziyang Yu, Shixin Chen, Tinghuan Chen, Keren Zhu, Tsung-Yi Ho, Bei Yu, "Rank-DSE: Neural Pareto Comparator of Microarchitecture Design Space Exploration",
    accepted by ACM Transactions on Design Automation of Electronic Systems (TODAES), 2025.
    (<a href="https://shipxu123.github.io/papers/J11-TODAES2025-Rank-DSE.pdf">paper</a>)`
  },
  {
    year: 2024,
    venue: "TODAES",
    content: `<b>Peng Xu</b>, Siyuan Xu, Tinghuan Chen, Guojin Chen, Tsung-Yi Ho, Bei Yu, "DeepOTF: Learning Equations-constrained Prediction for Electromagnetic Behavior",
    accepted by ACM Transactions on Design Automation of Electronic Systems (TODAES), 2024.
    (<a href="https://shipxu123.github.io/papers/J5-TODAES2024-DeepOTF.pdf">paper</a>)`
  },
  {
    year: 2023,
    venue: "T-ITS",
    content: `<b>Peng Xu</b>, Ke Wang, Mohammad Mehedi Hassan, Chien-Ming Chen, Weiguo Lin, Md. Rafiul Hassan, and Giancarlo Fortino, "Adversarial Robustness in Graph-based Neural Architecture Search for Edge AI Transportation Systems",
    accepted by IEEE Transactions on Intelligent Transportation Systems (T-ITS), 2023.
    (<a href="https://shipxu123.github.io/papers/J4_TITS2023-AdvNAS.pdf">paper</a>)`
  },
  {
    year: 2023,
    venue: "TII",
    content: `<b>Peng Xu</b>, Ke Wang, Md. Rafiul Hassan, Mohammad Mehedi Hassan, and Chien-Ming Chen, "An Interpretive Perspective: Adversarial Trojaning Attack on Neural-Architecture-Search Enabled Edge AI Systems",
    accepted by IEEE Transactions on Industrial Informatics (TII), 2023.
    (<a href="https://shipxu123.github.io/papers/J3_TII2023-BadNAS.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `Guojin Chen, <b>Peng Xu</b>, Hongquan He, Hao Geng, Bei Yu, "Efficient Bilevel Source Mask Optimization",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `Donger Luo, Qi Sun, <b>Peng Xu</b>, Su Zheng, Qi Xu, Tinghuan Chen, Bei Yu, Hao Geng, "Attention-Based EDA Tool Parameter Explorer: From Hybrid Parameters to Multi-QoR Metrics",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `Jindong Tu, Yapeng Li, Pengjia Li, <b>Peng Xu</b>, Qianru Zhang, Sanping Wan, Yongsheng Sun, Bei Yu, Tinghuan Chen, "SMART: Graph Learning-Boosted Subcircuit Matching for Large-scale Analog Circuits",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J9-TCAD2025-SMART.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `Lancheng Zou, Su Zheng, <b>Peng Xu</b>, Siting Liu, Bei Yu, Martin D.F. Wong, "Lay-Net: Grafting Netlist Knowledge on Layout-Based Congestion Prediction",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J8-TCAD2025-Lay-Net.pdf">paper</a>)`
  },
  {
    year: 2025,
    venue: "TCAD",
    content: `Xinyun Zhang, Binwu Zhu, Fangzhou Liu, Jiaxi Jiang, Ziyi Wang, <b>Peng Xu</b>, Hong Xu, Bei Yu, "Pre-Routing Timing Prediction Across Different Technology Nodes",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025.
    (<a href="https://shipxu123.github.io/papers/J7-TCAD2025-AdaTimer.pdf">paper</a>)`
  },
  {
    year: 2024,
    venue: "TCAD",
    content: `Yuyang Ye, <b>Peng Xu</b>, Lizheng Ren, Tinghuan Chen, Hao Yan, Bei Yu, Longxing Shi, "Learning-driven Physically-aware Large-scale Circuit Gate Sizing",
    accepted by IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2024.
    (<a href="https://shipxu123.github.io/papers/J6-TCAD2025-LearnSize.pdf">paper</a>)`
  },
  {
    year: 2021,
    venue: "IEEE Network",
    content: `K. Wang, <b>S. P. Xu</b>, C. M. Chen, S. H. Islam, M. M. Hassan, C. Savaglio, P. Pace, and G. Aloi, "A Trusted Consensus Scheme for Collaborative Learning in the Edge AI Computing Domain",
    accepted by IEEE Network, 2021.`
  },
  {
    year: 2021,
    venue: "IEEE Systems",
    content: `E. K. Wang, <b>S. P. Xu</b>, C. Chen, and N. Kumar, "Neural-architecture-search-based Multiobjective Cognitive Automation System",
    accepted by IEEE Systems Journal, 2021.`
  },
];

// ============================================================
//                      RENDER LOGIC (no need to modify)
// ============================================================
function renderPublications() {
  // Sort: 1st by year, 2nd by venue name, 3rd by original index
  var sortFn = function(a, b) {
    var cmpYear = SORT_ORDER === "desc" ? b.year - a.year : a.year - b.year;
    if (cmpYear !== 0) return cmpYear;
    var cmpVenue = (a.venue || "").localeCompare(b.venue || "");
    return cmpVenue !== 0 ? cmpVenue : a._idx - b._idx;
  };

  // Sort conferences
  var sortedConf = CONFERENCES.map(function(p, i) {
    return { year: p.year, venue: p.venue, content: p.content, _idx: i };
  }).sort(sortFn);

  var confHtml = '<h3>Conference Proceedings</h3>\n<ul>\n';
  for (var i = 0; i < sortedConf.length; i++) {
    confHtml += '  <li><p>\n    [C' + (i + 1) + '] ' + sortedConf[i].content + '\n  </p></li>\n';
  }
  confHtml += '</ul>\n';

  // Sort journals
  var sortedJour = JOURNALS.map(function(p, i) {
    return { year: p.year, venue: p.venue, content: p.content, _idx: i };
  }).sort(sortFn);

  var jourHtml = '<h3>Journal Articles</h3>\n<ul>\n';
  for (var j = 0; j < sortedJour.length; j++) {
    jourHtml += '  <li><p>\n    [J' + (j + 1) + '] ' + sortedJour[j].content + '\n  </p></li>\n';
  }
  jourHtml += '</ul>\n';

  document.getElementById('publications-list').innerHTML = confHtml + jourHtml;
}

// Auto-render on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPublications);
} else {
  renderPublications();
}
