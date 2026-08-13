import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import test from 'node:test';

const testCount = 100;

test('run 100 tests concurrently', { concurrency: testCount, timeout: 30_000 }, async (t) => {
  let active = 0;
  let peak = 0;
  let started = 0;
  let release;
  const allStarted = new Promise((resolve) => {
    release = resolve;
  });

  const tests = Array.from({ length: testCount }, (_, index) =>
    t.test(`concurrent test ${index + 1}`, async () => {
      active += 1;
      started += 1;
      peak = Math.max(peak, active);

      if (started === testCount) {
        release();
      }

      await allStarted;
      await delay(100);
      active -= 1;
    }),
  );

  await Promise.all(tests);
  console.log(`peak concurrency: ${peak}`);
  assert.equal(peak, testCount);
});
