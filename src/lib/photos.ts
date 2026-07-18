export interface Photo {
  src: string
  alt: string
  width: number
  height: number
  location?: string
  medium?: 'film' | 'digital'
}

export const photos: Photo[] = [
  { src: '/photos/001.jpg', alt: '', width: 1600, height: 1066, location: 'Santa Monica, USA', medium: 'digital' },
  { src: '/photos/002.jpg', alt: '', width: 1600, height: 1066, location: 'Seattle, USA', medium: 'film' },
  { src: '/photos/003.jpg', alt: '', width: 1600, height: 1066, location: 'Boston, USA', medium: 'film'},
  { src: '/photos/004.jpg', alt: '', width: 1600, height: 1066, location: 'Santa Monica, USA', medium: 'digital'},
  { src: '/photos/005.jpg', alt: '', width: 1066, height: 1600, location: 'Hakone, Japan', medium: 'film'},
  { src: '/photos/006.jpg', alt: '', width: 1066, height: 1600, location: 'Seattle, USA', medium: 'film'},
  { src: '/photos/007.jpg', alt: '', width: 1600, height: 1066, location: 'Phuket, Thailand', medium: 'film'},
  { src: '/photos/008.jpg', alt: '', width: 1600, height: 1066, location: 'Seoul, South Korea', medium: 'film'},
  { src: '/photos/009.jpg', alt: '', width: 1600, height: 1066, location: 'Santorini, Greece', medium: 'digital'},
  { src: '/photos/010.jpg', alt: '', width: 1600, height: 1066, location: 'Los Angeles, USA', medium: 'digital'},
]

export const featuredPhotos = photos.slice(0, 4)
