console.log("1️⃣  Start of script");

function fetchData() {
  console.log("2️⃣  fetchData() called");

  return new Promise((resolve, reject) => {
    console.log("3️⃣  Inside Promise (before setTimeout)");
     setTimeout(() => {
      console.log("4️⃣  Inside setTimeout (resolving Promise)");
      resolve("✅ Data fetched from server");
    }, 1000);
  });
}

async function processData() {
  console.log("5️⃣  processData() started");

  const result = await fetchData(); // pauses here until resolved

  console.log("6️⃣  After await (Promise resolved)");
  console.log("7️⃣  Result:", result);
}

processData();

console.log("8️⃣  After calling processData");

Promise.resolve("⚡ Immediate Promise resolved").then(msg => {
  console.log("9️⃣  Then:", msg);
});

console.log("🔟  End of script");
