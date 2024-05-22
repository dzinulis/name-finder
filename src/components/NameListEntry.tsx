import { NameInfo } from "../api/fetchNames";

export const NameListEntry = (nameInfo: NameInfo) => {
    const months: string[] = [
        'Janvāris', 'Februāris', 'Marts',
        'Aprīlis', 'Maijs', 'Jūnijs', 
        'Jūlijs', 'Augusts', 'Septembris',
        'Oktobris', 'Novembris', 'Decembris'];
    return (
        <>
            <div>
                <span style={{ float: "right" }}>
                    {nameInfo.day}.{months[nameInfo.month - 1]}
                </span>
            </div>
        </>
    )
}