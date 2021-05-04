# assignment

Commands to Run in Jenkins:
sudo -S docker build -t cypress/included:6.6.0 .
sudo -S docker rm -f cypress
sudo -S docker run -itd --name cypress -v $PWD:/e2e -w /e2e cypress/included:6.6.0

Run in headless mode:
npm run test -- --headed

Run in Chrome:
npm run test -- --browser chrome

Create dashboard after execution:
npm run test -- --record --key bfedca34-2435-4ea0-8d35-f49a9921e984 --reporter mochawesome

create Mochawesome report for both JSON and HTML reports:
npm run merge && npm run generate_mochawesome_report

Open the TestRunner:
node_modules\.bin\cypress open
