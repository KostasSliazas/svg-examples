;
(function (w, d) {
  'use strict'

  function Images (containers) {
    if (!(this instanceof Images)) {
      return new Images(containers)
    }
    this.container = d.getElementsByClassName(containers)
    this.image = null
    let isActive = false
    const fr = d.createDocumentFragment()
    const bg = d.createElement('div')
    const cn = d.createElement('div')
    const le = d.createElement('div')
    const ra = d.createElement('div')
    const xx = d.createElement('div')
    const be = d.createElement('div')
    const he = d.createElement('div')
    const al = d.createElement('div')
    al.className = 'alts'
    he.className = 'head'
    xx.className = 'iner'
    be.className = 'clos'
    le.className = 'rigt'
    ra.className = 'left'
    cn.className = 'cent'
    bg.className = 'imag hidden'
    bg.appendChild(he).appendChild(be)
    bg.appendChild(xx).appendChild(cn)
    he.appendChild(al)
    bg.appendChild(ra)
    bg.appendChild(le)
    fr.appendChild(bg)
    d.body.appendChild(fr)
    this.rigth = function () {
      if (this.image !== this.container[0].children[0].lastElementChild.children[0]) {
        cn.innerHTML = ''
        this.image = this.image.parentElement.nextElementSibling.children[0]
        al.innerHTML = this.image.getAttribute('alt')
        cn.appendChild(this.image.cloneNode())
      }
    }
    this.left = function () {
      if (this.image !== this.container[0].children[0].firstElementChild.children[0]) {
        cn.innerHTML = ''
        this.image = this.image.parentElement.previousElementSibling.children[0]
        al.innerHTML = this.image.getAttribute('alt')
        cn.appendChild(this.image.cloneNode())
      }
    }
    this.close = function () {
      isActive = false
      cn.innerHTML = ''
      d.body.style.overflow = 'auto'
      cn.parentElement.parentElement.className = 'imag hidden'
    }

    d.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.target.tagName === 'IMG' && e.target.parentNode.tagName === 'LI') {
        isActive = true
        this.image = e.target
        cn.innerHTML = ''
        al.innerHTML = this.image.getAttribute('alt')
        d.body.style.overflow = 'hidden'
        cn.appendChild(this.image.cloneNode())
        cn.parentElement.parentElement.classList.remove('hidden')
      }
      e.target.className === 'clos' && this.close()
      e.target.className === 'rigt' && this.rigth()
      e.target.className === 'left' && this.left()
    })
    w.addEventListener('keyup', (e) => {
      if (!isActive) return
      if (e.isComposing || e.key === 229) {
        return
      }
      if (e.key === 'ArrowLeft') {
        this.left()
      }
      if (e.key === 'ArrowRight') {
        this.rigth()
      }
      if (e.key === 'Escape') {
        this.close()
      }
    })
  }

  w.Images = Images
})(window, document)
