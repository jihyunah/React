//1. 액션 생성 - 모듈 이름을 앞에 붙여줌으로써 액션명 중복방지
const TIGER = 'animal/TIGER'
const DOG = 'animal/DOG'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'


// 2. 액션 내보내기
export const tiger = () => ({ type: TIGER })
export const dog = () => ({ type: DOG })
export const cat = () => ({ type: CAT })
export const chick = () => ({ type: CHICK })


// 3. 초기값
const initialState = { name: '', crying: '' }

// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state = initialState, action) => { //state: 현재상태, action: 액션 객체
    switch(action.type) {
        case TIGER:
            return { name: '호랑이', cryin: '어~흥' }
        case DOG:
            return { name: '강아지', cryin: '멍멍' }
        case CAT:
            return { name: '고양이', cryin: '야~옹' }
        case CHICK:
            return { name: '병아리', cryin: '삐약삐약' }
        default: //반드시 default가 들어가야 한다.
            return state
    }
}

export default reducer
//Component 가 아니라 순수 *.js 자바스크립트 파일이다.
 

