# GitHub Actions Experiments

Small, reproducible experiments for GitHub Actions behavior and performance.

## 100 native parallel steps in one job

The workflow uses GitHub Actions' native `parallel` keyword to schedule 100 separate steps in one job. Each step waits for 10 seconds and prints its start and end timestamps in a separate Actions log.

Ten is GitHub's documented maximum number of concurrent background steps in one job. The remaining steps queue and should execute in 10 waves of 10 steps.

This demonstrates Actions step concurrency and queuing, not 10-way CPU parallelism. All steps share the job's runner, CPU, memory, and filesystem.
