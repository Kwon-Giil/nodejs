// argv라는 실행 매개변수를 선언
ProcessingInstruction.argv.forEach(function(item, index) {
    // item이라는 인수의 타입을 출력
    console.log(index + ':' + typeof (item) + ':', item);

    // 실행변수의 매개변수에 --exit가 있을 때
    if (item == '--exit'){
        // 아래의 실행 매개변수를 얻는다.
        var exitTime = Number(process.argv[index +1]);
    }

    // 일정시간이 지난 뒤 프로그램 종료
    setTimeout(function(){
        process.exit();
    }, exitTime);
});
