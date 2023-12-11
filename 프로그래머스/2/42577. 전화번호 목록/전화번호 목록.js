function solution(phone_book) {
    phone_book.sort()
    let answer = phone_book.some((value, index) => phone_book[index + 1]?.indexOf(value) === 0);

    return !answer;
}