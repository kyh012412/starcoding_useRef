# useRef에 관하여
```js
const ref = useRef(value);
```
를 하게 되면
ref안의 current라는 키값에 value를 저장함
```js
ref = { current: value}
```
이런 느낌?
ref 오브젝트는 언제든지 수정이 가능
ref는 컴포넌트가 소멸될 때 까지(unmount전 까지) 계속 유지됨

## useRef가 유용한 두 가지 상황
* 저장공간으로 사용할때
State의 변화 -> (리)랜더링 -> 컴포넌트 내부 변수들의 초기화
Ref의 변화 -> NO 리랜더링 -> 변수들의 값이 유지됨 (불필요한 리랜더링을 막을 수 있게 됨)
State의 변화 -> 리렌더링 -> 그래도 Ref의 값은 유지됨
* Dom 요소에 접근
input요소 클릭없이 focus를 줄 수 있음
(바닐라 js 느낌)

### Dom요소에 접근
```js
const ref = useRef(value);
```
```html
<input ref={ref}/>
```
