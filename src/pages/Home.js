import React, {useState} from 'react';
import '../App.css';

const Home = () => {
    const [cnt, setCnt] = useState(0);
    const [inpText, setInpText] = useState('');
    let [todos, setTodos] = useState([]);

    function saveTodo() {
        localStorage.setItem("Todo", JSON.stringify(todos));
    }

    const addText = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                id: cnt, 
                content: inpText
            }
        ]);
        setCnt(cnt + 1);
        setInpText('');
        saveTodo();
    }

    // function paintTodo(inpText) {
    //     const todolist = document.querySelector('#printZone ol')
    //     const list = document.createElement("li");
    //     const aaa = document.createElement("a");
    //     list.innerText = inpText.content;
    //     aaa.setAttribute('href', '#');
    //     aaa.addEventListener('click', clickX);
    //     aaa.innerText = 'β';
    //     list.appendChild(aaa);
    //     todolist.appendChild(list);
    // }

    function clickX(e){
        e.preventDefault();
        let li = e.currentTarget.parentElement;
        li.remove();
        todos = todos.filter((el) => 
            el.id !== Number(li.id));
        saveTodo();
    }

    // const savedTodo = localStorage.getItem("Todo");

    // if (savedTodo !== null) {
    //     const parsedTodo = JSON.parse(savedTodo);
    //     todos = parsedTodo;
    //     // parsedTodo.forEach(paintTodo);
    // }

return (
<article id='content'>
    <div id='contentArea'>
        <div id='titleZone'>
            <h1>π Today's Todolist</h1>
            <p>π  λͺ¨λ°μΌ κΈ°κΈ°μ μ΅μ ν λ νμ΄μ§μλλ€.</p>
        </div>
            <div id='printZone'>
                <ol>
                {
                    todos.map((el, i) => {
                        return (
                            <li key={i} id={i}>
                                {el.content}
                                <a href='/' onClick={clickX}>β</a>
                            </li>
                        );
                    })
                }
                </ol>
            </div>

    <form onSubmit={addText}>
        <div id='submitZone'>
            <div id='subject1'>
                <label htmlFor='text'>π μ€λμ ν μΌμ μλ ₯νκ³  λ±λ‘νμΈμ.</label>
            </div>
            <div id='textZone'>
            <input className='valueDel' type='text' placeholder='μλ ₯λ...' 
            value={inpText} onChange={e => setInpText(e.target.value)} name='text' required />
            <input type='submit' value='λ±λ‘ β' />
            </div>
        </div>
    </form>
    </div>
</article>
);
}

export default Home;