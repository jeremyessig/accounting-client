import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function AccountingDataGrid() {
  return (
      <DataGrid 
        autoPageSize 
        editMode="row" 
        rows={rows} 
        columns={columns} 
        rowHeight={35}
        sx={{minHeight: 'calc(100vh - 12rem)', backgroundColor:'white'}}/>
  );
}

const columns: GridColDef[] = [
    {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 110,
    editable: true,
    align:'center'
  },
  {
    field: 'amount',
    headerName: 'Montant',
    type: 'number',
    editable: true,
    align: 'right',
    headerAlign: 'left',
    valueFormatter(params) {
      if (params.value == '') {
                return '';
              }
              return `${params.value.toLocaleString()} €`;
    },
  },
  { field: 'label', 
    headerName: 'Libellé', 
    width: 280, 
    editable: true },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    label: randomTraderName(),
    amount: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    label: randomTraderName(),
    amount: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    label: randomTraderName(),
    amount: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    label: randomTraderName(),
    amount: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    label: randomTraderName(),
    amount: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  }
];
