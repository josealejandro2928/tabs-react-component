import React, { useState } from 'react'

import TabContainer, { TabItem } from 'tabs-react-component';

import 'tabs-react-component/dist/index.css'

const App = () => {
  const [tabsDynamic, setTabsDynamic] = useState<Array<{ title: string, content: string }>>([{ title: 'Tab1', content: 'Example content' }]);

  const [newTab, setNewTab] = useState({ title: '', content: '' })

  return <div className='container'>
    <h2>
      1- Basic Usage
    </h2>
    <TabContainer color='#3949ab' borderLine >
      <TabItem name='tab1'>
        <h3>Content1</h3>
      </TabItem>
      <TabItem name='tab2'>
        <h3>Content2</h3>
      </TabItem>
      <TabItem name='tab3'>
        <h2>Content3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
          officia voluptates ipsum exercitationem blanditiis repudiandae ullam, quos beatae,
          ipsa expedita! Maxime odio tempore suscipit. Nemo mollitia nam atque vel!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
          officia voluptates ipsum exercitationem blanditiis repudiandae ullam, quos beatae,
          ipsa expedita! Maxime odio tempore suscipit. Nemo mollitia nam atque vel!</p>
      </TabItem>
    </TabContainer>
    <h2>
      2- Changing header style
    </h2>
    <TabContainer indicatorStyle="button" color='#66bb6a' backgroundColor='#eeeeee'>
      <TabItem name='tab1'>
        <h3>Content1</h3>
      </TabItem>
      <TabItem name='tab2'>
        <h3>Content2</h3>
      </TabItem>
      <TabItem name='tab3'>
        <h2>Content3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
          officia voluptates ipsum exercitationem blanditiis repudiandae ullam, quos beatae,
          ipsa expedita! Maxime odio tempore suscipit. Nemo mollitia nam atque vel!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
          officia voluptates ipsum exercitationem blanditiis repudiandae ullam, quos beatae,
          ipsa expedita! Maxime odio tempore suscipit. Nemo mollitia nam atque vel!</p>
      </TabItem>
    </TabContainer>

    <h2>
      3- Lazy Loading, initial active tab and different transition speed
    </h2>
    <TabContainer lazy activeIndex={1} transitionMs={750} color='#3949ab' borderLine >
      <TabItem name='tab1'>
        <div style={{ padding: '1rem' }}>
          <iframe width="800" height="400" src="https://www.youtube.com/embed/MNX7HgcWqHc" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

      </TabItem>
      <TabItem name='tab2'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, doloremque itaque ipsam ducimus sunt minus,
          nemo veniam error, neque corporis architecto in laudantium unde! Assumenda consequuntur eos magnam asperiores? Animi!
        </p>

      </TabItem>
      <TabItem name='tab3'>
        <h2>Content3</h2>
        <img src="/full.jpg" width={800} />
      </TabItem>
    </TabContainer>

    <h2>
      4 - Cascade Usage
    </h2>
    <TabContainer color='#1e88e5' borderLine >
      <TabItem name='tab1'>
        <div style={{ padding: '1rem' }}>
          <TabContainer color='#1e88e5' backgroundColor='#bbdefb' indicatorStyle="button" >
            <TabItem name='subtab1'>
              <h3>Sub content 1</h3>
            </TabItem>
            <TabItem name='subtab2'>
              <h3>Sub content 2</h3>
            </TabItem>
            <TabItem name='subtab3'>
              <h3>Sub content 3</h3>
            </TabItem>
            <TabItem name='subtab4'>
              <h3>Sub content 4</h3>
            </TabItem>
          </TabContainer>

        </div>

      </TabItem>
      <TabItem name='tab2'>
        <div style={{ padding: '1rem' }}>
          <TabContainer color='#1e88e5' backgroundColor='#bbdefb' indicatorStyle="button" >
            <TabItem name='subtab5'>
              <h3>Sub content 5</h3>
            </TabItem>
            <TabItem name='subtab6'>
              <h3>Sub content 6</h3>
            </TabItem>
            <TabItem name='subtab7'>
              <h3>Sub content 7</h3>
            </TabItem>
            <TabItem name='subtab8'>
              <h3>Sub content 8</h3>
            </TabItem>
          </TabContainer>
        </div>
      </TabItem>
      <TabItem name='tab3'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam unde dolor praesentium mollitia o
          dit dicta corporis nihil adipisci ipsam natus, rerum itaque eveniet obcaecati illo consectetur sequi vel! Autem?
        </p>
      </TabItem>
      <TabItem name='tab4'>
        <h3>
          Lorem, ipsum dolor sit amet consectetur ....
        </h3>
      </TabItem>

    </TabContainer>

    <h2>
      5 - Dynamic Usage
    </h2>
    <TabContainer color='#3949ab' borderLine >
      {tabsDynamic.map((el, index) => (
        <TabItem key={index} name={el.title}>
          <div style={{ padding: '1rem' }}>
            {el.content}
          </div>
        </TabItem>))}
    </TabContainer>
    <div className='form'>
      <h3>Create a new tab</h3>
      <input value={newTab.title} onChange={(e) => { setNewTab({ ...newTab, title: e.target.value }) }} type="text" placeholder='Name of the new tab' />
      <textarea value={newTab.content} onChange={(e) => { setNewTab({ ...newTab, content: e.target.value }) }} placeholder='Content'></textarea>
      <button onClick={() => {
        setTabsDynamic([...tabsDynamic, newTab])
        setNewTab({ title: '', content: '' });
      }} disabled={!newTab.title || !newTab.content}> Add</button>
    </div>

  </div>
}

export default App
