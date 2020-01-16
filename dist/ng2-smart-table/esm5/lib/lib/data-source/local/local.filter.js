export function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
var LocalFilter = /** @class */ (function () {
    function LocalFilter() {
    }
    LocalFilter.filter = function (data, field, search, customFilter) {
        var filter = customFilter ? customFilter : filterValues;
        return data.filter(function (el) {
            var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    };
    return LocalFilter;
}());
export { LocalFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhLEVBQUUsTUFBYztJQUN4RCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBUlEsa0JBQU0sR0FBYixVQUFjLElBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxZQUF1QjtRQUNwRixJQUFNLE1BQU0sR0FBYSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUU7WUFDcEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZmlsdGVyVmFsdWVzKHZhbHVlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsRmlsdGVyIHtcclxuXHJcbiAgc3RhdGljIGZpbHRlcihkYXRhOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgY3VzdG9tRmlsdGVyPzogRnVuY3Rpb24pOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IGZpbHRlcjogRnVuY3Rpb24gPSBjdXN0b21GaWx0ZXIgPyBjdXN0b21GaWx0ZXIgOiBmaWx0ZXJWYWx1ZXM7XHJcblxyXG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBlbFtmaWVsZF0gPT09ICd1bmRlZmluZWQnIHx8IGVsW2ZpZWxkXSA9PT0gbnVsbCA/ICcnIDogZWxbZmllbGRdO1xyXG4gICAgICByZXR1cm4gZmlsdGVyLmNhbGwobnVsbCwgdmFsdWUsIHNlYXJjaCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19