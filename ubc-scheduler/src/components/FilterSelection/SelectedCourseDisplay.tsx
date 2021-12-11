import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IQueryBuilderEntry } from '../../Definitions/Interfaces/QueryBuilderInterfaces';
import { selectQueriedCourses } from '../../Selectors/queryBuilderSelectors';
import { shallowEqual, useSelector } from 'react-redux';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
  margin: '20px',
  padding: '0px',
  borderRadius: '3px'
};

const SelectedCourseDisplay: React.FC = () => {

    const queriedCourses: IQueryBuilderEntry[] = useSelector(
        selectQueriedCourses,
        shallowEqual
    );

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            {queriedCourses ? queriedCourses.map((queriedCourse: IQueryBuilderEntry) => (
            <ListItem key={queriedCourse.courseCode+queriedCourse.courseNumber+queriedCourse.year+queriedCourse.term}>
                <ListItemText primary={queriedCourse.courseCode} secondary={`Year: ${queriedCourse.year} Term: ${queriedCourse.term} Course Number: ${queriedCourse.courseNumber}`}/>
            </ListItem>
            )) : <></>}
        </List>
    );
}

export default SelectedCourseDisplay;