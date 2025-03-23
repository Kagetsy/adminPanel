import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function TableBase(){
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
        id += 1;
        return { id, name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <Paper className={"tableRoot"}>
            <Table className={"table"}>
                <TableHead className="tableHead">
                <TableRow>
                    <TableCell className="tableHeadCell">Dessert (100g serving)</TableCell>
                    <TableCell className="tableHeadCell" align="right">Calories</TableCell>
                    <TableCell className="tableHeadCell" align="right">Fat (g)</TableCell>
                    <TableCell className="tableHeadCell" align="right">Carbs (g)</TableCell>
                    <TableCell className="tableHeadCell" align="right">Protein (g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow className={"tableRow"} key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    );
}