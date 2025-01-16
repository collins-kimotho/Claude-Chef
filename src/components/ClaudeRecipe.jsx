import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const ClaudeRecipe = (props) => {
  return (
    <section className="flex flex-col items-center justify-center m-4 text-sm max-w-screen-md overflow-hidden mx-auto w-full mx-auto" aria-live='polite'>
      <h2 className='font-bold text-lg mb-2'>The Hugsy Chef Recommends:</h2>
      <ReactMarkdown className='prose lg:prose-xl p-2 overflow-hidden rounded-sm' remarkPlugins={[remarkGfm]}>
         {props.recipe}
      </ReactMarkdown>
      
    </section>
  )
}

export default ClaudeRecipe