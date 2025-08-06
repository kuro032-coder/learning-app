import { Link } from "react-router-dom"

function Home(){
    return (
        <>
            <h1>資格試験学習アプリ</h1>
            <Link to='/question-form'>問題の登録</Link>
            <br />
            <Link to='/quiz-player-form'>問題実施</Link>
            <br />
            <Link to='/question-list-form'>問題一覧</Link>
        </>
    )
}

export default Home