import { BrowserRouter, Route, Switch, NavLink, useParams, useRouteMatch, useLocation, useHistory, Redirect } from 'react-router-dom';

const posts = [
  { id: 1, title: 'React', content: 'React Tutorial' },
  { id: 2, title: 'Vue', content: 'Vue.js Tutorial' },
  { id: 3, title: 'Laravel', content: 'Laravel Tutorial' },
]

function App() {
  const authenticated = true;
  return (
  <BrowserRouter>
    <h1>React-Router-Dom Learn</h1>
    <ul>
      <li>
        <NavLink activestyle={{ fontWeight: 'bold', color: 'red',}} exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activestyle={{ fontWeight: 'bold', color: 'red',}} to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activestyle={{ fontWeight: 'bold', color: 'red',}} to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink activestyle={{ fontWeight: 'bold', color: 'red',}} to="/posts">Posts</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/posts" >
        {authenticated ? <Posts /> : <Redirect to="/"/>}
      </Route>
      <Route path="/posts/:id" >
        {authenticated ? <Post /> : <Redirect to="/"/>}
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}
function Contact() {
  return <h2>Contact</h2>
}
function Posts() {
  const { path, url, param, isExact } = useRouteMatch();
  // console.log("path :",path );
  // console.log("url :", url);
  console.log("param :", param);
  // console.log("isExact :", isExact);
  // console.log("useRouteMatch :",useRouteMatch());
  // console.log("useLocation :",useLocation());
  // console.log("useHistory :",useHistory());
  return (
    <>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`${url}/${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`} component={Post} />
    </>
  )
}

function Post() {

  // console.log("useRouteMatch :",useRouteMatch());
  // console.log("useLocation :",useLocation());
  // console.log("useHistory :",useHistory());

  const query = new URLSearchParams(useLocation().search);
  console.log(query);
  console.log(query.get('sort'));

  // const id = Number(props.match.params.id);
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  return (
    <>
      <h2>Post List</h2>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </>
  )
}

// 404用
function NotFound() {
  return <h2>Not Found Page</h2>
}

export default App;