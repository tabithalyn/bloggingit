export interface IPost {
  id:string;
  postTitle:string;
  postBody:string;
  currentMood:string;
}

export const Page = {
  List: "list",
  Add: "add",
  Edit: "edit"
} as const;

type ObjectValues<T> = T[keyof T];

export type Page = ObjectValues<typeof Page>;