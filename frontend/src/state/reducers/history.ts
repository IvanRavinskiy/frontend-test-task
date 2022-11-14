import {createSlice} from '@reduxjs/toolkit';
import {HISTORY, SLICES} from '../../constants/slices';
import {EventType} from '../../utils/configureData';

type HistoryState = {
  isLoading: boolean;
  events: EventType[];
};

const SLICE_INITIAL: HistoryState = {
  isLoading: false,
  events: [],
};

const historySlice = createSlice({
  name: SLICES.HISTORY,
  initialState: SLICE_INITIAL,
  reducers: {
    [HISTORY.GET_EVENTS](state) {
      state.isLoading = true;
    },
    [HISTORY.SUCCESS_EVENTS](state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },
    [HISTORY.SUCCESS_RESOURCES](state, action) {
      state.isLoading = false;
      console.log('action.payload', action.payload);
      let curEvent = state.events.filter(el => {
        console.log(el);
        return action.payload[0].includes(el.id);
      });
      console.log(curEvent);
    },
  },
});

export const {actions, reducer: historyReducer} = historySlice;
export const {GET_EVENTS, SUCCESS_EVENTS, SUCCESS_RESOURCES} =
  historySlice.actions;
