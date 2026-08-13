# GitHub Actions Experiments

Small, reproducible experiments for GitHub Actions behavior and performance.

## 10 native parallel steps in one job

The workflow uses GitHub Actions' native `parallel` keyword to run 10 separate steps concurrently in one job. Each step waits for 10 seconds and prints its start and end timestamps in a separate Actions log.

Ten is GitHub's documented maximum number of concurrent background steps in one job. Additional steps are queued until a slot becomes available.

This demonstrates Actions step concurrency, not 10-way CPU parallelism. All steps share the job's runner, CPU, memory, and filesystem.
