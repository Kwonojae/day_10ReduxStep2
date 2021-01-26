import React from 'react';
import { connect } from 'react-redux';
import { Counter } from '../components/Counter';
import { decrement, increment, reset } from '../store/modules/counter';

const CounterContainer = ({color,cnt, increment, decrement,reset} ) => {
    //화면에 보이는 실제ui부분
    return (
        <div>
            <Counter
                cnt ={cnt}
                increment = {increment}
                decrement = {decrement}
                reset = {reset}
                color={color}
            />
        </div>
    );
};


//스탭2 변경된 곳

export default connect(
    //읽기
    (state) => ({
        //state.파일명.초기값 mapStateProps
        cnt : state.counter.count,
        color: state.color.color
    }),
    {increment, decrement, reset}//쓰기 액션값 
) (CounterContainer); 