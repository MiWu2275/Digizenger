import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./Store";

// Lesson interface - individual lesson ကို သတ်မှတ်ခြင်း
interface Lesson {
  id: number;
  name: string;
  description: string;
  instructor_name: string;
  is_premium: boolean;
  is_publish: boolean;
  image: string;
}

// LessonState interface - Redux state ကို သတ်မှတ်ခြင်း
interface LessonState {
  allLessons: Lesson[];
  visibleLessons: Lesson[];
}

const initialState: LessonState = {
  allLessons: [],
  visibleLessons: [],  // Initialize with empty array
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setcourse: (state, action: PayloadAction<Lesson[]>) => {
      state.allLessons = action.payload;
    //   state.visibleLessons = action.payload;  // Initially, visible lessons show all lessons
    },
    showFreecourse: (state) => {
      state.visibleLessons = state.allLessons.filter(
        lesson => lesson.is_publish === true 
      );
    },
    showPremiumcourse: (state) => {
      state.visibleLessons = state.allLessons.filter(
        lesson => lesson.is_premium === true
      );
    }
  }
});

export const selectCourse = (state: RootState) => state.course.visibleLessons;
// Action creators
export const { setcourse, showFreecourse, showPremiumcourse } = courseSlice.actions;
// Reducer
export default courseSlice.reducer;
