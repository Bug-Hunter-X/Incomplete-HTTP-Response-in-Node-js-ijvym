# Incomplete HTTP Response in Node.js

This repository demonstrates a common issue in Node.js HTTP servers where the complete response might not be sent to the client if the `Content-Length` header is missing.  The bug showcases an incomplete response, and the solution provides a fix by adding the header.

## Bug

The `bug.js` file contains a simple HTTP server that sends a 'Hello, world!' response without specifying the `Content-Length` header. This can lead to incomplete responses, especially with larger payloads.

## Solution

The `bugSolution.js` file demonstrates the corrected version by including the `Content-Length` header in the response. This ensures that the client receives the complete message.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`. Observe potential incomplete responses using a client such as curl.
4. Run `node bugSolution.js`. Verify that this version sends the complete response without issues.