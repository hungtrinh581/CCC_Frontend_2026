# PBT 10 - Async JavaScript & API

## Phần A
A1: Thu tu output la 1 - Start, 4 - End, 3 - Promise, 6 - Promise 2, 2 - Timeout 0ms, 7 - Nested timeout, 5 - Timeout 100ms. Promise microtask chay truoc setTimeout macrotask.

A2: fetch tra Promise<Response>; await dùng de doi response. response.ok false voi status ngoai 200-299 nhu 404, 500, 429. response.json() can await vi doc va parse body cung bat dong bo. try/catch bat network error, loi JSON parse va loi minh throw khi !ok.

A3: Promise co Pending, Fulfilled, Rejected. Callback hell la nhieu callback long nhau kho doc; async/await giup viet luong bat dong bo tuan tu hon.

## Phần C
C1: Network error hien offline UI va nut thu lai; 500 bao server loi; 404 bao không tim thay; 429 doi theo Retry-After. Timeout dùng AbortController. Retry logic chi retry loi tam thoi va co backoff.

C2: all resolve khi tat ca fulfilled va reject khi mot promise reject; allSettled doi tat ca settled; race lay promise dau tien settled; any lay promise dau tien fulfilled va reject khi tat ca reject.
