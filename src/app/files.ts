export interface File{
  id: number,
    imageName: string,
  images: string[]
}

export const fileList: File[] = [
  {
    id: 1,
    imageName: 'A.jpg',
    images: ['ananas.jpg','aparat.jpg', 'arbuz.jpg', 'autobus.jpg']
  },
  {
    id: 2,
    imageName: 'D.jpeg',
    images: ['dinozaur.jpg','dom.jpg', 'drzewo.jpg', 'drzwi.jpeg']
  },
  {
    id: 3,
    imageName: 'T.jpg',
    images: ['taczka.jpg','termometr.jpg', 'tygrys.png']
  },
  {
    id: 4,
    imageName: 'N.jpg',
    images: ['narty.jpg','nocnik.jpg', 'noz.jpg', 'nozyczki.jpg']
  }
];
