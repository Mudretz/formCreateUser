export interface IPersonalInfoData {
    nickname: string,
    name: string,
    surname: string,
    sex: {
        value: string,
        label: string
    }
}
export interface IPersonalInfoState {
    personalInfo: IPersonalInfoData
}