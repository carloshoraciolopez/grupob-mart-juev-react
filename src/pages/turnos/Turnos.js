import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Turnos() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete 
            </Button>
        </Stack>
    );
}

export default Turnos;