import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const ClaudeRecipe = (props) => {
  return (
    <section className="flex  flex-col items-center justify-center my-8 text-sm p-4" aria-live='polite'>
      <h2 className='font-bold text-lg mb-4'>The Hugsy Chef Recommends:</h2>
      <ReactMarkdown className='prose' remarkPlugins={[remarkGfm]}>
         {props.recipe}
      </ReactMarkdown>
      
    </section>
  )
}

export default ClaudeRecipe