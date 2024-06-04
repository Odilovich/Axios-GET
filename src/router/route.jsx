import { Albums, Comments, Photos, Users, Todos, Posts } from "../components" 
import PersonIcon from '@mui/icons-material/Person';

const routes = [
    {
        path: '/',
        element: <Users/>,
        title: 'Users',
        icon: <PersonIcon/>
    },
    {
        path: '/posts',
        element: <Posts/>,
        title: 'Posts',
        icon: <PersonIcon/>
    },
    {
        path: '/comments',
        element: <Comments/>,
        title: 'Comments',
        icon: <PersonIcon/>
        
    },
    {
        path: '/albums',
        element: <Albums/>,
        title: 'Albums',
        icon: <PersonIcon/>
    },
    {
        path: '/photos',
        element: <Photos/>,
        title: 'Photos',
        icon: <PersonIcon/>
    },
    {
        path: '/todos',
        element: <Todos/>,
        title: 'Todos',
        icon: <PersonIcon/>
    }
]

export default routes