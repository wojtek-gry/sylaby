export interface File{
  id: number,
    imageName: string,
  images: string[]
}

export const fileList: File[] = [
  {
    id: 1,
    imageName: 'AR.png',
    images: ['arbuz.jpg']
  },
  {
    id: 2,
    imageName: 'DI.png',
    images: ['dinozaur.jpg']
  },
  {
    id: 3,
    imageName: 'TY.png',
    images: ['tygrys.png']
  },
  {
    id: 4,
    imageName: 'NO.png',
    images: ['nocnik.jpg', 'nozyczki.jpg']
  }
];
