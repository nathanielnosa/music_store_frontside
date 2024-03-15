const NewsLetter = () => {
  return (
    <section id="newsletter" className="py-5 bg-dark text-white">
      <div className="container py-5">
        <div className="text-center display-4">
          News Letter
          <p className="lead">You can get free music from us, subscribe now</p>
        </div>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <form action="">
              <div className="form-group">
                <input placeholder="Enter email" type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter