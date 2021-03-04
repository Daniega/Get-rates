import React, { useEffect, useState } from 'react';
//Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//styles
import './App.css';

const useStyles = makeStyles({
	table: {
		minWidth: 400,
	},
	tableContainer: {
		maxHeight: 600,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const tableHeaders = [
	'Currency',
	'Rate',
	'Bid',
	'Ask',
	'High',
	'Low',
	'Open',
	'Close',
	'Timestamp',
];

function App() {
	const classes = useStyles();
	const [state, setState] = useState({ numberOfTries: 0, lastTry: null });
	const [data, setData] = useState([
		{
			Currency: 'EUR/USD',
			Rate: '1.13625',
			Bid: '1.13625',
			Ask: '1.13638',
			High: '1.14081',
			Low: '1.13527',
			Open: '1.13725',
			Close: '1.13625',
			Timestamp: '1551477238763',
		},
	]);

	return (
		<div className='app-container'>
			<div className='table-container'>
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table className={classes.table} size='small'>
						<TableHead>
							<TableRow>
								{tableHeaders.map((header, index) => {
									return (
										<TableCell align='left' key={index}>
											{header}
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow key={index}>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell align='left'>{row.calories}</TableCell>
									<TableCell align='left'>{row.carbs}</TableCell>
									<TableCell align='Left'>{row.protein}</TableCell>
									<TableCell align='left'>{row.fat}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<Button variant='contained' color='primary'>
					Get Data
				</Button>
			</div>
		</div>
	);
}

export default App;
