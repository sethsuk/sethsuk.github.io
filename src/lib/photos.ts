export interface Photo {
  src: string
  alt: string
  width: number
  height: number
  location?: string
  country?: string
  medium?: 'film' | 'digital'
  gear?: string
}

export const photos: Photo[] = [
  { src: '/photos/001.jpg', alt: 'Santa Monica, California shot on Sony a7C II', width: 1600, height: 1066, location: 'Santa Monica', country: 'California, USA', medium: 'digital', gear: 'Sony a7C II' },
  { src: '/photos/002.jpg', alt: 'Seattle, Washington shot on Ektachrome E100 film', width: 1600, height: 1066, location: 'Seattle', country: 'Washington, USA', medium: 'film', gear: 'Ektachrome E100' },
  { src: '/photos/003.jpg', alt: 'Boston, Massachusetts shot on FujiMax 400 film', width: 1600, height: 1066, location: 'Boston', country: 'Massachusetts, USA', medium: 'film', gear: 'FujiMax 400' },
  { src: '/photos/004.jpg', alt: 'Santa Monica, California shot on Sony a7C II', width: 1600, height: 1066, location: 'Santa Monica', country: 'California, USA', medium: 'digital', gear: 'Sony a7C II' },
  { src: '/photos/005.jpg', alt: 'Hakone, Japan shot on LomoChrome Purple film', width: 1066, height: 1600, location: 'Hakone', country: 'Japan', medium: 'film', gear: 'LomoChrome Purple' },
  { src: '/photos/006.jpg', alt: 'Seattle, Washington shot on Ektachrome E100 film', width: 1066, height: 1600, location: 'Seattle', country: 'Washington, USA', medium: 'film', gear: 'Ektachrome E100' },
  { src: '/photos/007.jpg', alt: 'Phuket, Thailand shot on Vision3 250D film', width: 1600, height: 1066, location: 'Phuket', country: 'Thailand', medium: 'film', gear: 'Vision3 250D' },
  { src: '/photos/008.jpg', alt: 'Seoul, South Korea shot on Superia Premium 400 film', width: 1600, height: 1066, location: 'Seoul', country: 'South Korea', medium: 'film', gear: 'Superia Premium 400' },
  { src: '/photos/009.jpg', alt: 'Santorini, Greece shot on Sony a7C II', width: 1600, height: 1066, location: 'Santorini', country: 'Greece', medium: 'digital', gear: 'Sony a7C II' },
  { src: '/photos/010.jpg', alt: 'Los Angeles, California shot on Sony a7C II', width: 1600, height: 1066, location: 'Los Angeles', country: 'California, USA', medium: 'digital', gear: 'Sony a7C II' },
]

export const featuredPhotos = photos.slice(0, 4)
