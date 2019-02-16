import { args,
    platform } from 'deno';

async function main() {
    console.log(args);
    console.log(platform);
}

main();