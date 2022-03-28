import { Link } from "react-router-dom";


const links=[
  {to:"/",title:"Home"},
  {to:"/history",title:"History"},
  {to:"/mystery",title:"Mystery"},
  {to:"/mythology",title:"Mythology"},
  {to:"/technology",title:"Technology"}
]
export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{
        display: "flex",justifyContent:"space-between",
        backgroundColor:"red"
      }}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="home">
        <Link to="/">Home</Link>
        </button>
        {<button className="history">
          <Link to="/section/history">History</Link>
          </button>}
        <button className="mystery">
        <Link to="/section/mystery">Mystery</Link>
        </button>
        <button className="mythology">
        <Link to="/section/mythology">Mythology</Link>
        </button>
        <button className="technology">
        <Link to="/section/technology">Technology</Link>
        </button>
      </div>
    </>
  );
};
