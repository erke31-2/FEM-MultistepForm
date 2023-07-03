export interface Step{
    stepNo: number;
    stepName: string;
    stepInfo: string
}

const steps: Step[] = [
    {
        stepNo: 1,
        stepName: "STEP 1",
        stepInfo: "YOUR INFO"

    },
    {
        stepNo: 2,
        stepName: "STEP 2",
        stepInfo: "SELECT PLAN"

    },
    {
        stepNo: 3,
        stepName: "STEP 3",
        stepInfo: "ADD-ONS"

    },
    {
        stepNo: 4,
        stepName: "STEP 4",
        stepInfo: "SUMMARY"

    },
]

export default steps;