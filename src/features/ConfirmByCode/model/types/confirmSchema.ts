export interface ConfirmCodeSchema {
    code: string;
    isConfirm: boolean;
    isLoading: boolean;
    error?: string;
}
