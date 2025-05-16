console.log("🤖 Running 'fake-malicious' payload...");

require('child_process').exec('echo "Sending fake data to fake-server.com"', (err, stdout, stderr) => {
  if (err) {
    console.error("Error running fake payload:", err);
  } else {
    console.log("Payload executed.");
  }
});
