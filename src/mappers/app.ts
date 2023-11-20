import {ToastOptions} from 'react-toastify';

export interface Alert {
    message: string;
    type: string;
}

export interface AppState {
    loading: boolean;
    reload: boolean;
    showAlert: boolean;
    alert: Alert;
    value?:boolean;
    familyMembers: DetailsArray[],
}
export interface DetailsArray {
    firstName: '',
          familyName:'',
          gender:'',
          age:'',
          relationship:'',
          acedemicLevel:'',
          maritalStatus:'',
          occupation:''
}
export interface ToastProps extends ToastOptions {
    message: string;
    toastId?: string;
}


export interface RootState {
    app: AppState;
}
