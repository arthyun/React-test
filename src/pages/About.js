import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import '../App.css';

// 아코디언 콤퍼넌트 추가
class AccordionExampleStyled extends Component {
state = { activeIndex: 0 }

handleClick = (e, titleProps) => {
const { index } = titleProps
const { activeIndex } = this.state
const newIndex = activeIndex === index ? -1 : index

this.setState({ activeIndex: newIndex })
}

render() {
const { activeIndex } = this.state

return (
    <Accordion styled>
    <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={this.handleClick}
    >
        <Icon name='dropdown' />
        목록을 작성해 보자
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 0}>
        <p>
        여러분이 보통 작성하는 'To Do list'는 처리할 일을 주구장창 나열만 해 놓은 표겠지요. 그거 갖다 버리셔도 됩니다. 대신에 1-3-5 목록 작성법을 한번 해보세요. 하는 법은 이렇습니다. 먼저, 할 일 큰 거 하나랑 중간 사이즈 3개, 그리고 내일 해도 될만한 작은 일 5개를 적어보세요. 이 목록을 전날 밤에 미리 작성해 두세요. 그러면 아침에 일어나서 허겁지겁 할 일들을 기억해내려고 용쓸 필요가 없어지겠지요. 일정이 너무 바빠서 새로운 할 일들이 계속 생겨나는 경우 전날 밤 목록을 작성할 때부터 꽉 채우지 말고 빈 공간을 남겨두세요. 목록이 필요에 따라 유동적으로 생성될 수 있도록 말이지요. 이 1-3-5 목록은 그 동안 여러분이 할일 목록을 그대로 다 따르지 못해 가졌던 부담감을 덜어줍니다. 몇몇 개의 큰, 중간의, 그리고 작은 사이즈의 업무들을 해결하는 건 덜 어려우니까요. 현실적으로 할 수 있는 목록을 작성하게 된다니 얼마나 다행인가요. 이 목록은 여러분이 주체적으로 업무를 행하도록 도와줍니다. 1-3-5 목록대로 업무를 처리한다는 것은 예전처럼 ‘어쩌다 보니 이 업무를 먼저 끝내고 저 업무를 나중에 하는’ 식의 패턴이 아니라 여러분이 먼저 해야겠다고 스스로 고른 업무부터 끝내는 걸 의미하니까요.  
        </p>
    </Accordion.Content>

    <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={this.handleClick}
    >
        <Icon name='dropdown' />
        불릿 저널 양식으로 'TO DO LIST'를 작성해 보자
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 1}>
        <p>
        그 동안 'To Do list'를 작성하는 데에 문제점을 하나 꼽으라면? 아마도 업무과정을 되짚어볼 방도가 없다는 거겠지요. 한 업무를 마치면 줄을 그어서 없애고 다시는 보지 않습니다. 하지만 예전 업무과정을 되짚고 언제 어떤 일을 끝냈는지 달력처럼 정리할 필요가 있습니다. 인터넷상에서 제공하는 몇몇 To Do list 작성 서비스는 과거 목록을 저장한 후 나중에도 다시 확인해 볼 수 있도록 도와줍니다. 그런데 연필과 종이를 가지고도 이와 같은 기능을 구현해 낼 수 있습니다. 불릿 저널 방식으로 목록을 작성하면 나중에 다시 보기가 편합니다. 쪽수랑 색인, 그리고 체크박스를 이용하는 방법이지요. 라이더 캐롤의 비디오를 보시면 불릿 저널이 어떤 건지 그리고 불릿 저널방법을 사용해서 목록을 작성하려면 어떻게 해야 되는지 알 수 있습니다. 먼저, 그 달에 처리한 업무과정을 저장해 둘 달력이 매달 한 페이지씩 필요합니다. 매일매일 그날의 목록을 작성하고요. 자잘한 업무들은 한데 묶어 따로 목록을 만들어 둡니다. 그리고 매달 말일이 되면 아직 처리 못한 업무들을 이월시키면 됩니다. 모든 업무는 색인 페이지를 통해 찾아볼 수 있습니다. 그러니까 제일 먼저 할 일이 바로 쪽수를 적고 그 쪽수에 해당하는 게 몇 월인지 알려주는 색인페이지를 만드는 것이지요. 
        </p>
    </Accordion.Content>

