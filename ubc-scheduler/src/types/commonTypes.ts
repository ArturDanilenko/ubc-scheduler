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
    courseCode: string,
    courseNumber: string,
    sections: string,
    prerequisites: string,
    corequisites: string,
    requiredSections: string,
    credits: number,
    year: number
}
  
export type ArticleState = {
    articles: IArticle[]
}

export type CourseState = {
    courses: ICourse[]
}
  
export type ArticleAction = {
    type: string
    article: IArticle
}

export type CourseAction = {
    type: string,
    course: ICourse
}
  
export type DispatchType = (args: ArticleAction) => ArticleAction
export type DispatchTypeCourses = (args: CourseAction) => CourseAction
