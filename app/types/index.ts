import { StaticImageData } from "next/image";

export type MessageType = {
  name: string;
  text: string;
  avatar: StaticImageData;
  id: number;
  unread: string;
  date: string;
};
