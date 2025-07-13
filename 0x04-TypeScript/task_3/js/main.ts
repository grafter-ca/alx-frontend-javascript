

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

/// This code demonstrates how to use the CRUD operations defined in the CRUD module
// to manage a list of students in a table format.

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
CRUD.deleteRow(125); // Example of deleting a row with a specific ID


