export type CollectionType = "Photos" | "Videos" | "Documents";

export interface Collection {
  id: number;
  title: string;
  type: CollectionType;
  itemCount: number;
  thumbnail: string;
  locked?: boolean;
}

export const INITIAL_COLLECTION: Collection[] = [
  {
    id: 1,
    title: "Collection 1",
    type: "Videos",
    itemCount: 37,
    thumbnail:
      "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
  },
  {
    id: 2,
    title: "Collection 2",
    type: "Videos",
    itemCount: 77,
    thumbnail:
      "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
  },
  {
    id: 3,
    title: "Collection 3",
    type: "Videos",
    itemCount: 14,
    thumbnail:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
  },
  {
    id: 4,
    title: "Collection 4",
    type: "Photos",
    itemCount: 69,
    thumbnail:
      "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
  },
  {
    id: 5,
    title: "Collection 5",
    type: "Photos",
    itemCount: 13,
    thumbnail:
      "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
  },
  {
    id: 6,
    title: "Collection 6",
    type: "Photos",
    itemCount: 24,
    thumbnail:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },
  {
    id: 7,
    title: "Collection 7",
    type: "Photos",
    itemCount: 96,
    thumbnail:
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
  },
  {
    id: 8,
    title: "Collection 8",
    type: "Documents",
    itemCount: 44,
    thumbnail:
      "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
  },
  {
    id: 9,
    title: "Collection 9",
    type: "Photos",
    itemCount: 64,
    thumbnail:
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
  },
  {
    id: 10,
    title: "Collection 10",
    type: "Documents",
    itemCount: 94,
    thumbnail:
      "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
  },
  {
    id: 11,
    title: "Collection 11",
    type: "Photos",
    itemCount: 13,
    thumbnail:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
  },
  {
    id: 12,
    title: "Collection 12",
    type: "Photos",
    itemCount: 4,
    thumbnail:
      "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
  },
  {
    id: 13,
    title: "Collection 13",
    type: "Photos",
    itemCount: 82,
    thumbnail:
      "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
  },
  {
    id: 14,
    title: "Collection 14",
    type: "Documents",
    itemCount: 2,
    thumbnail:
      "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg",
  },
  {
    id: 15,
    title: "Collection 15",
    type: "Documents",
    itemCount: 93,
    thumbnail:
      "https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg",
  },
  {
    id: 16,
    title: "Collection 16",
    type: "Photos",
    itemCount: 75,
    thumbnail:
      "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
  },
  {
    id: 17,
    title: "Collection 17",
    type: "Documents",
    itemCount: 80,
    thumbnail:
      "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
  },
  {
    id: 18,
    title: "Collection 18",
    type: "Documents",
    itemCount: 88,
    thumbnail: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg",
  },
  {
    id: 19,
    title: "Collection 19",
    type: "Videos",
    itemCount: 94,
    thumbnail:
      "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg",
  },
  {
    id: 20,
    title: "Collection 20",
    type: "Documents",
    itemCount: 28,
    thumbnail:
      "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg",
  },
  {
    id: 21,
    title: "Collection 21",
    type: "Documents",
    itemCount: 93,
    thumbnail:
      "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg",
  },
  {
    id: 22,
    title: "Collection 22",
    type: "Documents",
    itemCount: 5,
    thumbnail:
      "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg",
  },
  {
    id: 23,
    title: "Collection 23",
    type: "Photos",
    itemCount: 88,
    thumbnail: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
  },
  {
    id: 24,
    title: "Collection 24",
    type: "Photos",
    itemCount: 97,
    thumbnail:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg",
  },
  {
    id: 25,
    title: "Collection 25",
    type: "Documents",
    itemCount: 56,
    thumbnail:
      "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg",
  },
  {
    id: 26,
    title: "Collection 26",
    type: "Videos",
    itemCount: 71,
    thumbnail:
      "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png",
  },
  {
    id: 27,
    title: "Collection 27",
    type: "Videos",
    itemCount: 23,
    thumbnail: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
  },
  {
    id: 28,
    title: "Collection 28",
    type: "Documents",
    itemCount: 56,
    thumbnail:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
  },
  {
    id: 29,
    title: "Collection 29",
    type: "Photos",
    itemCount: 26,
    thumbnail:
      "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg",
  },
  {
    id: 30,
    title: "Collection 30",
    type: "Photos",
    itemCount: 63,
    thumbnail:
      "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg",
  },
  {
    id: 31,
    title: "Collection 31",
    type: "Videos",
    itemCount: 93,
    thumbnail:
      "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
  },
  {
    id: 32,
    title: "Collection 32",
    type: "Photos",
    itemCount: 25,
    thumbnail:
      "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
  },
  {
    id: 33,
    title: "Collection 33",
    type: "Photos",
    itemCount: 99,
    thumbnail:
      "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
  },
  {
    id: 34,
    title: "Collection 34",
    type: "Videos",
    itemCount: 54,
    thumbnail:
      "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg",
  },
  {
    id: 35,
    title: "Collection 35",
    type: "Photos",
    itemCount: 85,
    thumbnail:
      "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
  },
  {
    id: 36,
    title: "Collection 36",
    type: "Documents",
    itemCount: 95,
    thumbnail:
      "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
  },
  {
    id: 37,
    title: "Collection 37",
    type: "Documents",
    itemCount: 16,
    thumbnail: "https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg",
  },
  {
    id: 38,
    title: "Collection 38",
    type: "Photos",
    itemCount: 52,
    thumbnail:
      "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
  },
  {
    id: 39,
    title: "Collection 39",
    type: "Videos",
    itemCount: 65,
    thumbnail:
      "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
  },
  {
    id: 40,
    title: "Collection 40",
    type: "Videos",
    itemCount: 38,
    thumbnail:
      "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
  },
  {
    id: 41,
    title: "Collection 41",
    type: "Videos",
    itemCount: 88,
    thumbnail:
      "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png",
  },
  {
    id: 42,
    title: "Collection 42",
    type: "Photos",
    itemCount: 66,
    thumbnail:
      "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
  },
  {
    id: 43,
    title: "Collection 43",
    type: "Documents",
    itemCount: 76,
    thumbnail:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
  },
  {
    id: 44,
    title: "Collection 44",
    type: "Documents",
    itemCount: 83,
    thumbnail:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  },
  {
    id: 45,
    title: "Collection 45",
    type: "Photos",
    itemCount: 69,
    thumbnail:
      "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg",
  },
  {
    id: 46,
    title: "Collection 46",
    type: "Documents",
    itemCount: 21,
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    id: 47,
    title: "Collection 47",
    type: "Videos",
    itemCount: 80,
    thumbnail:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  },
  {
    id: 48,
    title: "Collection 48",
    type: "Documents",
    itemCount: 80,
    thumbnail:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
  },
  {
    id: 49,
    title: "Collection 49",
    type: "Videos",
    itemCount: 85,
    thumbnail:
      "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg",
  },
  {
    id: 50,
    title: "Collection 50",
    type: "Photos",
    itemCount: 4,
    thumbnail:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
  },
];
