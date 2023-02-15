import React, { useState } from 'react'
import './App.css';
import Menu from './components/Menu';
import Category from './components/Category';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))]
console.log(allCategories)

const App = () => {
    const [menuItem, setMenuItem] = useState(items);
    const [Categories, setCategories] = useState(allCategories);

    const filterItems =(category) =>{
        if(category ===  'all'){
            setMenuItem(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItem(newItems)
    };
  return (
    <main>
        <section className="menu section">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <Category categories={allCategories} filterItems={filterItems}/>
            <Menu items={menuItem}/>
            
        </section>
    </main>
  )
}

export default App