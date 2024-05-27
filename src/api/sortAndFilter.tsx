import { NameInfo } from "./fetchNames";

interface sortAndFilterProps {
    genderValue: string[];
    monthValue: number[];
    minLength: number;
    maxLength: number;
    sortValue: string;
    sortDirection: number;
    data: NameInfo[];
}

function sortAndFilter({ genderValue, monthValue, minLength, maxLength, sortValue, sortDirection, data }: sortAndFilterProps) {
    function filterGender(nameInfo: NameInfo): boolean {
        var result: boolean = false;
        for (var x of genderValue) {
            result = result || nameInfo.gender === x;
        }
        return result;
    }

    function filterMonths(nameInfo: NameInfo): boolean {
        var result: boolean = false;
        for (var x of monthValue) {
            result = result || nameInfo.month === x;
        }
        return result;
    }

    function filterLength(nameInfo: NameInfo): boolean {
        return (nameInfo.namelength >= minLength) && (nameInfo.namelength <= maxLength);
    }

    function filterNames(nameInfo: NameInfo): boolean {
        return filterMonths(nameInfo) && filterGender(nameInfo) && filterLength(nameInfo);
    }

    function sortNames(a: NameInfo, b: NameInfo): number {
        switch (sortValue) {
            case "id":
                return (a.id - b.id) * sortDirection;
            case "name":
                return (a.name.localeCompare(b.name, "lv")) * sortDirection;
            case "namelength":
                return (a.namelength - b.namelength) * sortDirection;
            default:
                return 0;
        }
    }
    return data.filter(filterNames).sort(sortNames);
}

export default sortAndFilter;