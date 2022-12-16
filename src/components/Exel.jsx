'use strict';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';

const GridExample = (props) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState(props.columns);
    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            minWidth: 100,
            flex: 1,
        };
    }, []);
    const excelStyles = useMemo(() => {
        return [];
    }, []);

    const onGridReady = useCallback((params) => {



        setRowData(props.arr)
        // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        //     .then((resp) => resp.json())
        //     .then((data) => setRowData(data));



    }, []);

    const onBtnExportDataAsExcel = useCallback(() => {
        gridRef.current.api.exportDataAsExcel();
    }, []);

    return (
        <div style={containerStyle}>
            <div className="page-wrapper">
                <div>
                    <button
                        onClick={onBtnExportDataAsExcel}
                        style={{ marginBottom: '5px', fontWeight: 'bold' }}
                    >
                        Export to Excel
                    </button>
                </div>

                <div className="grid-wrapper">
                    <div style={gridStyle} className="ag-theme-alpine">
                        <AgGridReact
                            ref={gridRef}
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            excelStyles={excelStyles}
                            onGridReady={onGridReady}
                        ></AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    );
};

// render(<GridExample></GridExample>, document.querySelector('#root'));
export default GridExample;