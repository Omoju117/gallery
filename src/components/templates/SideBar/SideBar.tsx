import { VFC } from 'react';
import './SideBar.css';

const toggleStretch = ()=>{
  const target = document.querySelector('.sidebar-container');
  target?.classList.toggle('stretch');
  console.log('stretch');
  
}

const SideBar:VFC = () => (
  <>
    <div className="sidebar-container">
      <ul>
       <li>
          work
        </li>
        <li>
          shop
        </li>
        <li>
          about
        </li>
      </ul>
      <button type="button" onClick={()=>toggleStretch()}>
          stretch
        </button>
    </div>
  </>
);


export default SideBar;