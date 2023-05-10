
export type MonthRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export class StrictDate {
    year : number
    month : MonthRange
    date : number
    private constructor(year : number, month : MonthRange , date : number) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    toString() : string {
        return `${this.year}/${this.month}/${this.date}`;
    }
    toComparable() : number {
        return this.year * 10000 + this.month * 100 + this.date;
    }

    toDate() : Date {
        return new Date(this.toString());
    }

    setDate( date : number ) : StrictDate {
        const temp = this.toDate()
        temp.setDate( date )
        return StrictDate.ofDate(temp);
    }

    addYear( append : number ) : StrictDate {
        return StrictDate.of(this.year + append, this.month, this.date);
    }

    addMonth( append : number ) : StrictDate {
        const temp = this.toDate()
        temp.setMonth(temp.getMonth() + append)
        return StrictDate.ofDate(temp);
    }

    addDate( append : number ) : StrictDate {
        const temp = this.toDate()
        temp.setDate(temp.getDate() + append);
        return StrictDate.ofDate(temp);
    }

    static of(year : number, month : MonthRange , date : number) : StrictDate {
        return new StrictDate(year, month, date)
    }

    static ofDate( input : Date = new Date() ) : StrictDate {
        return new StrictDate( input.getFullYear(), input.getMonth() + 1 as MonthRange, input.getDate())
    }

    static ofFormattedString( formatted : string ) : StrictDate {
        return StrictDate.ofDate( new Date(formatted) )
    }
}