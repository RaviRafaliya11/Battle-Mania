import { combineReducers } from "redux";
import {
  Game_Reducer,
  Game_Result_Reducer,
  Ongoing_Game_Reducer,
  Single_Game_Reducer,
  Upcoming_Game_Reducer,
  Participants_Reducer,
  Single_Result_Reducer,
  Joined_Players_Reducer,
  Join_Match_Reducer,
} from "./GameReducer";
import Announcement_Reducer from "./AnnouncementReducer";
import { Refer, Slider } from "./BannerReducers";
import {
  About_Us,
  Country_Reducer,
  Customer_Support,
  Leader_Board,
  Terms_Condition,
  Top_Players,
} from "./InformationReducer";
import {
  User_Profile,
  Wallet_Transaction,
  User_Dashboard,
  User_Order,
  User_Statistics,
  User_Referral,
  User_Match_Reducer,
} from "./UserReducers";
import {
  Login_Reducer,
  Change_Password,
  Register_Reducer,
  Payment_Method_Reducer,
} from "./ServicesReducers";

const rootReducer = combineReducers({
  games: Game_Reducer,
  announcement: Announcement_Reducer,
  slider: Slider,
  refer_images: Refer,
  country: Country_Reducer,
  user_profile: User_Profile,
  wallet_transaction: Wallet_Transaction,
  dashboard: User_Dashboard,
  order: User_Order,
  statistics: User_Statistics,
  referral: User_Referral,
  top_players: Top_Players,
  leaderboard: Leader_Board,
  about_us: About_Us,
  customer_support: Customer_Support,
  terms_conditions: Terms_Condition,
  logindata: Login_Reducer,
  change_password_data: Change_Password,
  register_data: Register_Reducer,
  upcoming_games: Upcoming_Game_Reducer,
  ongoing_games: Ongoing_Game_Reducer,
  game_result: Game_Result_Reducer,
  singlegame: Single_Game_Reducer,
  participants: Participants_Reducer,
  match_winner: Single_Result_Reducer,
  full_result: Single_Result_Reducer,
  match_deatils: Single_Result_Reducer,
  joined_players: Joined_Players_Reducer,
  join_match: Join_Match_Reducer,
  user_matches: User_Match_Reducer,
  payment_method: Payment_Method_Reducer,
});

export default rootReducer;
