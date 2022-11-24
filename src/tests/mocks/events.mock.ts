import { IEvents } from '../../interfaces/IEvents';

const mockEvent: IEvents & { _id: string } = {
  title: 'Rock in Rio IX',
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg',
  producer: 'Rock in Rio',
  genre: ['Festival', 'Musical', 'Rock', 'Pop', 'Funk'],
  private: false,
  description: 'Rock in Rio is a recurring music festival originating in Rio de Janeiro, Brazil. It has been held in Lisbon, Madrid, and Las Vegas in recent years, and is scheduled to return to Rio in 2019. The festival was first held in 1985 and has been held every two years since 2001. It is the largest music festival in the world, with 1.5 million people attending the 2013 festival in Rio de Janeiro.',
  attractions: [
    {
      title: 'Iron Maiden',
      description: 'Iron Maiden é uma banda inglesa de heavy metal formada em Leyton, East London, em 1975 pelo baixista e compositor Steve Harris.',
      image: 'https://m.media-amazon.com/images/I/81ac5d5+sCL._AC_SL1500_.jpg',
      startDate: new Date('2021-09-25T20:00:00.000Z'),
      endDate: new Date('2021-09-25T22:00:00.000Z'),
      local: 'Palco Mundo',
    },
    {
      title: 'Anitta',
      description: 'Anitta é uma cantora, compositora, atriz, dançarina, modelo e empresária brasileira. É considerada uma das maiores artistas pop do Brasil e uma das mais influentes do mundo.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Anitta_Latin_Grammys_2021.jpg/375px-Anitta_Latin_Grammys_2021.jpg',
      startDate: new Date('2021-09-25T22:00:00.000Z'),
      endDate: new Date('2021-09-25T23:00:00.000Z'),
      local: 'Palco Mundo',
    },
    {
      title: 'MonoBloco',
      description: 'MonoBloco é uma banda de samba rock brasileira, formada em 1994, no Rio de Janeiro. O grupo é conhecido por suas apresentações de carnaval, onde toca em um caminhão de lixo.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monobloco-rj-2007.jpg/420px-Monobloco-rj-2007.jpg',
      startDate: new Date('2021-09-25T20:00:00.000Z'),
      endDate: new Date('2021-09-25T22:00:00.000Z'),
      local: 'Palco Sunset',
    },
  ],
  tickets: [
    {
      title: 'Pista',
      description: 'Pista',
      startDate: new Date('2021-06-25T20:00:00.000Z'),
      endDate: new Date('2021-09-25T23:00:00.000Z'),
      solds: 0,
      price: 100,
      quantity: 1000,
    },
    {
      title: 'Camarote',
      description: 'Camarote',
      startDate: new Date('2021-06-25T20:00:00.000Z'),
      endDate: new Date('2021-09-25T23:00:00.000Z'),
      solds: 0,
      price: 2000,
      quantity: 100,
    },
  ],
  address: {
    title: 'Parque Olímpico',
    cep: '22775-000',
    street: 'Avenida Embaixador Abelardo Bueno',
    number: '3401',
    state: 'RJ',
    city: 'Rio de Janeiro',
  },
  _id: '6322c2ea981edca6bc80687b',
};

export default mockEvent;