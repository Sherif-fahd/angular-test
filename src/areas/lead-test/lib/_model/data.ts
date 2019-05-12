export class DataElement {
    $id: string;
    Id: number;
    Name: string;
    MacAddress: string;
    MLPS: number;
    TankTotalCapacity: number;
    TankRemainedCapacity: number;
    UserId: string;
    Activities?: any;
}

export interface DataApiResponse {
    $id: string;
    total: number;
    status: number;
    Message: string;
    Data: DataElement[];
}
