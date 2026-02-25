import { useState, useRef } from 'react'
import './Team.css'
import teamImage from '../img/image.png'
import team2 from '../img/img2.jpeg'
import team3 from '../img/tem33.png'
export interface PersonSocial {
  instagram?: string
  twitter?: string
  linkedin?: string
}

export interface Person {
  name: string
  photo: string
  title: string
  bio: string
  social: PersonSocial
}

const PERSONS: Person[] = [
  {
    name: 'Rushikesh',
    photo: teamImage,
    title: '',
    bio: '<p>Hi, I’m Rushikesh Kapale — a Chemical Engineering undergraduate at IIT Madras (Batch of 2026) passionate about software engineering, AI, and full-stack development.</p>',
    social: {
      instagram: 'https://www.instagram.com/rushi_kesh_k/',
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/rushikesh-k/',
    },
  },
  {
    name: 'Anshika',
    photo: team2,
    title: '',
    bio: '<p>Hi, anshika here — a data science undergraduate at DSEU (Batch of 2028) passionate about data science ,engineering, AI, and ML and deep learning .</p>',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/anshika-dubey-796352328/',
    },
  },
  {
    name: 'Nishi saini',
    photo: team3,
    title: '',
    bio: '<p>Hi, Nishi here — a bcom hons.undergraduate at DDUC, Delhi University (Batch of 2028) passionate about finance, economics .</p>',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/nishi-s-9077a3283',
    },
  },
]

function Team() {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number | null>(null)
  const [isSelected, setIsSelected] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isOk, setIsOk] = useState(false)
  const [selectedPersonData, setSelectedPersonData] = useState<Person | null>(null)
  const selectedPersonRef = useRef<HTMLDivElement | null>(null)

  const selectPerson = (index: number, e: React.MouseEvent) => {
    if (isOk) {
      reset()
      return
    }
    const target = e.currentTarget as HTMLDivElement
    setSelectedPersonIndex(index)
    setIsSelected(true)
    selectedPersonRef.current = target
    target.classList.add('person-selected')
    target.setAttribute('style', `width:${target.offsetWidth}px;`)

    setSelectedPersonData(PERSONS[index])

    setTimeout(() => {
      if (!selectedPersonRef.current) return
      const el = selectedPersonRef.current
      const style = `width:${el.offsetWidth}px;height:${el.offsetHeight}px;left:${el.offsetLeft}px;top:${el.offsetTop}px;position:fixed`
      el.setAttribute('style', style)
    }, 400)

    setTimeout(() => {
      setIsReady(true)
      setIsOk(true)
    }, 420)
  }

  const reset = () => {
    setIsReady(false)
    const el = selectedPersonRef.current
    if (el) {
      setTimeout(() => el.classList.add('person-back'), 280)
      setTimeout(() => el.setAttribute('style', ''), 340)
      setTimeout(() => {
        setIsSelected(false)
        el.classList.remove('person-back', 'person-selected')
        setIsOk(false)
        setSelectedPersonData(null)
        setSelectedPersonIndex(null)
        selectedPersonRef.current = null
      }, 400)
    }
  }

  const containerClass = [
    'team-page-container',
    isSelected ? 'container-selected' : '',
    isReady ? 'container-ready' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className="team-section" id="team">
      <div className={containerClass}>
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-header-title">Our Team INSIGHT IGNITERS</h2>
          </div>
          <div className="person-list">
            {PERSONS.map((person, index) => (
              <div
                key={index}
                className={`person ${selectedPersonIndex === index ? 'person-selected' : ''}`}
                onClick={(e) => selectPerson(index, e)}
              >
                <img className="person-img" src={person.photo} alt={person.name} />
                <div className="person-details">
                  <h2 className="person-title">{person.name}</h2>
                  <p className="person-desc">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-detail">
          {isOk && selectedPersonData && (
            <div className="team-detail-inner">
              <div className="team-detail-left">
                <img src={selectedPersonData.photo} alt={selectedPersonData.name} className="team-detail-image" />
              </div>
              <div className="team-detail-right">
                <div className="team-detail-bio">
                  <div className="team-detail-header">
                    <h2 className="team-detail-name">{selectedPersonData.name}</h2>
                    <p className="team-detail-title">{selectedPersonData.title}</p>
                  </div>
                  <div
                    className="team-detail-bio-content"
                    dangerouslySetInnerHTML={{ __html: selectedPersonData.bio }}
                  />
                  <div className="social">
                    {selectedPersonData.social?.instagram && (
                      <a href={selectedPersonData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        Instagram
                      </a>
                    )}
                    {selectedPersonData.social?.twitter && (
                      <a href={selectedPersonData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        Twitter
                      </a>
                    )}
                    {selectedPersonData.social?.linkedin && (
                      <a href={selectedPersonData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        LinkedIn
                      </a>
                    )}
                  </div>
                  <button type="button" className="team-back-btn" onClick={reset}>
                    ← Back to team
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Team
