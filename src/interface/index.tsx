export interface PropsCalendar {
    name?: string;
    color?: string;
    borderColor?: string;
    daysDisabled?: string[];
    disabledDates?: string[] | any | moment.MomentInput[] | undefined;
    hoursDisabled?: string[] | any | moment.MomentInput[] | undefined;
    days?: string[] | any | moment.MomentInput[] | undefined;
    value?: string | any | moment.MomentInput | undefined;
    onChangeDate: ((value: any) => void) | undefined
    onDayClick?: (value: string) => void;
}

export interface PropsHours {
    name?: string;
    color?: string;
    hoursDisabled?: string[] | any | moment.MomentInput[] | undefined;
    hours?: string[] | any | moment.MomentInput[] | undefined;
    value?: string | any | moment.MomentInput | undefined;
    onChangeHour: ((value: any) => void) | undefined
    onHourClick?: (value: string) => void;
    openingHour?: string;
    closingHour?: string;
    intervalHours?: number;
}