# GitHub Actions Experiments

Small, reproducible experiments for GitHub Actions behavior and performance.

## 100 concurrent tests in one job

The workflow runs 100 asynchronous Node.js tests concurrently on one GitHub-hosted runner. A start barrier prevents any test from finishing until all 100 have started, and the final assertion requires a measured peak concurrency of exactly 100.

This demonstrates task concurrency within one job, not 100-way CPU parallelism. All tests share the job's runner, CPU, memory, and filesystem.

Run it locally with:

```sh
node --test test/concurrency.test.mjs
```
