
export type CollectionType = 'Photos' | 'Videos' | 'Documents';

export interface Collection {
  id: number;
  title: string;
  type: CollectionType;
  itemCount: number;
  thumbnail: string;
  locked?: boolean;
}



export const INITIAL_COLLECTION: Collection[] =[
    {
      "id": 1,
      "title": "City Lights",
      "type": "Videos",
      "itemCount": 37,
      "thumbnail": "https://picsum.photos/seed/1/200/120"
    },
    {
      "id": 2,
      "title": "Hilltops",
      "type": "Videos",
      "itemCount": 77,
      "thumbnail": "https://picsum.photos/seed/2/200/120"
    },
    {
      "id": 3,
      "title": "Travel Diaries",
      "type": "Videos",
      "itemCount": 14,
      "thumbnail": "https://picsum.photos/seed/3/200/120"
    },
    {
      "id": 4,
      "title": "City Break",
      "type": "Photos",
   
     "itemCount": 69,
      "thumbnail": "https://picsum.photos/seed/4/200/120"
    },
    {
      "id": 5,
      "title": "Lake Reflections",
      "type": "Photos",
      "itemCount": 13,
      "thumbnail": "https://picsum.photos/seed/5/200/120"
    },
    {
      "id": 6,
      "title": "Ocean Waves",
      "type": "Photos",
      "itemCount": 24,
      "thumbnail": "https://picsum.photos/seed/6/200/120"
    },
    {
      "id": 7,
      "title": "Sunset Chasers",
      "type": "Photos",
      "itemCount": 96,
      "thumbnail": "https://picsum.photos/seed/7/200/120"
    },
    {
      "id": 8,
      "title": "Valley Views",
      "type": "Documents",
      "itemCount": 44,
      "thumbnail": "https://picsum.photos/seed/8/200/120"
    },
    {
      "id": 9,
      "title": "Valley Views",
      "type": "Photos",
      "itemCount":64,
      "thumbnail": "https://picsum.photos/seed/9/200/120"
    },
    {
      "id": 10,
      "title": "Sunset Chasers",
      "type": "Documents",
      "itemCount": 94,
      "thumbnail": "https://picsum.photos/seed/10/200/120"
    },
    {
      "id": 11,
      "title": "Mountain Climbs",
      "type": "Photos",
      "itemCount": 13,
      "thumbnail": "https://picsum.photos/seed/11/200/120"
    },
    {
      "id": 12,
      "title": "Urban Jungle",
      "type": "Photos",
      "itemCount": 4,
      "thumbnail": "https://picsum.photos/seed/12/200/120"
    },
    {
      "id": 13,
      "title": "Food Journey",
      "type": "Photos",
      "itemCount": 82,
      "thumbnail": "https://picsum.photos/seed/13/200/120"
    },
    {
      "id": 14,
      "title": "Travel Diaries",
      "type": "Documents",
      "itemCount": 2
  ,
      "thumbnail": "https://picsum.photos/seed/14/200/120"
    },
    {
      "id": 15,
      "title": "Lake Reflections",
      "type": "Documents",
      "itemCount": 93,
      "thumbnail": "https://picsum.photos/seed/15/200/120"
    },
    {
      "id": 16,
      "title": "Beach Life",
      "type": "Photos",
      "itemCount": 75,
      "thumbnail": "https://picsum.photos/seed/16/200/120"
    },
    {
      "id": 17,
      "title": "Hilltops",
      "type": "Documents",
      "itemCount": 80,
      "thumbnail": "https://picsum.photos/seed/17/200/120"
    },
    {
      "id": 18,
      "title": "Garden Delights",
      "type": "Documents",
      "itemCount": 88,
      "thumbnail": "https://picsum.photos/seed/18/200/120"
    },
    {
      "id": 19,
      "title": "Night Life",
      "type": "Videos",
      "itemCount": 94,
     "thumbnail": "https://picsum.photos/seed/19/200/120"
    },
    {
      "id": 20,
      "title": "Food Journey",
      "type": "Documents",
      "itemCount": 28,
      "thumbnail": "https://picsum.photos/seed/20/200/120"
    },
    {
      "id": 21,
      "title": "Urban Jungle",
      "type": "Documents",
      "itemCount": 93,
      "thumbnail": "https://picsum.photos/seed/21/200/120"
    },
    {
      "id": 22,
      "title": "Ocean Waves",
      "type": "Documents",
      "itemCount": 5,
      "thumbnail": "https://picsum.photos/seed/22/200/120"
    },
    {
      "id": 23,
      "title": "Travel Diaries",
      "type": "Photos",
      "itemCount": 88,
      "thumbnail": "https://picsum.photos/seed/23/200/120"
    },
    {
      "id": 24,
      "title": "Rural Life",
      "type": "Photos",
      "itemCount": 97,
      "thumbnail": "https://picsum.photos/seed/24/200/120"
    },
    {
      "id": 25,
      "title": "Mountain Climbs",
      "type": "Documents",
      "itemCount": 56,
      "thumbnail": "https://picsum.photos/seed/25/200/120"
    },
    {
      "id": 26,
      "title": "Desert Sands",
  
      "type": "Videos",
      "itemCount": 71,
      "thumbnail": "https://picsum.photos/seed/26/200/120"
    },
    {
      "id": 27,
      "title": "Park Life",
      "type": "Videos",
      "itemCount": 23,
      "thumbnail": "https://picsum.photos/seed/27/200/120"
    },
    {
  
      "id": 28,
      "title": "Mountain Peaks",
      "type": "Documents",
      "itemCount": 56,
      "thumbnail": "https://picsum.photos/seed/28/200/120"
    },
    {
      "id": 29,
      "title": "River Cruises",
      "type": "Photos",
      "itemCount": 26,
      "thumbnail": "https://picsum.photos/seed/29/200/120"
    },
    {
      "id": 30,
      "title": "Forest Trails",
      "type": "Photos",
      "itemCount": 63,
      "thumbnail": "https://picsum.photos/seed/30/200/120"
    },
    {
      "id": 31,
      "title": "Beach Life",
      "type"
  : "Videos",
      "itemCount": 93,
      "thumbnail": "https://picsum.photos/seed/31/200/120"
    },
    {
      "id": 32,
      "title": "Lake Reflections",
      "type": "Photos",
      "itemCount": 25,
      "thumbnail": "https://picsum.photos/seed/32/200/120"
    },
    {
     
   "id": 33,
      "title": "City Break",
      "type": "Photos",
      "itemCount": 99,
      "thumbnail": "https://picsum.photos/seed/33/200/120"
    },
    {
      "id": 34,
      "title": "Summer Adventures",
      "type": "Videos",
      "itemCount": 54,
      "thumbnail": "https://picsum.photos/seed/34/200/120"
    },
    {
      "id": 35,
      "title": "Beach Life",
      "type": "Photos",
      "itemCount": 85,
      "thumbnail": "https://picsum.photos/seed/35/200/120"
    },
    {
      "id": 36,
      "title": "City Lights",
      "type": "Documents",
      "itemCount": 95,
      "thumbnail": "https://picsum.photos/seed/36/200/120"
    },
    {
      "id": 37,
      "title": "Night Life",
      "type": "Documents",
      "itemCount": 16,
      "thumbnail": "https://picsum.photos/seed/37/200/120"
    },
    {
      "id": 38
  ,
      "title": "Hilltops",
      "type": "Photos",
      "itemCount": 52,
      "thumbnail": "https://picsum.photos/seed/38/200/120"
    },
    {
      "id": 39,
      "title": "Mountain Views",
      "type": "Videos",
      "itemCount": 65,
      "thumbnail": "https://picsum.photos/seed/39/200/120"
    },
    {
      "id": 40,
      "title": "Urban Jungle",
      "type": "Videos",
      "itemCount": 38,
      "thumbnail": "https://picsum.photos/seed/40/200/120"
    },
    {
      "id": 41,
      "title": "Wildlife Photography",
      "type": "Videos",
   
     "itemCount": 88,
      "thumbnail": "https://picsum.photos/seed/41/200/120"
    },
    {
      "id": 42,
      "title": "Coastal Views",
      "type": "Photos",
      "itemCount": 66,
      "thumbnail": "https://picsum.photos/seed/42/200/120"
    },
    {
      "id": 43,
      
  "title": "Forest Bathing",
      "type": "Documents",
      "itemCount": 76,
      "thumbnail": "https://picsum.photos/seed/43/200/120"
    },
    {
      "id": 44,
      "title": "Forest Trails",
      "type": "Documents",
      "itemCount": 83,
      "thumbnail": "https://picsum.photos/seed/44/200/120"
    },
    {
      "id": 45,
      "title": "Lake Reflections",
      "type": "Photos",
      "itemCount": 69,
      "thumbnail": "https://picsum.photos/seed/45/200/120"
    },
    {
      "id": 46,
      "title": "Nature Escapes",
      "type": "Documents",
      "itemCount": 21,
      "thumbnail": "https://picsum.photos/seed/46/200/120"
    },
    {
      "id": 47,
      "title": "Morning Dew",
      "type": "Videos",
      "itemCount": 80,
      "thumbnail": "https://picsum.photos/seed/47/200/120"
    },
    {
      "id": 48,
  
      "title": "City Lights",
      "type": "Documents",
      "itemCount": 80,
      "thumbnail": "https://picsum.photos/seed/48/200/120"
    },
    {
      "id": 49,
      "title": "Hilltops",
      "type": "Videos",
      "itemCount": 85,
      "thumbnail": "https://picsum.photos/seed/49/200/120"
    },
    {
      "id": 50,
      "title": "Mountain Climbs",
      "type": "Photos",
      "itemCount": 4,
      "thumbnail": "https://picsum.photos/seed/50/200/120"
    }
  ]