// 문자형 자료형의 전역 변수
console.log('filename:', __filename); // 현재 실행중인 코드의 파일 경로
console.log('dirname', __dirname); // 현재 실행 중인 코드의 폴더 경로

// 각 자료형을 의미하는 특수문자
console.log('output: %d', 273); // 숫자형 특수문자 (%d)
console.log('숫자열: %d + %d = %d', 273 ,56, 273+56, 3000);

console.log('output: %s', 'MapleStory'); // 문자형 특수문자 (%s)
console.log('문자열: %s', 'Hello World!', '특수 기호와는 전혀 상관 없음');

// 실행 시간을 측정하는 방법
console.time('alpha'); //alpha라는 작업을 하는데 소요되는 시간 측정 시작

var output = 1;
for (var i = 1; i <= 10; i++) // 매 프레임마다 i를 1씩 증가시켜 10이 될 떄까지
{
    output *= i; // output이라는 변수에 i를 곱해준다
}
console.log('Result:', output); // output이라는 결과를 도출하고

console.timeEnd('alpha'); // 시간 측정을 종료