    <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={this.handleClick}
    >
        <Icon name='dropdown' />
        DONE LIST를 작성해 보자
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 2}>
        <p>
        어쩌면 지금까지 우리는 To-Do list를 잘못 이해하고 있었는지도 모릅니다. Done list를 작성하면 우리가 무엇을 달성했는지 확인할 수 있으므로, 이 목록을 작성하는 것은 하지 못한 일이 담긴 목록을 마주해야 하는 부담감에 비해 엄청나게 희망적이지요. 남은 일을 적는 것 대신에 끝낸 일을 적어보세요. 여러분의 성취 정도를 목록에 담아보는 겁니다. 여러분이 잘 한 걸 기록해 두세요. 넷스케이프의 창립자인 마크 안드리슨은 이 목록을 “Anti-Todo list”라고 부릅니다. 아니면 다른 독창적인 이름을 붙여서 사용하는 사람들도 있습니다만 뭐라고 부르든 결국 얻고자 하는 결과와 목적은 같습니다. 바로 내가 무엇을 이뤘는지 확인하는 과정을 통해 스스로에 대한 자존감을 높이고 내일 할 일에 대해 동기부여 받는 것이지요. ‘To Do list’는 여러분이 한 걸음 한 걸음 다음 업무로 나아갈 수 있게 채찍질 해주지요. Done list의 경우 걸어나가는 행위 자체를 가능하게 해줍니다. iDoneThis같은 어플의 경우 Done list를 작성하는 서비스를 제공합니다. 매일매일 일기 쓰듯 그날의 한일 목록을 쌓아나가는 것이지요. 이 방법은 이미 다년간 많은 사람들에게 동기부여 역할을 해 왔으며 To Do list 중 가장 잘 한 부분에 초점을 맞출 수 있는 좋은 방법입니다. 
        </p>
    </Accordion.Content>
    <Accordion.Title
        active={activeIndex === 3}
        index={3}
        onClick={this.handleClick}
    >
        <Icon name='dropdown' />
        일 처리 업무를 도와주는 다른 유용한 방법
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 3}>
        <p>
        인기 있는 시간관리 앱 Getting Things Done(GTD)은 여러분의 생산력을 증대시키기 위해 습관을 변화하도록 도와줍니다. 훌륭한 방법이지요. 그런데, 좀 쉬운 사용법은 없을까요? 레오 바뷰타가 이에 알맞은 좋은 대안을 내 놓았습니다. 바로 Zen to Done(ZTD)라는 앱인데요, 이 앱은 GTD의 방식을 차용하되 약간 바꿔서 단순화하는데 초점을 맞췄습니다. 이 앱에 의하면 “중요한 일에 집중해서 그 일을 잘 처리하도록 하라”고 합니다. 좋은 말씀이지요. 그런데 그걸 어떻게 하라는 말일까요? ZTD 역시 GTD처럼 습관을 변화시키도록 도와줍니다. 습관을 하나씩 바꿔서 업무처리를 좀더 효율적으로 하는 시스템을 만들어 내지요. 이 앱은 다음과 같은 점에 중점을 둡니다.
        </p>
    </Accordion.Content>
    <Accordion.Title
        active={activeIndex === 4}
        index={4}
        onClick={this.handleClick}
    >
        <Icon name='dropdown' />
        TO-STOP-DOING LIST로 시간 벌기
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 4}>
        <p>
        'To Do list'의 정반대선상에 있는 건 바로 To-Stop-Doing list이겠지요. 작가 크리스 길아보는 매년 새해가 밝아오면 이 목록을 작성한다고 합니다. 우리가 인생에 더하고 싶은 일을 목록으로 만들어 대는 동안 길아보는 빼고 싶은 일을 목록으로 만드는 거지요. 길아보의 책 “남들과 다르게 사는 기술”에서 다음과 같이 말합니다. “쓸데없는 일에 시간 낭비하지 않는 가장 좋은 방법은 바로 ‘To-Stop-Doing list’를 만드는 것이다. 이 목록은 당신에게 좌절감을 안기는 게 뭔지 파악할 수 있게 도와주기 때문에 ‘To Do list’보다 낫다. To-Stop-Doing list란 말 그대로 당신이 더 이상 하고 싶지 않은 일들을 목록으로 만드는 것이다” 저도 길아보의 책을 읽은 독자 중 한 명으로서 매년 To-Stop-Doing list를 작성하고 있습니다.
        </p>
    </Accordion.Content>
    </Accordion>
)
}
}

function About() {
    return (
    <>
        <h2>About</h2>   
        <div className='imgBox'>
            <img src='./images/about01.jpg' alt='aboutImg'/>
            <div className='imgBoxRight'>
                <h3>Todo-list란</h3>
                <p>해야 하는 일을 목록 별로 작성해 두고는 전부 끝내는데 실패한 적이 얼마나 많은지 모릅니다. 
                    다들 하루를 효율적으로 보내려면 'To Do list'를 작성하는 게 꼭 필요하다고 생각하실 거예요. 
                    제가 아는 사람들 거의 다 목록을 작성해두지요. 작성을 안 해둔 사람들은 작업할 일이 무엇이었는지 기억이 안 난다면서 목록을 만들어 놓을 걸 하고 후회하지요. 
                    저도 마음 같아서는 잘 하고 싶은데 목록대로 지키는 데에 항상 실패합니다. 제가 뭘 잘못한 걸까요? 글쎄요. 
                    할 일을 목록으로 작성해 두는 것은 이론상 합리적이지만 섣불리 실생활에 적용하다가 큰 코 다칠 수 있습니다. 
                    실패한 데에는 다양한 이유가 있겠지요. 사소한 잡무로 꾸물대다가 진짜 중요한 일을 늦게 처리할 수도 있고요. 
                    상황이 계속 바뀌다 보니 하루가 끝나갈 즈음에는 도저히 목록대로 할 상황이 아닐 수도 있습니다. 
                    작성할 때는 동기부여가 될 줄 알았던 목록이 어느 순간 스스로에게 잔소리를 하는 것 같이 느껴질 수도 있고요. 
                    일을 처리 하는데 있어서 'To Do list'는 여러 단점을 가지고 있습니다. 가끔은 목록에 휘둘리는 느낌이 들기도 할 겁니다. 
                    이런 경우 목록양식에 변화를 줄 수 있습니다. 인터넷에만 해도 어떻게 하면 효과적인 목록을 작성할 수 있는지 알려주는 정보가 넘쳐 나지요. 
                    작은 것부터 시작하라든 둥, 상쾌한 하루를 시작해보라는 둥, 우선순위부터 설정하라는 둥 다양한 의견들이 있지요. 여기 사람들이 잘 모르는 목록 작성법이 있습니다. 
                    'To Do list'를 이렇게 작성해보면 어떨까요? </p>
            </div>
        </div>
        <AccordionExampleStyled />
    </>
    );
}

export default About;