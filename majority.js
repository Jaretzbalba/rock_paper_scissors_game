function majority(num) {
        if (num % 2 == 0) {
        return num = (num / 2) + 1;
    }   else {
        return num = Math.ceil(num/2);
    }
}