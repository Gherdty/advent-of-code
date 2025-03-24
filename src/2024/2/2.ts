import { getInputString } from "../../utils";

async function main() {
    const lines: string[] = (await getInputString("/2024/2/input.txt")).split("\n");

    let numSafe = 0;

    for (const line of lines) {
        const numStr = line.split(" ");
        const numArr = numStr.map(str => parseInt(str, 10));

        let inc = 0;
        let dec = 0;

        for (let j = 0; j < numArr.length - 1; j++) {
            if (numArr[j] < numArr[j + 1]) {
                inc++;
            }
            if (numArr[j] > numArr[j + 1]) {
                dec++;
            }
        }

        let dir = inc > dec ? 1 : -1;
        let safe = true;
        let unsafeFix = false;

        for (let j = 0; j < numArr.length - 1; j++) {
            if (dir > 0) {
                if (numArr[j] >= numArr[j + 1]) {
                    if (!unsafeFix) {
                        if (numArr.length - 2 === j) {
                            break;
                        }
                        if (
                            numArr[j] < numArr[j + 2] &&
                            Math.abs(numArr[j] - numArr[j + 2]) < 4
                        ) {
                            unsafeFix = true;
                            j++;
                            continue;
                        }
                        if (
                            j > 0 &&
                            numArr[j - 1] < numArr[j + 1] &&
                            Math.abs(numArr[j - 1] - numArr[j + 1]) < 4
                        ) {
                            unsafeFix = true;
                            continue;
                        }
                    }
                    safe = false;
                    break;
                }
            } else {
                if (numArr[j] <= numArr[j + 1]) {
                    if (numArr.length - 2 === j) {
                        break;
                    }
                    if (!unsafeFix) {
                        if (
                            numArr[j] > numArr[j + 2] &&
                            Math.abs(numArr[j] - numArr[j + 2]) < 4
                        ) {
                            unsafeFix = true;
                            j++;
                            continue;
                        }
                        if (
                            j > 0 &&
                            numArr[j - 1] > numArr[j + 1] &&
                            Math.abs(numArr[j - 1] - numArr[j + 1]) < 4
                        ) {
                            unsafeFix = true;
                            continue;
                        }
                    }
                    safe = false;
                    break;
                }
            }
            if (Math.abs(numArr[j] - numArr[j + 1]) > 3) {
                safe = false;
                break;
            }
        }

        numSafe += safe ? 1 : 0;
    }

    console.log(numSafe);
}

main();
