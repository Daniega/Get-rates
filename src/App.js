import React, { useEffect, useState } from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

//services
import { getData } from './services/rates';
//constants
import { TIME_TO_WAIT } from './services/rates';
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
	const [rows, setRows] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getDataForRows = async () => {
			setIsLoading(true); //show LinearProgress Bar
			let data = await getData();
			setRows(data);
			setIsLoading(false); //after we get data, remove LinearProgress Bar
		};
		getDataForRows();
		const dataInterval = setInterval(getDataForRows, TIME_TO_WAIT); //refresh data every 20 minutes
		return () => clearInterval(dataInterval);
	}, []);

	return (
		<div className='app-container'>
			<div className='table-container'>
				{isLoading ? (
					<LinearProgress />
				) : (
					<TableContainer component={Paper} className={classes.tableContainer}>
						<Table className={classes.table} size='small'>
							<TableHead>
								<TableRow>
									{tableHeaders.map((header, index) => {
										return (
											<TableCell align='left' key={index}>
												{header.toUpperCase()}
											</TableCell>
										);
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, index) => (
									<TableRow key={index} hover>
										<TableCell align='left'>{row.currency}</TableCell>
										<TableCell align='left'>{row.rate}</TableCell>
										<TableCell align='left'>{row.bid}</TableCell>
										<TableCell align='left'>{row.ask}</TableCell>
										<TableCell align='left'>{row.high}</TableCell>
										<TableCell align='left'>{row.low}</TableCell>
										<TableCell align='left'>{row.open}</TableCell>
										<TableCell align='left'>{row.close}</TableCell>
										<TableCell align='left'>{row.timestamp}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</div>
		</div>
	);
}

export default App;
