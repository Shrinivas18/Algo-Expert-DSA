// Majority Element (Boyer-Moore Voting)

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log(majorityElement([3, 2, 3])); // 3