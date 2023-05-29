export type DOMMessage = {
  type: "GET_DOM";
};

export type DOMMessageResponse = {
  title: string;
  url: string;
  headlines: string[];
  content: string;
};
