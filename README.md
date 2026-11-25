<h1 align="center">OptiPrime: Optimizing Private Inference through Protocol-Hardware Co-design</h1>

<p align="center">
  <strong>59th IEEE/ACM International Symposium on Microarchitecture (MICRO 2026)</strong>
</p>

<p align="center">
  Jiangrui Yu, Ye Yu, Si Chen, Chenqi Lin, Wenxuan Zeng, Junfeng Fan, Mingyu Gao, and Meng Li
</p>

## Abstract

Private deep neural network (DNN) inference based on hybrid homomorphic encryption (HE) and multi-party computation (MPC) can protect user data with a formal guarantee, but at the cost of significant latency overhead due to HE. Customized HE accelerators have been proposed and have achieved orders-of-magnitude speedup for individual HE operations. However, when directly applying a commercial HE accelerator to state-of-the-art HE-MPC frameworks, we observe only limited end-to-end performance gain. This is because HE-MPC frameworks often require wireless transmission of input and output ciphertexts for each HE operation, leading to a severe network communication bottleneck. To overcome this challenge, we introduce OptiPrime, a protocol-hardware co-optimization framework for efficient private DNN inference. OptiPrime features a novel HE protocol for convolutions that substantially reduces the number of transmitted output ciphertexts and mitigates the network communication bottleneck. Meanwhile, as the new protocol introduces complex computation for fewer output ciphertext, we observe new memory access challenges due to a high volume of weight plaintexts and intermediate ciphertexts. Hence, we further propose a lightweight compression system for the weight plaintexts, reducing memory traffic by 10 times, as well as a specialized dataflow to maximize on-chip data reuse of intermediate ciphertexts. Extensive experiments show that our framework outperforms the Cheetah baseline by at most 5.7 times on CPUs and 4.2 times with an accelerator.

<p align="center">
  <a href="https://arxiv.org/abs/2609.16898"><img alt="Paper on arXiv" src="assets/badges/paper.svg"></a>
  <a href="https://jerryfishy.github.io/OptiPrime/"><img alt="Project Page" src="assets/badges/project.svg"></a>
  <a href="https://github.com/JerryFishY/SEC-PPDL/tree/b986671362e8e6e244ca80a81a0ba6fbccf1c976/Experiments/OptiPrime"><img alt="Code in SEC-PPDL" src="assets/badges/code.svg"></a>
  <a href="https://jerryfishy.github.io/"><img alt="Jiangrui Yu’s homepage" src="assets/badges/homepage.svg"></a>
  <a href="https://mengli.me/"><img alt="PKU SEC Lab page" src="assets/badges/lab.svg"></a>
</p>

## Citation

```bibtex
@inproceedings{yu2026optiprime,
  title={{OptiPrime}: Optimizing Private Inference through Protocol-Hardware Co-design},
  author={Yu, Jiangrui and Yu, Ye and Chen, Si and Lin, Chenqi and Zeng, Wenxuan and Fan, Junfeng and Gao, Mingyu and Li, Meng},
  booktitle={Proceedings of the 59th IEEE/ACM International Symposium on Microarchitecture (MICRO)},
  year={2026},
  url={https://arxiv.org/abs/2609.16898}
}
```
