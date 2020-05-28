import React from 'react'
import Glossary from './section-rind/Glossary'
/*  
An example of how to use this switchboard is supplied with the 'Glossary' Component seen in section-rind/Glossary.js


To add new sections:
- import your Component above
- include extra if statement below. The number you use (convention is negative for added components) is the number used for the 'layout' element of a section in a JSON file. 
- done!

*/

export default function SectionSwitchboard(section) {
    
    
    if (section['layout'] == -1) {
        return <Glossary section={section}/>
    } else {
        return null
    }
}