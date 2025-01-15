import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const ClaudeRecipe = (props) => {
  return (
    <section className="flex items-center justify-center my-8 text-sm p-4">
      <ReactMarkdown className='prose' remarkPlugins={[remarkGfm]}>
         {props.recipe}
      </ReactMarkdown>
      
    </section>
  )
}

export default ClaudeRecipe