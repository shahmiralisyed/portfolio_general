import React from 'react'

interface navigationSelected{
    active: string;
}

const NavigationDots = ({active}: navigationSelected) => {
    const navbarTabs = ['home', 'about', 'projects', 'contact', 'skills'];

  return (
    <div className='app__navigation'>
        {navbarTabs.map( (item, index) => 
                    <a href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#313BAC'}: {}}
                    />
               
        )}
    </div>
  )
}

export default NavigationDots