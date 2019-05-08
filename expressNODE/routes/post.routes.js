/* All posts */
router.get('/', async (req, res) => {
  await post.getPosts()
  .then(posts => res.json(posts))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})
