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

export interface ICourseNumbers {
    courseCode: string, 
    numbers: number[]
};

export interface ISelectedData {
    numeric?: number,
    written?: string
}

export interface IQueryBuilderEntry {
    courseCode: string,
    year?: number,
    courseNumber?: number,
    term?: number 
};

export interface ISchedule {
    day: string,
    starttime: number,
    endTime: number,
    building: string,
    room: string
}

export interface ISection {
    sectionCode: string,
    prof: string,
    schedule: ISchedule[]
}
