export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export const photos: Photo[] = [
  { src: '/photos/001.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/002.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/003.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/004.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/005.jpg', alt: '', width: 1066, height: 1600 },
  { src: '/photos/006.jpg', alt: '', width: 1066, height: 1600 },
  { src: '/photos/007.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/008.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/009.jpg', alt: '', width: 1600, height: 1066 },
  { src: '/photos/010.jpg', alt: '', width: 1600, height: 1066 },
]

export const featuredPhotos = photos.slice(0, 4)
