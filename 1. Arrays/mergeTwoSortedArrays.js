// Merge two sorted arrays (without extra space)

function merge(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    let gap = Math.ceil((n + m) / 2);

    while (gap > 0) {
        let i = 0;
        let j = gap;

        while (j < n + m) {
            let a, b;

            if (i < n) a = arr1[i];
            else a = arr2[i - n];

            if (j < n) b = arr1[j];
            else b = arr2[j - n];

            if (a > b) {
                if (i < n && j < n) {
                    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
                } else if (i < n && j >= n) {
                    [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
                } else {
                    [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
                }
            }

            i++;
            j++;
        }

        if (gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
}