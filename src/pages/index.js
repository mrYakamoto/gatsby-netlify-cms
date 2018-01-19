export default () => {

  return (
    <div>
      <header className='grid-container'>
        <div className='grid-x grid-padding-x'> 
          <h1 className='cell'>Header</h1>
        </div>
      </header>
      <nav className='grid-container'>Nav</nav>
      <main className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <aside className='cell medium-4'>Aside</aside>
          <section className='cell medium-8'>Section</section>
        </div>
      </main>
      <footer className='grid-container'>Footer</footer>
    </div>
  )
}
