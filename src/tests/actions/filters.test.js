import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });    
});

test('should set text filter object with provided values', () => {
    const filter = setTextFilter('rent');
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should set text filter object with default values', () => {
    const filter = setTextFilter();
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up sort by date action object', () => {
    //const filter = sortByDate();
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('should set up sort by amount object', () => {
    //const filter = sortByAmount();
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});