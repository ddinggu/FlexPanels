# Flex Panels Image Gallery

[Vanlina JavaScript 30](https://javascript30.com/)의 5번 토픽 과제 


## Discription
요소들을 정렬해주는 기능인 flex와 애니메이션을 customize해주는 transition에 대해 알아보았다.

![image](https://github.com/ddinggu/FlexPanels/blob/master/screenshot.png?raw=true)


#### Flex

부모 컨테이너 요소에 ```display : flex``` 속성을 이용하여 자식 요소들을 필요에 맞게 정렬할 수 있다. 

여러가지 방법이 있으나 이번 과제에서는 defalut값인 가로정렬 및 클릭 이벤트를 통해 클릭 대상의 flex값을 변경시키는 것으로 정렬 값을 변화시키는 방법을 이용했다.

#### Transition

각 요소의 style 속성값이 변할때 동적인 변화를 보여주기 위해 ```transition : {timing} {speed}``` 를 이용해 사용자친화적인 변화를 보여 주었다.

#### Animation Transition Method

애니메이션 효과를 갖고 있는 CSS 클래스값을 미리 설정한 후 이벤트에 따라 클래스가 toggle되는 형식으로 제작하였다. 

```element.classList.toggle(class)```