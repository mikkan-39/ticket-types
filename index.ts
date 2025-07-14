export type TicketType =
  'VISITOR'
  | 'CAR'
  | 'GOODSIN'
  | 'GOODSOUT'
  | 'CARD'
  | 'BLOCK_CARD';

export type TicketComponent =
  'TextInput'
  | 'TextArea'
  | 'Checkbox'
  | 'DatePicker'
  | 'ListPicker'
  | 'FilePicker';

export type TicketField =
  { // Generic fields
    key: string;
    label: string;
    component: Exclude<TicketComponent, 'ListPicker'>;
    visible?: string;
    validate?: string;
    placeholder?: string;
  } |
  { // ListPicker
    key: string;
    label: string;
    component: 'ListPicker';
    visible?: string;
    validate?: string;
    sourceKey: string;  // e.g. 'parkings', something from app's SessionState type
    defaultToFirstItem: boolean;
  }

export interface TicketConfig {
  typeId: number;
  onCreateStatus: number;
  type: TicketType;
  displayName: string;
  fields: TicketField[];
}

export type TicketConfigMap = Record<TicketType, TicketConfig>;
