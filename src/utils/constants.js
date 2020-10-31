require("dotenv").config();

export const drawerWidth = 240;
const port = window.BACKEND_PORT;
const prod = process.env.NODE_ENV === 'production';
export const url = port === 0 || prod ? "https://flockr-be.herokuapp.com" : "http://localhost:" + port;

export const PERMISSION_IDS = {
  OWNER: 1,
  MEMBER: 2
};
export const PAGINATION_SIZE = 50;
export const SLICE_SIZE = 10;
