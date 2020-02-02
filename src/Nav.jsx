import React from "react";

export function Nav() {
  return (
    <nav className="Nav">
        <div className="NavTasks">
            <img src="./img/tasks_img.png" className="NavLogo" alt=""></img>
            <p>My tasks</p>
        </div>
        <ul>
            <li className="NavLi">
                <img src="./img/top_box.png" className="NavLogo" alt=""></img>
                <p>Inbox</p>
            </li>
            <li className="NavLi">
                <img src="./img/star.png" className="NavLogo" alt=""></img>
                <p>Focus</p>
            </li>
        </ul>
        <div className="Projects">
            <img src="./img/projects.png" className="NavLogo" alt=""></img>
            <p>My projects</p>
        </div>
    </nav>
  );            
}
