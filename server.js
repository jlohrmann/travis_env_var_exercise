const JUNK = process.env.JUNK;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log( `${JUNK}` );
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
