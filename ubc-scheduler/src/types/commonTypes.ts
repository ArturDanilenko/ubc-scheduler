export interface ApplicationState {
    articleState: ArticleState | undefined,
    courseState: CourseState | undefined
}

export interface IArticle {
    id: number,
    title: string,
    body: string
}

export interface ICourse {
    id: number,
    courseId: string,
    courseName: string,
    courseDescription: string,
    sections: ISection[],
    prerequisites: string,
    corequisites: string,
    requiredSections: string,
    credits: number,
    year: number
}

export interface ISection {
    sectionCode: string,
    prof: string,
    schedule: ISchedule[]
}

export interface ISchedule {
    day: string,
    starttime: number,
    endTime: number,
    building: string,
    room: string
}
  
export type ArticleState = {
    articles: IArticle[]
}

export type CourseState = {
    courses?: ICourse[],
    loading: boolean
}
  
export type ArticleAction = {
    type: string
    article: IArticle
}

export type CourseAction = {
    type: string, 
    courses?: ICourse[]
}
  
export type DispatchType = (args: ArticleAction) => ArticleAction
export type DispatchTypeCourses = (args: CourseAction) => CourseAction
