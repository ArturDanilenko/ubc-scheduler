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