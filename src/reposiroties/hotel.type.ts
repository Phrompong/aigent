export type Hotel = {
  hid: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  review_hotel: {
    hid: number;
    rating: number;
  };
};
