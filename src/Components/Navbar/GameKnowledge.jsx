import GameKnowledgeHome from '../GameKnowledge/GameKnowledgeHome.jsx'
import { Link, Outlet } from 'react-router-dom'

function GameKnowledge() {
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default GameKnowledge;