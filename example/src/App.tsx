import React from 'react'

import TabContainer, { TabItem } from 'tabs-react-component';

import 'tabs-react-component/dist/index.css'

const App = () => {
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
  </div>
}

export default App
